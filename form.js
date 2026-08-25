document.addEventListener('DOMContentLoaded',()=>{
 const form=document.querySelector('#appointment-form');
 if(!form)return;
 const status=document.querySelector('#form-status');
 const submit=form.querySelector('button[type="submit"]');
 form.addEventListener('submit',async(e)=>{
  e.preventDefault();
  if(!form.reportValidity())return;
  const old=submit.textContent;
  submit.disabled=true; submit.textContent='Enviando…';
  status.textContent='Enviando solicitud…'; status.className='status sending';
  try{
   const payload=Object.fromEntries(new FormData(form).entries());
   const response=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
   let data={}; try{data=await response.json()}catch(_){ }
   if(!response.ok||!data.ok) throw new Error(data.code||data.error||`HTTP_${response.status}`);
   status.textContent='✓ Solicitud de cita enviada correctamente.'; status.className='status success';
   form.reset();
  }catch(err){
   console.error('Error formulario InnovaTech:',err);
   if(err.message==='MISSING_SMTP_ENV') status.textContent='La configuración del correo no está completa en Vercel.';
   else if(err.message==='INVALID_FORM_DATA') status.textContent='Revisa los campos obligatorios del formulario.';
   else if(err.message==='SMTP_SEND_FAILED') status.textContent='El servidor recibió el formulario, pero no se pudo enviar el correo.';
   else status.textContent='No se pudo enviar la solicitud. También puedes escribirnos por WhatsApp.';
   status.className='status error';
  }finally{
   submit.disabled=false; submit.textContent=old;
  }
 });
});