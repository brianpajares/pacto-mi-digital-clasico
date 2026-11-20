/**
 * Catálogo de imágenes publicadas.
 *
 * Reglas:
 *  - Solo se publica aquí lo que el equipo proporcionó y es seguro mostrar.
 *  - Ninguna imagen muestra a menores de edad identificables. Las fotos del
 *    evento de Madre de Dios con escolares en primer plano se descartaron; el
 *    estrado se recortó para excluir al público del primer plano, y el plano
 *    general del auditorio se publica a un tamaño en el que nadie es
 *    identificable.
 *  - Cada imagen declara `w` y `h` reales (evita saltos de diseño) y un `alt`
 *    que describe la escena sin nombrar a personas.
 *  - `npm run check` falla si una imagen de assets/img no se usa en ninguna
 *    página, o si una página la muestra sin alt, ancho y alto.
 *
 * Peso: todas pasan por WebP; ver docs/CONTENIDO.md ("Medios pesados").
 */

const img = (name, w, h, alt, caption) => ({
  src: `/assets/img/${name}.webp`,
  w,
  h,
  alt,
  caption,
});

export const media = {
  /* ---- Madre de Dios · V Foro Internacional FIDAS 2026 (UNAMAD) ---------- */
  "mdd-auditorio": img(
    "mdd-auditorio", 1500, 532,
    "Vista panorámica del Auditorio Central de la UNAMAD lleno de público, con las autoridades en primera fila.",
    "Vista general del auditorio durante la jornada."
  ),
  "mdd-ponente-banner": img(
    "mdd-ponente-banner", 1600, 1070,
    "Un ponente con micrófono frente al banner del foro FIDAS 2026 y al de PACTO-MI, que dice «Juventud, minería, comunidad y defensa del territorio».",
    "Ponencia ante el banner de PACTO-MI, junto al del foro."
  ),
  "mdd-atril": img(
    "mdd-atril", 1600, 1067,
    "Un hombre con micrófono habla desde el atril del auditorio, con los banners del foro y de PACTO-MI detrás.",
    "Intervención desde el atril del Auditorio Central."
  ),
  "mdd-ponencia": img(
    "mdd-ponencia", 1600, 1067,
    "Un ponente en el escenario junto a una pantalla con la diapositiva «Las historias de la minería de oro en Madre de Dios: múltiples cronologías».",
    "Ponencia sobre la historia de la minería de oro en Madre de Dios."
  ),
  "mdd-panel": img(
    "mdd-panel", 1600, 1066,
    "Cinco personas sentadas en el estrado de la UNAMAD mientras otra habla desde el atril; a la izquierda, el banner de PACTO-MI.",
    "Mesa de autoridades y ponentes en el estrado."
  ),
  "mdd-estrado": img(
    "mdd-estrado", 1600, 760,
    "Seis personas de pie en el estrado, bajo el escudo de la UNAMAD, mientras otra habla desde el atril.",
    "Autoridades y organizadores en el estrado."
  ),
  "mdd-escenario": img(
    "mdd-escenario", 1600, 1067,
    "Grupo de danza con vestimenta tradicional sobre el escenario, con el banner de PACTO-MI a la izquierda y las letras UNAMAD al frente.",
    "Presentación artística durante la jornada."
  ),

  /* ---- Flyers oficiales del ciclo de ponencias virtuales ---------------- */
  "flyer-sesion-1": img(
    "flyer-sesion-1", 880, 1100,
    "Flyer de la sesión virtual del 5 de marzo a las 7:00 p. m., con César Ipenza, Iván Arenas y Johana Cárdenas.",
    "Flyer de la sesión 1."
  ),
  "flyer-sesion-2": img(
    "flyer-sesion-2", 880, 1100,
    "Flyer del ciclo de ponencias virtuales del 30 de marzo a las 8:00 p. m., con Nicolás Zevallos, Gabriela Ramírez y Jean Cesar León.",
    "Flyer de la sesión 2."
  ),
  "flyer-sesion-4": img(
    "flyer-sesion-4", 880, 1100,
    "Flyer de la cuarta sesión «Minería ilegal: ¿qué se está haciendo para combatirla?», con César Ipenza y Bruno Marcos Villanueva.",
    "Flyer de la sesión 4."
  ),

  /* ---- Toolkit técnico de formación (portadas y figuras del documento) ---- */
  "toolkit-m1": img(
    "toolkit-m1", 480, 679,
    "Portada roja del Toolkit técnico de formación, Módulo 1: Minería ilegal, gobernanza territorial y desarrollo sostenible.",
    "Portada del Módulo 1 · versión octubre de 2026."
  ),
  "toolkit-m2": img(
    "toolkit-m2", 480, 679,
    "Portada roja del Toolkit técnico de formación, Módulo 2: Minería ilegal y crimen organizado, con un agente de espaldas junto a un río.",
    "Portada del Módulo 2 · versión octubre de 2026."
  ),
  "toolkit-m3": img(
    "toolkit-m3", 480, 679,
    "Portada roja del Toolkit técnico de formación, Módulo 3: Consecuencias ambientales y socioeconómicas de la minería ilegal.",
    "Portada del Módulo 3 · versión noviembre de 2026."
  ),
  "toolkit-m4": img(
    "toolkit-m4", 480, 679,
    "Portada roja del Toolkit técnico de formación, Módulo 4: Comunicación estratégica y activismo digital.",
    "Portada del Módulo 4 · versión noviembre de 2026."
  ),
  "toolkit-m5": img(
    "toolkit-m5", 480, 679,
    "Portada roja del Toolkit técnico de formación, Módulo 5: Marcos de política pública y mecanismos legales, con una balanza de la justicia al fondo.",
    "Portada del Módulo 5 · versión noviembre de 2026."
  ),
  "toolkit-m6": img(
    "toolkit-m6", 480, 679,
    "Portada roja del Toolkit técnico de formación, Módulo 6: De lo aprendido a la acción, con dos personas de espaldas caminando.",
    "Portada del Módulo 6 · versión noviembre de 2026."
  ),
  "toolkit-la-pampa": img(
    "toolkit-la-pampa", 1400, 933,
    "Infografía de La Pampa, Madre de Dios: cifras clave y línea de tiempo desde la expansión previa a 2013 hasta el nuevo control territorial de agosto de 2026.",
    "Figura del toolkit (Módulo 1): evolución de La Pampa — expansión, Operación Mercurio, reducción de la deforestación y persistencia de organizaciones criminales. Fuentes: MINAM, MININTER, SERNANP-SINIA, Poder Judicial, Ministerio Público y TV Perú."
  ),
  "toolkit-pataz": img(
    "toolkit-pataz", 1400, 496,
    "Línea de tiempo de Pataz entre mayo de 2025 y junio de 2026: secuestro y asesinato de 13 trabajadores, detenciones, operaciones Relámpago y prórroga del estado de emergencia.",
    "Figura del toolkit (Módulo 2): escalada criminal y respuesta del Estado en Pataz, 2025–2026, basada en fuentes oficiales y medios públicos."
  ),
  /* ---- Equipo ejecutor (presentación AEIF 2026) ---------------------------- */
  "equipo-deicy-sanchez": img("equipo-deicy-sanchez", 480, 600, "Retrato de Deicy Noemi Sánchez Espinoza, coordinadora social y líder del equipo PACTO-MI."),
  "equipo-yesenia-pelaez": img("equipo-yesenia-pelaez", 480, 600, "Retrato de Yesenia Hayme Peláez Lobato, coordinadora social del equipo PACTO-MI."),
  "equipo-jhuleyssy-sanchez": img("equipo-jhuleyssy-sanchez", 480, 600, "Retrato de Jhuleyssy Liesseth Sánchez Aguilar, coordinadora de proyecto de PACTO-MI."),
  "equipo-brian-pajares": img("equipo-brian-pajares", 480, 600, "Retrato de Brian David Pajares Correa, coordinador de innovación de PACTO-MI."),
  "equipo-miguel-cotrina": img("equipo-miguel-cotrina", 480, 600, "Retrato de Luis Miguel Cotrina Malca, coordinador académico de PACTO-MI."),
  "aeif-ganadores-globales": img(
    "aeif-ganadores-globales", 593, 592,
    "Anuncio de los Fondos AEIF 2025, ganadores globales: Red de Acción Juvenil contra la Minería Ilegal y el Crimen Organizado, de Deicy Sánchez, Brian Pajares, Yesenia Peláez, Miguel Cotrina y Jhuleyssy Sánchez.",
    "Anuncio de los ganadores globales del AEIF 2025 (presentación AEIF 2026)."
  ),
  "cajamarca-jornada": img(
    "cajamarca-jornada", 1300, 1084,
    "Integrantes y ponentes sonríen al frente del coliseo mientras cientos de participantes del taller de Cajamarca levantan las manos al fondo.",
    "Taller presencial de Cajamarca, 19 de noviembre de 2025 (presentación AEIF 2026)."
  ),

  /* ---- Sesiones virtuales de los módulos 1 a 6 (flyers oficiales) ----------- */
  "flyer-modulo-1": img(
    "flyer-modulo-1", 880, 1056,
    "Flyer del Módulo 1, Introducción a la minería ilegal en el Perú: 1 de octubre, 7:00 p. m., modalidad virtual, con la Ing. Rosaluz Aguilar Contreras.",
    "Flyer del Módulo 1."
  ),
  "flyer-modulo-2": img(
    "flyer-modulo-2", 880, 1100,
    "Flyer del Módulo 2, Vínculos entre minería ilegal y crimen organizado: 9 de octubre de 2026, 7:00 p. m., virtual, con el Dr. Nicolás Zevallos Trigozo.",
    "Flyer del Módulo 2."
  ),
  "flyer-modulo-3": img(
    "flyer-modulo-3", 880, 1100,
    "Flyer del Módulo 3, Consecuencias ambientales y socioeconómicas de la minería ilegal: 16 de octubre, 7:00 p. m., virtual, con Martha Torres.",
    "Flyer del Módulo 3."
  ),
  "flyer-modulo-4": img(
    "flyer-modulo-4", 880, 1100,
    "Flyer del Módulo 4, Comunicación estratégica y activismo digital: 23 de octubre, 7:00 p. m., modalidad virtual, con Luis Claros.",
    "Flyer del Módulo 4."
  ),
  "flyer-modulo-5": img(
    "flyer-modulo-5", 880, 1100,
    "Flyer del Módulo 5, Marcos de política pública y mecanismos legales para la prevención comunitaria: 30 de octubre, 7:00 p. m., virtual, con Norman Nelson Coronel.",
    "Flyer del Módulo 5."
  ),
  "flyer-modulo-6": img(
    "flyer-modulo-6", 880, 1100,
    "Flyer del Módulo 6, Desarrollo de planes de acción localizados: 6 de noviembre, 7:00 p. m., virtual, con el Mg. Martin Alvarado.",
    "Flyer del Módulo 6."
  ),
};

export function image(key) {
  const found = media[key];
  if (!found) throw new Error(`Imagen desconocida: "${key}"`);
  return found;
}
