ONE PAGE - SERVICIOS IT EMPRESAS

Marca: se deja como texto editable "Nombre de empresa".
Isotipo: assets/isotipo.svg (terminal + nodos, azul/cian/índigo).
Dominio: https://serviciotecnicoinformaticomadrid.com.es/
WhatsApp: +34 649 97 01 28
Teléfono: +34 914 46 85 03

Enfoque: mantenimiento informático, desarrollo de software y automatización para empresas en España.
Redacción: problema de negocio -> coste en tiempo -> solución -> confianza -> CTA.

Incluye Google Business, YouTube, Cal.com, formulario SMTP y chatbot n8n con fix consolidado.
Variables Vercel: SMTP_HOST, SMTP_PORT=465, SMTP_SECURE=true, SMTP_USER, SMTP_PASS, CONTACT_EMAIL.
El correo no aparece visible en la web.
No se añadió Google Analytics porque no se proporcionó un ID.

REVISIÓN ADICIONAL (checklist unificado de la familia, a petición del cliente):
- BUG REAL — enlace de Cal.com desactualizado. Actualizado a
  https://cal.com/kelatos/30min?embed=true&theme=light&attendeePhoneNumber=%2B34&overlayCalendar=true.
- Verificado: el correo soporte@kelatos.com no aparece visible.
- No se ha tocado el texto de WhatsApp ("¡Hola Kelatos", sin marca):
  esta es una plantilla deliberadamente sin marcar (ver nota de
  arriba, "Nombre de empresa" es texto editable), así que no
  corresponde inventar un nombre de marca aquí. Aplicar el nombre
  real de marca cuando esta plantilla se reutilice para un cliente
  concreto.
- BUG REAL — no existía ningún botón de menú en móvil/tablet
  (.links{display:none} a partir de 920px, sin alternativa), así que
  la navegación desaparecía por completo por debajo de ese ancho.
  Añadido botón .menu-btn + desplegable #mobileMenu con los mismos
  enlaces, y su script de cierre al pulsar un enlace.
- Verificado: sin iconos ni imágenes con proporciones fijas
  incorrectas.
- BUG REAL — el H1 en móvil estaba en 40px. Corregido a 48px.
- BUG REAL — botones del hero (.cta) con border-radius de 15px y sin
  estado hover. Aumentado a border-radius:999px; añadido
  filter:brightness(.88) en wa/phone (ambos de color sólido, verde y
  blanco respectivamente) y relleno blanco + texto oscuro en el botón
  "Agenda una reunión" (.meet, estilo contorno fantasma sobre el
  hero oscuro) al pasar el ratón.
- No aplica la franja de aviso de servicio técnico independiente:
  agencia de servicios IT/mantenimiento para empresas, mismo criterio
  que InformaticoChamberi (sin enfoque de reparación de equipos de
  marca concreta).
- Verificado: este repo no usa el patrón de franja de insignias bajo
  el H1 (familia Dyson); no aplica la reubicación.

⚠️ AVISO — COLISIÓN DE DOMINIO (no resuelta, no tocada):
El dominio indicado arriba (serviciotecnicoinformaticomadrid.com.es)
es, confirmado por el cliente, el dominio real de otro repositorio de
la familia (InformaticoChamberi). Si esta plantilla llega a
desplegarse en vivo para un cliente real, hay que asignarle su propio
dominio distinto antes de publicarla, y actualizar canonical/og:url/
sitemap.xml/robots.txt en consecuencia.

CORRECCIÓN DE DOMINIO (confirmado por el cliente):
- BUG REAL — el dominio real es mantenimientoinformaticopymetetuan.es
  (confirmado por el cliente). El anterior, serviciotecnicoinformaticomadrid.com.es,
  resultó pertenecer en realidad a InformaticoChamberi, otro repositorio de
  la familia. Corregido en canonical, JSON-LD (campo "url"), sitemap.xml y
  robots.txt.
- Verificado en vivo: mantenimientoinformaticopymetetuan.es actualmente
  sirve un sitio WordPress ajeno a este despliegue de Vercel (cabeceras
  PHP/wp-json/wp-content), con el título "PymeTech | Mantenimiento
  Informático Tetuán" — probablemente el sitio antiguo que hay que
  sustituir en el panel de dominios por este despliegue; eso no se puede
  hacer desde el código. De paso revela el nombre de marca real
  ("PymeTech") por si se decide dejar de usar esta copia como plantilla
  genérica y personalizarla para ese negocio concreto — pendiente de
  confirmación del cliente antes de tocar el texto "Nombre de empresa" y
  el mensaje de WhatsApp.

PERSONALIZACIÓN CON LA MARCA REAL (a petición del cliente — deja de ser plantilla genérica):
- "Nombre de empresa" → "PymeTech" en cabecera, pie de página y
  JSON-LD (campo "name").
- Mensaje de WhatsApp: "¡Hola Kelatos" → "¡Hola PymeTech" en el CTA
  del hero y en el botón flotante.
- Title y meta description reescritos incluyendo la marca: "PymeTech
  | Mantenimiento Informático y Software para Empresas en Madrid".
- Añadidos meta robots y etiquetas og:title/og:description/og:url/
  og:type (no existía ninguna); usan el título/descripción nuevos y
  el dominio ya corregido.
- No se ha añadido Google Analytics: sigue sin proporcionarse un ID
  propio para PymeTech.

AJUSTES DE HERO (a petición del cliente, con captura de pantalla):
- H1 reducido de 20 palabras a 7: "Menos problemas técnicos. Más
  tiempo para tu empresa."
- Quitado el párrafo largo bajo el H1 (.hero-copy, "Equipos que no
  responden, procesos manuales...") y la fila de píldoras (.points,
  "Mantenimiento informático · Desarrollo de software ·
  Automatizaciones · Soporte empresas") — ambos marcados para
  eliminar en la captura.
- Botones del hero (.ctas): cambiados de dos columnas a una sola
  columna (uno debajo del otro), y añadido un icono a cada uno:
  WhatsApp (bocadillo estándar de la familia), teléfono y un icono de
  calendario para "Agenda una reunión".
- Icono de WhatsApp flotante mejorado: sustituido el texto "WA" por
  el mismo icono SVG de bocadillo usado en el resto de la familia.

AJUSTES DE LA CAJA DE INFORMACIÓN Y H1 (a petición del cliente, con captura de pantalla):
- Quitadas de la caja de información: la fila "Dirección" (C.
  Joaquín María López, 26 — dirección compartida de la familia, no
  específica de este negocio), la fila "Ámbito" y el bloque
  "Referencia" (Metro/Aparcamiento) — las tres marcadas para eliminar
  en la captura.
- Añadida en su lugar una fila "Zona": Tetuán, Madrid (según el
  propio dominio/nombre del repositorio, mantenimientoinformaticopymetetuan.es).
- JSON-LD actualizado en consecuencia: quitado el streetAddress/
  postalCode de la dirección compartida; areaServed cambiado de "ES"
  a "Tetuán, Madrid".
- H1 aumentado un 40%: clamp(40-58px) → clamp(56-81px) en escritorio.
  El tamaño en móvil se mantiene en 48px, el estándar unificado de
  toda la familia (no se ha tocado, para no romper esa consistencia).

BANNER DE COOKIES Y ENLACE DE PRIVACIDAD (a petición del cliente):
- BUG REAL — no existía ningún banner de cookies en todo el
  repositorio. Añadido el estándar de la familia (Aceptar / Rechazar
  / Política de privacidad → https://kelatos.com/privacy-policy/),
  con recuerdo en localStorage y diseño apilado a ancho completo en
  móvil.
- BUG REAL — la casilla "Acepto la política de privacidad." del
  formulario de contacto era texto plano, sin ningún enlace. Añadido
  el enlace estándar de la familia a
  https://kelatos.com/privacy-policy/, resaltado en azul y subrayado
  (clase .privacy-link).

REVISIÓN COMPLETA DE INDICACIONES PENDIENTES (a petición del cliente):
Repaso contra el checklist unificado completo de la familia. Ya
estaban correctos: Cal.com con parámetros nuevos, correo de soporte
no visible, WhatsApp con marca (PymeTech), cierre del menú móvil,
header fijo al hacer scroll, sin etiqueta rotada tipo hero-chip, sin
patrón de franja de insignias (familia Dyson), banner de cookies y
enlace de privacidad (ya corregidos en la pasada anterior), sitemap.xml
y robots.txt correctos. Se encontraron y corrigieron dos pendientes:
- BUG REAL — la fila "Horario" no incluía "Sábados, domingos y días
  festivos estamos cerrados" (regla estándar de toda la familia).
  Añadido.
- BUG REAL — el texto decorativo gigante ".art:before" ("MENOS HORAS
  PERDIDAS", 64px) no tenía ninguna reducción de tamaño en
  tablet/móvil, mismo patrón ya corregido en decenas de repos de la
  familia. Añadida reducción (40px en ≤920px, 28px en ≤600px).
- Sin Google Analytics: sigue sin proporcionarse un ID propio para
  PymeTech (no aplica, no es un bug).

REVISIÓN DE DISEÑO (a petición del cliente, "algo más profesional"):
- Tipografía: añadida "Sora" (Google Fonts) para titulares (h1, h2,
  h3, marca, botón de envío) manteniendo Inter para el cuerpo de
  texto — antes todo usaba Inter, sin jerarquía tipográfica distinta
  entre titular y párrafo.
- Eyebrow del hero: sustituido el texto plano por una píldora con
  punto de acento, patrón habitual en landing pages profesionales.
- Tarjetas (.problem, .service, .plan): añadido efecto hover sutil
  (elevación + sombra) para que se perciban interactivas.
- Servicios: añadido un icono propio a cada una de las 6 tarjetas
  (llave inglesa, código, rayo, escudo, nube, tendencia), en vez de
  solo una etiqueta de texto — ayuda a diferenciar cada área de un
  vistazo.
- Bloque decorativo "Automatizar no es poner IA por poner IA": el
  texto gigante con contorno ("MENOS HORAS PERDIDAS") se ha
  sustituido por una tarjeta flotante con icono y mensaje concreto
  ("Menos tareas manuales"), un tratamiento más contenido y propio de
  diseño profesional que el texto de fondo tipo plantilla.
- Confianza (Google/YouTube): añadido un icono a cada tarjeta y
  degradado sutil en el fondo en vez de color plano.
- Plan "Empresa": marcado como destacado (borde de color + etiqueta
  "Más elegido"), patrón estándar en tablas de precios para guiar la
  elección.
- Pasos del proceso: números de tarjeta llevados a la tipografía de
  titular, para que combinen con el resto de la jerarquía.
- Formulario: estados de foco visibles en campos e inputs (accesible
  por teclado), sombra sutil al enfocar.
- Accesibilidad: añadido contorno de foco visible (:focus-visible) en
  enlaces, botones y campos; respeta prefers-reduced-motion.
- Refinados espaciados, radios de borde y sombras para que se sientan
  consistentes en toda la página, en vez de varían de una sección a
  otra.

IMAGEN DE FONDO DEL HERO (a petición del cliente, con imagen de referencia):
- Añadida assets/images/pymetech-fondo-isometrico-web.webp (subida
  por el cliente vía GitHub) como fondo decorativo del hero.
- Escritorio (>920px): la ilustración se posiciona a la derecha del
  hero, con background-size:contain (sin deformarla, respeta el
  aspect-ratio real 1850x850) y un degradado en los bordes
  (mask-image) para que se funda con el fondo oscuro en vez de
  cortarse en seco. Tiene una animación de flotación muy sutil
  (translateY ±12px, 7s, ease-in-out) usando solo transform (GPU,
  sin repintar), respetando prefers-reduced-motion (ya definido
  globalmente en el sitio). Se posiciona por debajo del texto y de la
  caja de información (z-index) para no interferir con la legibilidad.
- Móvil/tablet (≤920px): NO se muestra la ilustración completa (sería
  pesada visualmente y competiría con el texto en pantallas
  pequeñas). En su lugar, la misma imagen se usa como una textura de
  fondo muy sutil a pantalla completa (opacity:.14, sin animación),
  igual que pidió el cliente ("solo iría un patrón basado en la
  imagen de fondo").
- Rendimiento: una sola imagen de 47.7 KB, sin JavaScript añadido,
  animación limitada a transform (compositada por GPU, no afecta al
  layout/paint), desactivada por completo en móvil.

CORRECCIÓN DEL FONDO DEL HERO (a petición del cliente, con captura de pantalla):
- BUG REAL — la ilustración se posicionaba en absoluto relativa a
  .hero (ancho completo del viewport), pero sus medidas eran
  porcentajes pensados para el ancho del contenido (.wrap, 1180px
  máx). En pantallas anchas esto desplazaba la imagen casi fuera de
  la vista, dejando solo una esquina visible — justo lo que se veía
  en la captura. Corregido: la ilustración ahora es hija de
  .hero-grid (contenida en .wrap), así sus porcentajes se calculan
  sobre el ancho del contenido, no de toda la pantalla, y queda
  colocada de forma consistente sin importar el ancho de ventana.
- Cambiada la animación: en vez de una flotación continua en bucle,
  ahora es un efecto sutil solo al pasar el ratón por el hero
  (transform + transición, sin bucle infinito), según sugerencia del
  cliente. En móvil no aplica (no hay hover).

CORRECCIÓN DEL FONDO DEL HERO (2ª vuelta, a petición del cliente — "se ve
mal encajada, no coloques ningún efecto, solo colócala en el fondo"):
- BUG REAL — con .hero-art en position:absolute;z-index:1 y .info sin
  ninguna posición/z-index propios, en varios anchos de ventana la
  ilustración se veía superpuesta sobre la mitad inferior de la tarjeta
  blanca de contacto (.info), lavando el texto de "HORARIO", "TELÉFONO
  DE INFORMACIÓN", etc.
- Simplificado por completo, tal como pidió el cliente: eliminado el
  efecto al pasar el ratón (.hero:hover .hero-art, en escritorio y
  móvil) y la transición transform .5s asociada. La imagen ya no se
  intenta encajar/alinear junto al contenido: ahora es una sola capa de
  fondo a pantalla completa del hero (inset:0, background-size:cover,
  opacity:.16), igual en escritorio y móvil, así que se ha eliminado
  también la regla duplicada que existía solo para móvil.
- Añadido position:relative;z-index:1 explícito a .info, como refuerzo,
  para que la tarjeta blanca siempre pinte por encima del fondo sin
  ambigüedad de apilamiento (antes .info no tenía position propio).

CORRECCIÓN DEL FONDO DEL HERO (3ª vuelta, a petición del cliente — la
versión de fondo a pantalla completa quedó demasiado tenue y ya no se
parecía a la imagen de referencia):
- Revertido el fondo a pantalla completa con opacidad .16 (quedaba
  prácticamente invisible en escritorio). Restaurada una ilustración
  visible y bien proporcionada (opacity:.95, background-size:contain,
  aspect-ratio real 1850/850), posicionada dentro de .hero-grid (no de
  .hero), en el hueco entre el texto y la tarjeta de contacto — igual
  que en la imagen de referencia del cliente.
- Sigue sin ningún efecto ni animación (sin hover, sin transition),
  conforme a la última indicación.
- El posible solape con la tarjeta .info ya no causa el problema
  anterior ("mal encajada", texto lavado): .info tiene ahora
  position:relative;z-index:1 explícito (corrección de la vuelta
  anterior) y .hero-art se quedó en z-index:0, así que la tarjeta
  blanca siempre pinta limpia y opaca por encima, aunque la ilustración
  se extienda por debajo.
- Añadido un degradado de máscara solo en el borde izquierdo
  (mask-image, transparente → opaco en el 26%) para que no corte en
  seco sobre el texto del H1.
- Restaurada la regla específica de móvil (@media max-width:920px):
  vuelve a ser el patrón de fondo a pantalla completa y baja opacidad
  (.14) que el cliente pidió desde el principio para esa versión,
  distinto de la ilustración recortada de escritorio.

ENLACE DE GOOGLE MAPS (a petición del cliente):
- Actualizado en las 4 ubicaciones donde aparecía (tarjeta de contacto
  del hero, tarjeta "Google Business" de la sección de confianza,
  enlace de la sección de contacto y footer): de
  https://maps.app.goo.gl/mkCqbuex13odNwc17 a
  https://maps.app.goo.gl/RXatcmbYFv9Z8xdPA.

FONDO DEL HERO — RETIRADA LA IMAGEN, SUSTITUIDA POR UN PATRÓN (a
petición del cliente: "ya no coloques la imagen de fondo no se ve bien.
usa patrones u otros elementos con colores relacionados sin saturar"):
- Eliminado por completo el div .hero-art y su imagen de fondo
  (pymetech-fondo-isometrico-web.webp, borrada del repositorio junto
  con su README de assets/images, ya que no queda ninguna referencia).
- En su lugar, un patrón puramente CSS (.hero:after): anillos
  concéntricos + resplandor radial suave, en los mismos tonos de marca
  (azul/cian) ya usados en el resto del hero, con máscara para
  desvanecerse en los bordes y opacidad baja para no saturar. Se
  combina con la retícula de puntos (.hero:before) que ya existía.
  Ajustado también en móvil para quedar proporcionado y discreto.

MEJORAS SEGÚN LAS IMÁGENES DE REFERENCIA ENVIADAS POR EL CLIENTE:
- Botón "Agenda una reunión...": añadida una flecha (chevron) al final,
  con el texto y el icono de calendario a la izquierda y la flecha
  empujada al extremo derecho del botón (justify-content:space-between),
  igual que en la referencia.
- Tarjeta de información de contacto (.info): cada fila (Zona, Horario,
  Teléfono de información, Servicios) recibe ahora un icono propio
  (ubicación, reloj, teléfono, engranaje) en un círculo azul claro,
  igual que en la imagen de referencia.
- El enlace "Ver ubicación y reseñas" dentro de esa tarjeta pasa de ser
  un simple enlace de texto a un botón sólido de ancho completo
  (degradado azul/índigo de marca) con icono de flecha, igual que en la
  referencia. El resto de enlaces "Ver ubicación..." del sitio (sección
  de contacto y footer) siguen siendo enlaces de texto simples, sin
  cambios, ya que la referencia solo mostraba la tarjeta del hero.

AJUSTES ADICIONALES (a petición del cliente):
- H1 en escritorio: tope máximo del clamp() reducido de 74px a 70px,
  según lo solicitado.
- Botón "Agenda una reunión y cuéntanos qué está frenando a tu
  empresa" (.meet): el texto en dos líneas quedaba muy pegado a los
  bordes del botón. Aumentado el padding vertical (18px), añadido
  line-height:1.4 y cambiado a texto alineado a la izquierda (en vez
  de centrado por línea) para que las dos líneas se vean equilibradas
  junto al icono de calendario y la flecha final.
- Fondo del hero, segunda vuelta (a petición del cliente: "coloca
  formas, líneas, otro diseño de fondo"): sustituido el patrón de
  anillos concéntricos anterior por uno nuevo compuesto de líneas
  diagonales finas (.hero-deco, repeating-linear-gradient) más tres
  formas geométricas con solo borde (círculo, cuadrado rotado y anillo
  grande), todo en los mismos tonos de marca (blanco muy translúcido,
  azul y cian) y con máscara para desvanecerse hacia el texto,
  manteniendo la instrucción de no saturar. Ajustado también el tamaño
  y posición de las formas en móvil.

BORDE INFERIOR DEL HERO (a petición del cliente: "la parte de abajo del
hero está recto, redondea o crea otra forma de terminar"):
- Añadido un divisor curvo (.hero-edge, SVG de onda a ancho completo)
  al final de la sección hero, en vez del corte recto anterior. El
  relleno del SVG usa el mismo color de fondo (#f6f8fb) que la sección
  siguiente ("problemas"), así que visualmente crea una transición
  curva de la zona oscura del hero a la zona clara, sin afectar el
  layout del contenido (absolute, no ocupa espacio en el flujo). Altura
  reducida en móvil (≤600px) para mantener la proporción.

AJUSTE DE LA CURVA DEL HERO (a petición del cliente, con boceto sobre
captura): la onda con varios picos quedaba demasiado pronunciada.
Sustituida por una sola curva suave (una única Q de bezier, sin
ondulaciones), mucho más plana y sutil, tal como se veía en el trazo
de referencia del cliente.

BORDE DEL HERO: VUELTA A RECTO, SOLO ESQUINAS REDONDEADAS (a petición
del cliente: "manténlo recto, solo redondea los bordes"):
- Eliminado el divisor SVG de curva/onda por completo.
- Añadido border-radius:0 0 36px 36px directamente a .hero: el borde
  inferior vuelve a ser una línea recta en toda su longitud, solo con
  las dos esquinas inferiores redondeadas.

COLOR EN EL FONDO DEL HERO (a petición del cliente: los detalles de
fondo colocados antes casi no se apreciaban; pidió color sin que
choque con el H1):
- Aumentada notablemente la opacidad de las líneas diagonales y de los
  tres contornos (círculo/cuadrado/anillo), y añadidos dos resplandores
  de color (cian y azul-índigo, los mismos tonos de marca que el acento
  del H1) detrás de las líneas.
- Para garantizar que nunca se acerque al texto del H1 en ningún ancho
  de pantalla, .hero-deco se reestructuró como una caja propia anclada
  al borde derecho (width:46%, max-width:540px) en vez de una máscara
  sobre todo el ancho del hero — así su borde izquierdo (con
  degradado de desvanecido) siempre queda contenido dentro del hueco
  entre el texto y la tarjeta de contacto, sin importar el ancho de
  viewport.

────────────────────────────────────────────────────────────
ADAPTACIÓN A RETIROTECH | MANTENIMIENTO INFORMÁTICO EN RETIRO
(repositorio clonado a partir de una copia anterior de la plantilla
PymeTech; se readapta con todos los criterios vigentes de la
subfamilia mantenimientoinformaticopyme*)
────────────────────────────────────────────────────────────

MARCA Y TEXTOS:
- "PymeTech" → "RetiroTech" en cabecera, pie de página, JSON-LD (name)
  y mensaje prellenado de WhatsApp ("¡Hola RetiroTech").
- Title: "RetiroTech | Mantenimiento Informático en Retiro" (texto
  exacto indicado por el cliente para SEO). Meta description, og:title
  y og:description reescritos mencionando Retiro, Madrid.
- H1 propio de 9 palabras exactas (criterio de Isra Bravo, distinto de
  los H1 de los repos hermanos): "Resolvemos las incidencias técnicas
  de tu empresa sin demoras."
- Fila "Zona": "Tetuán, Madrid" → "Retiro, Madrid".
- FAQ "¿Trabajáis solo en Madrid?" → "¿Trabajáis solo en Retiro?", con
  la respuesta ampliada a "Retiro y el resto de Madrid".
- Tarjeta de información de contacto: el h2 (antes "Servicios IT para
  empresas") ahora muestra el título exacto de la web / nombre de
  Google Business: "RetiroTech | Mantenimiento Informático en Retiro".
- Sección de reserva de cita (#cita): kicker "Si quieres verlo con
  calma" → "Asesoramiento gratuito".
- Menú (escritorio y móvil): "Reunión" → "Agendar cita".
- JSON-LD: description y areaServed actualizados a Retiro, Madrid.
- H1: tamaño estándar de la subfamilia, clamp(44px,5.6vw,62px)
  (aplicado directamente, sin necesidad de reducir desde 70px porque
  esta copia partía de una plantilla más antigua).
- .info h2: añadido line-height:1.25 para el título más largo.

DOMINIO Y ENLACES:
- canonical, og:url y JSON-LD "url" → https://mantenimientoinformaticopymeretiro.es/
  (dominio indicado directamente por el cliente).
- sitemap.xml y robots.txt actualizados al nuevo dominio.
- Enlace de Google Maps actualizado en las 4 ubicaciones del sitio a
  https://maps.app.goo.gl/DqEAa7oxZyPZ9dxx7, proporcionado por el
  cliente.

TELÉFONO Y WHATSAPP: sin cambios (+34 649 97 01 28 / +34 914 46 85 03)
— confirmado por el cliente que es el mismo número para toda la
familia.

COLOR (a petición del cliente: "modifica el color, pero que sea
tecnológico, no colores llamativos ni disruptivos"):
- Nueva paleta muted índigo/violeta-pizarra, distinta tanto del
  azul/cian original (PymeTech/PymeCare) como del teal de TecPyme, para
  diferenciar visualmente esta marca: --blue:#0b5bd3→#5b5fa8,
  --indigo:#5f6fff→#3d4f73, --cyan:#32c7d9→#8f93e0. Fondo oscuro base
  (--bg/--bg2) y grises neutros sin tocar, mismo criterio que en
  TecPyme: solo cambia el matiz de acento, no la profundidad/
  saturación general.
- Todos los tonos derivados (fondos de iconos claros, textos en color
  sobre fondo oscuro, badges, bordes de hover, sombras de botones)
  recalculados a la misma paleta, manteniendo el mismo nivel de
  contraste que tenían antes.
- Isotipo (assets/isotipo.svg) recoloreado a juego con la nueva
  paleta.
- Sin cambios en el verde de WhatsApp, el rojo de YouTube ni la banda
  de cookies (colores de terceros / estándar de familia).
