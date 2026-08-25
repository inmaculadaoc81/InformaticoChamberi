const nodemailer=require("nodemailer");
const clean=(v,max=2500)=>String(v??"").replace(/[<>]/g,"").trim().slice(0,max);

module.exports=async(req,res)=>{
  if(req.method==="GET"){
    const keys=["SMTP_HOST","SMTP_PORT","SMTP_SECURE","SMTP_USER","SMTP_PASS","CONTACT_EMAIL"];
    return res.status(200).json({
      ok:true,
      service:"InnovaTech contacto API",
      environment:Object.fromEntries(keys.map(k=>[k,Boolean(process.env[k])]))
    });
  }

  if(req.method!=="POST"){
    res.setHeader("Allow","GET, POST");
    return res.status(405).json({ok:false,code:"METHOD_NOT_ALLOWED"});
  }

  try{
    const required=["SMTP_HOST","SMTP_PORT","SMTP_USER","SMTP_PASS"];
    const missing=required.filter(k=>!process.env[k]);
    if(missing.length){
      return res.status(500).json({ok:false,code:"MISSING_SMTP_ENV",missing});
    }

    let d=req.body||{};
    if(typeof d==="string"){
      try{d=JSON.parse(d)}catch(_){d=Object.fromEntries(new URLSearchParams(d))}
    }

    const company=clean(d.company,120);
    const contact=clean(d.contact_name,120);
    const phone=clean(d.phone,40);
    const email=clean(d.email,140);
    const service=clean(d.service,160);
    const message=clean(d.message,2500);

    if(!company||!contact||!phone||!email||!service||!message){
      return res.status(400).json({ok:false,code:"INVALID_FORM_DATA"});
    }

    const port=Number(process.env.SMTP_PORT||465);
    const secure=String(process.env.SMTP_SECURE??(port===465?"true":"false"))==="true";

    const transporter=nodemailer.createTransport({
      host:process.env.SMTP_HOST,
      port,
      secure,
      auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS},
      connectionTimeout:15000,
      greetingTimeout:15000,
      socketTimeout:20000
    });

    await transporter.verify();

    await transporter.sendMail({
      from:`"InnovaTech" <${process.env.SMTP_USER}>`,
      to:process.env.CONTACT_EMAIL||process.env.SMTP_USER,
      replyTo:email,
      subject:`Nueva consulta InnovaTech - ${company}`,
      text:`Nueva consulta InnovaTech

Empresa: ${company}
Persona de contacto: ${contact}
Teléfono: ${phone}
Email: ${email}
Servicio: ${service}

Necesidad:
${message}`,
      html:`<h2>Nueva consulta InnovaTech</h2><p><b>Empresa:</b> ${company}</p><p><b>Persona de contacto:</b> ${contact}</p><p><b>Teléfono:</b> ${phone}</p><p><b>Email:</b> ${email}</p><p><b>Servicio:</b> ${service}</p><p><b>Necesidad:</b><br>${message.replace(/\n/g,"<br>")}</p>`
    });

    return res.status(200).json({ok:true});

  }catch(error){
    console.error("InnovaTech SMTP error",{
      message:error?.message,
      code:error?.code,
      response:error?.response,
      command:error?.command
    });

    return res.status(500).json({
      ok:false,
      code:"SMTP_SEND_FAILED",
      detail:error?.code||"UNKNOWN"
    });
  }
};
