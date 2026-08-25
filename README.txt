INNOVATECH — MANTENIMIENTO INFORMÁTICO PARA EMPRESAS (MADRID)

Sitio multipágina (no es la plantilla "one-page" del resto de marcas):
index.html, contacto.html, politica-privacidad.html y 8 páginas de
servicio en /servicios/, todas comparten cabecera, chatbot n8n y footer.

Dominio:
https://serviciotecnicoinformaticomadrid.es/
(coherente en robots.txt y sitemap.xml)

AVISO: el repositorio ToshibaWEB2 (y originalmente Electro360, ya
corregido) usa como dominio "https://informaticoschamberi.com.es/", que
coincide con el nombre de ESTE repositorio (InformaticoChamberi). Es
probable que ese dominio estuviera pensado para este sitio y se copiara
por error en la plantilla de ToshibaWEB2. No se ha tocado nada aquí ni
en ToshibaWEB2 hasta que lo confirmes.

REVISIÓN (fixes aplicados):
- Menú móvil: no existía botón de menú en móvil (.links se ocultaba a
  partir de 900px sin alternativa). Añadido botón .menu-btn + desplegable
  #mobileMenu con todos los enlaces (Inicio, los 8 servicios, Solicitar
  cita, Ubicación, Contacto), aplicado en las 11 páginas del sitio.
- Borde blanco añadido al botón del chatbot (border:1px solid #fff!important).
  Esta web no tenía ningún CSS que reposicionara el chat (a diferencia de
  otras marcas), así que no había colisión [class*="chat-window"] que
  corregir; solo se ha añadido el borde.
- Sección de contenido SEO: NO se ha añadido una nueva, porque el sitio
  ya incluye 8 páginas dedicadas por servicio (/servicios/*.html) con
  contenido propio y específico — más completo que la sección única de
  la plantilla one-page.
- Datos schema.org: no existían en ninguna página. Añadido LocalBusiness
  en index.html (nombre, teléfono, área de servicio Madrid sin dirección
  inventada, enlaces de Maps/YouTube). Pendiente: replicarlo en el resto
  de páginas si se solicita.
- Meta canonical y etiquetas og:* : no existían en NINGUNA página.
  Añadidas solo en index.html por ahora (canonical, og:title,
  og:description, og:type, og:url, robots). Pendiente aplicarlas también
  en contacto.html, política de privacidad y las 8 páginas de servicio.
- H1 de portada ajustado a 3 líneas ("Mantenimiento" / "Informático para
  Empresas" / "Madrid") mediante un salto de línea explícito.
- Alineación de los textos de la cuadrícula de servicios (service-box):
  se heredaba text-align:center de .hero y quedaban centrados; corregido
  a la izquierda.

FORMULARIO DE CITA — CAMBIO IMPORTANTE:
El formulario (api/contact.js) usaba la API de Gmail vía OAuth2
(paquete "googleapis", variables GOOGLE_CLIENT_ID/GOOGLE_CLIENT_SECRET/
GOOGLE_REFRESH_TOKEN/GOOGLE_EMAIL), distinto al resto de webs de la
familia. Sustituido por el mismo patrón SMTP + nodemailer que usan todas
las demás (api/contacto.js de otras marcas), manteniendo el mismo
endpoint /api/contact y los mismos campos del formulario.

Variables SMTP a configurar en Vercel (sustituyen a las de Google):
SMTP_HOST=cp7124.webempresa.eu
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=soporte@kelatos.com
SMTP_PASS=[configurada únicamente en Vercel]
CONTACT_EMAIL=soporte@kelatos.com

Las variables antiguas (GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET,
GOOGLE_REFRESH_TOKEN, GOOGLE_EMAIL) ya no se usan y pueden eliminarse de
Vercel. package.json actualizado: se quitó la dependencia "googleapis" y
se añadió "nodemailer"; node engine ajustado a 22.x para igualar al
resto de la familia.
