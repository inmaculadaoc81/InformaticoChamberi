INNOVATECH — MANTENIMIENTO INFORMÁTICO PARA EMPRESAS (MADRID)

Sitio multipágina (no es la plantilla "one-page" del resto de marcas):
index.html, contacto.html, politica-privacidad.html y 8 páginas de
servicio en /servicios/, todas comparten cabecera, chatbot n8n y footer.

Dominio:
https://informaticomadrid.com.es/
(CONFIRMADO por el cliente como el dominio real de InnovaTech.
Corregido en canonical, og:url, JSON-LD, robots.txt y sitemap.xml —
antes apuntaban a serviciotecnicoinformaticomadrid.es.)

AVISO (actualizado): el cliente confirma que "informaticoschamberi.com.es"
NO es el dominio de este sitio ni de ToshibaWEB2. Sigue sin aclararse a
qué corresponde ese dominio o si ToshibaWEB2 tiene un dominio propio
distinto — revisar ese repositorio por separado cuando se procese.

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

Google Analytics:
G-CFBRECXDXX — no existía. Añadido en las 11 páginas HTML del sitio
(index, contacto, política de privacidad y las 8 páginas de
/servicios/).

REVISIÓN ADICIONAL (esta pasada):
- Sitio confirmado como legítimamente multipágina (sin eliminaciones
  de /servicios/ en el historial): NO se ha añadido middleware.mjs, no
  aplica.
- Sin .navcall: este sitio no muestra un botón de teléfono en el menú
  (no tenía antes, no se ha añadido); no aplica el fix de la píldora.
- H1 de portada reescrito, corto, directo y totalmente afirmativo
  (sin interrogación ni condicionales, mismo esquema visual con <em>
  que ya usaba la plantilla): "Un ordenador roto detiene tu empresa.
  Aquí sí respondemos." (el H1 anterior, de un rediseño posterior a
  este README, tenía 16 palabras). Tamaño del H1 aumentado:
  clamp(38-60px) → clamp(46-74px) en escritorio, 41px → 48px en móvil.
- Dominio corregido a informaticomadrid.com.es (ver arriba).
- Sigue pendiente sin resolver: la replicación de schema.org/
  canonical/og:* al resto de páginas (solo están en index.html) y el
  dominio real de ToshibaWEB2, que queda por confirmar por separado.
