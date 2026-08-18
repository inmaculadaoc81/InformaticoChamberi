const { google } = require("googleapis");
const clean=(v,m=2500)=>String(v??"").replace(/[<>]/g,"").trim().slice(0,m);
module.exports=async function handler(req,res){
 const required=["GOOGLE_CLIENT_ID","GOOGLE_CLIENT_SECRET","GOOGLE_REFRESH_TOKEN","GOOGLE_EMAIL","CONTACT_EMAIL"];
 if(req.method==="GET") return res.status(200).json({ok:true,service:"InnovaTech cita API",node:process.version,environment:Object.fromEntries(required.map(k=>[k,Boolean(process.env[k])]))});
 if(req.method!=="POST") return res.status(405).json({ok:false,code:"METHOD_NOT_ALLOWED"});
 try{
  const missing=required.filter(k=>!process.env[k]);
  if(missing.length) return res.status(500).json({ok:false,code:"MISSING_ENVIRONMENT_VARIABLES",missing});
  let d=req.body||{};
  if(typeof d==="string"){try{d=JSON.parse(d)}catch(_){d=Object.fromEntries(new URLSearchParams(d))}}
  const company=clean(d.company,120),contact=clean(d.contact_name,120),phone=clean(d.phone,40),email=clean(d.email,140),service=clean(d.service,160),date=clean(d.date,30),time=clean(d.time,30),message=clean(d.message,2500);
  if(!company||!contact||!phone||!email||!service||!date||!time||!message) return res.status(400).json({ok:false,code:"INVALID_FORM_DATA"});
  const auth=new google.auth.OAuth2(process.env.GOOGLE_CLIENT_ID,process.env.GOOGLE_CLIENT_SECRET);
  auth.setCredentials({refresh_token:process.env.GOOGLE_REFRESH_TOKEN});
  await auth.getAccessToken();
  const gmail=google.gmail({version:"v1",auth});
  const subject=`Nueva solicitud de cita InnovaTech - ${company}`;
  const html=`<h2>Nueva solicitud de cita InnovaTech</h2><p><b>Empresa:</b> ${company}</p><p><b>Persona de contacto:</b> ${contact}</p><p><b>Teléfono:</b> ${phone}</p><p><b>Email:</b> ${email}</p><p><b>Servicio:</b> ${service}</p><p><b>Fecha preferida:</b> ${date}</p><p><b>Hora preferida:</b> ${time}</p><p><b>Necesidad:</b><br>${message.replace(/\n/g,"<br>")}</p>`;
  const raw=[`From: InnovaTech <${process.env.GOOGLE_EMAIL}>`,`To: ${process.env.CONTACT_EMAIL}`,`Reply-To: ${email}`,`Subject: =?UTF-8?B?${Buffer.from(subject).toString("base64")}?=`,`MIME-Version: 1.0`,`Content-Type: text/html; charset=UTF-8`,``,html].join("\r\n");
  await gmail.users.messages.send({userId:"me",requestBody:{raw:Buffer.from(raw).toString("base64url")}});
  return res.status(200).json({ok:true});
 }catch(error){
  console.error("InnovaTech Gmail API error:",error);
  return res.status(500).json({ok:false,code:"EMAIL_SEND_FAILED"});
 }
};