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
- Dominio real de ToshibaWEB2 ya confirmado por separado (hpexpert.es);
  no tiene relación con este repositorio.

REVISIÓN ADICIONAL (esta pasada — completa la tarea pendiente):
- Canonical/og:*/robots y schema.org replicados en las 10 páginas que
  no los tenían (contacto.html, politica-privacidad.html y las 8
  páginas de /servicios/) — antes solo existían en index.html.
  - contacto.html y politica-privacidad.html: mismo LocalBusiness que
    index.html, con su propia URL canonical.
  - Cada página de /servicios/: schema.org tipo Service con el
    provider (InnovaTech) y su propia URL canonical.
  - BUG propio, detectado y corregido en la misma pasada: el script de
    inserción generó inicialmente las URLs de canonical/og:url con
    backslash en vez de barra normal en las 8 páginas de servicios
    (".../servicios\nombre.html" en vez de ".../servicios/nombre",
    fallo de compatibilidad de rutas de Windows/Python); corregido
    antes de hacer commit.
  - Las URLs de canonical/og:url se generaron sin extensión .html
    (ej. ".../contacto" en vez de ".../contacto.html") para coincidir
    con vercel.json (cleanUrls:true) y con las URLs ya usadas en
    sitemap.xml.
- H1, GA, cookies, schema de index.html, menú móvil y borde del chat
  ya estaban correctos; no se ha tocado nada de eso.

REVISIÓN ADICIONAL (a petición del cliente):
- Quitado el párrafo bajo el h2 del hero ("Revisamos tus equipos antes
  de que fallen..."), en todas las versiones (no había reglas
  específicas de móvil/escritorio que lo afectaran aparte, así que un
  solo cambio cubre ambas). Se mantiene el h2 ("Nosotros nos
  encargamos de que eso no vuelva a pasar").
- El cliente también señaló que en escritorio "el texto se ve mal,
  parece que está en 1 columna, debería estar en 3 columnas": el
  service-grid del hero y el grid de tarjetas de la sección Servicios
  ya usan grid-template-columns:repeat(4,1fr) en escritorio (no 1
  columna), así que se interpreta que la observación se refería al
  párrafo eliminado arriba (un bloque de texto corrido que ocupaba
  todo el ancho). Si tras el despliegue se sigue viendo algo en 1
  columna en escritorio, indicar la sección exacta para revisarlo.

REVISIÓN ADICIONAL (a petición del cliente):
- BUG REAL — no existía ningún botón de llamada en todo el sitio,
  solo WhatsApp. Añadido el teléfono compartido de la familia,
  +34 914 46 85 03: botón "Atención Telefónica..." junto al de
  WhatsApp en el hero de index.html, y botón "Llamar | +34 914 46 85
  03" junto al de WhatsApp en la sección "Atención a empresas" de
  contacto.html.
- BUG REAL — schema.org usaba el número de WhatsApp
  (+34649970128) en el campo "telephone" de las 11 páginas del sitio
  (index, contacto, política de privacidad y las 8 de /servicios/),
  en vez de un teléfono real. Corregido a +34 914 46 85 03 en las 11
  páginas mediante un script, verificado antes/después con grep.
- BUG REAL — el formulario (presente de forma idéntica en index.html
  Y en contacto.html) tenía la misma casilla de política de
  privacidad sin ningún enlace en ambas páginas. Añadido el enlace
  estándar de la familia a https://kelatos.com/privacy-policy/,
  resaltado en azul, en las dos.
- Añadido "Sábados, domingos y días festivos estamos cerrados" debajo
  del horario de atención, en index.html y contacto.html (el mismo
  bloque de horario aparece duplicado en ambas páginas).
- No se ha añadido franja de aviso de servicio técnico independiente:
  no aplica a este negocio (mantenimiento informático para empresas,
  sin el enfoque de reparación de equipos de la familia de marcas de
  electrodomésticos/informática de consumo).

REVISIÓN ADICIONAL (checklist unificado de la familia, 11 páginas — a petición del cliente, repo 38/48):
- BUG REAL — enlace de Cal.com desactualizado (solo existe en
  index.html). Actualizado a
  https://cal.com/kelatos/30min?embed=true&theme=dark&attendeePhoneNumber=%2B34&overlayCalendar=true
  (se mantiene theme=dark, deliberado en este repo, a diferencia del
  theme=light estándar de la familia).
- Verificado: el correo soporte@kelatos.com no aparece visible.
- BUG REAL — el mensaje prellenado de WhatsApp decía "¡Hola Kelatos!"
  en las 11 páginas (botón del hero y flotante). Corregido a "¡Hola
  InnovaTech!" en las 21 apariciones encontradas.
- BUG REAL — el menú móvil (#mobileMenu, estilo atributo hidden) no
  tenía ningún listener que lo cerrara al pulsar un enlace, en
  ninguna de las 11 páginas. Añadido el script estándar de la familia
  a todas.
- Verificado: sin iconos ni imágenes con proporciones fijas
  incorrectas.
- Verificado: el H1 en móvil ya está en 48px (regla ".hero h1").
- BUG REAL — botones del hero (.wa-main/.phone-main) ya tenían
  border-radius:99px pero sin ningún estado hover. Añadido
  filter:brightness(.88) en ambos (colores sólidos) al pasar el
  ratón.
- Verificado: este repo no usa el patrón de franja de insignias bajo
  el H1 (familia Dyson); no aplica la reubicación.
