/**
 * Aliados y respaldo institucional.
 * Fuente: Propuesta AEIF 2025 ("Local Project Partners") y PRD §26.
 */
export const partners = [
  {
    name: "V&C Analistas",
    mark: "V&C",
    kind: "Aliado principal",
    region: "Madre de Dios",
    detail:
      "Consultora peruana enfocada en respuestas estratégicas frente a la minería ilegal e informal. Co-diseñó el proyecto.",
  },
  {
    name: "Universidad Nacional de Cajamarca (UNC)",
    mark: "UNC",
    kind: "Aliado académico",
    region: "Cajamarca",
    detail: "Facilita instalaciones para las sesiones de formación y convoca a su comunidad estudiantil.",
  },
  {
    name: "Universidad del Pacífico (UP)",
    mark: "UP",
    kind: "Aliado académico",
    region: "Lima",
    detail:
      "A través de su Observatorio de Políticas Públicas y el Grupo de Diálogo Minería y Desarrollo, aporta el sustento técnico del programa formativo.",
  },
  {
    name: "CINCIA",
    mark: "CINCIA",
    kind: "Aliado científico",
    region: "Madre de Dios",
    detail:
      "Centro de Innovación Científica Amazónica. Orienta el enfoque territorial sobre el impacto ambiental de la minería ilegal.",
  },
  {
    name: "Plataforma Andina MAPE",
    mark: "MAPE",
    kind: "Red regional",
    region: "Andes",
    detail:
      "Red de minería artesanal y de pequeña escala. Facilita el flujo de información entre comunidades, actores y el equipo.",
  },
  {
    name: "Instituto de Ingenieros de Minas del Perú (IIMP)",
    mark: "IIMP",
    kind: "Aliado gremial",
    region: "Nacional",
    detail:
      "Asegura que la formación y las recomendaciones de política se alineen con los estándares del sector.",
  },
  {
    name: "Compañía de Minas Buenaventura",
    mark: "BVN",
    kind: "Aliado empresarial",
    region: "Nacional",
    detail:
      "Aporta el puente entre comunidades locales y el sector minero formal.",
  },
  {
    name: "CoRelación – Conectamos Ideas",
    mark: "CoRelación",
    kind: "Agencia de comunicación",
    region: "Nacional",
    detail:
      "Agencia de comunicación del proyecto: planificación y facilitación de actividades, desarrollo de materiales, comunicación estratégica y documentación audiovisual. Fuente: Toolkit PACTO-MI.",
  },
];

/**
 * Auspiciadores que el toolkit muestra en cada página ("Una iniciativa
 * auspiciada por:"). Los logotipos se extrajeron de la portada del toolkit.
 */
export const sponsors = [
  { name: "Estados Unidos de América", src: "/assets/brand/bandera-eeuu.webp", w: 196, h: 104, alt: "Bandera de los Estados Unidos de América", flag: true },
  { name: "Embajada de los Estados Unidos en Lima", src: "/assets/brand/embajada-eeuu-lima.webp", w: 160, h: 160, alt: "Sello de la Embajada de los Estados Unidos en Lima" },
  { name: "U.S.-Peru Alumni", src: "/assets/brand/us-peru-alumni.webp", w: 166, h: 160, alt: "Logotipo de U.S.-Peru Alumni (USPA), comunidad de exbecarios" },
];

/**
 * Respaldo institucional. Los sellos de la Embajada y de U.S.-Peru Alumni se
 * muestran como aparecen en el toolkit oficial del proyecto.
 */
export const institutional = [
  {
    name: "Alumni Engagement Innovation Fund 2025",
    detail: "Fondo de la Embajada de los Estados Unidos que financia el proyecto. PACTO-MI fue reconocido ganador global.",
  },
  {
    name: "Embajada de los Estados Unidos en el Perú",
    detail: "Entidad que convoca y administra el AEIF.",
    logo: { src: "/assets/brand/embajada-eeuu-lima.webp", w: 160, h: 160, alt: "Sello de la Embajada de los Estados Unidos en Lima" },
  },
  { name: "Fulbright Perú", detail: "Programa de intercambio del que provienen los cinco integrantes del equipo." },
  {
    name: "U.S.-Peru Alumni",
    detail: "Comunidad de exbecarios de programas de intercambio de los Estados Unidos.",
    logo: { src: "/assets/brand/us-peru-alumni.webp", w: 166, h: 160, alt: "Logotipo de U.S.-Peru Alumni (USPA), comunidad de exbecarios" },
  },
];

/** Organizaciones representadas en el taller de Cajamarca (19/11/2025). Fuente: AEIF 2026. */
export const cajamarcaOrgs = [
  "Impacta",
  "Women in Mining (WIM)",
  "Society for Mining, Metallurgy & Exploration (SME)",
  "Red Interquorum (IQ)",
  "Alianza Medio Ambiental (AMA)",
  "OpenMind",
  "ASIMET",
  "Amautas Mineros",
  "Resurgir Verde",
  "RAJUCAJ",
  "Jóvenes del Milenio",
];

/** Casas de estudio con estudiantes presentes en Cajamarca. Fuente: AEIF 2026. */
export const cajamarcaUniversities = [
  "Universidad Nacional de Cajamarca (UNC)",
  "Universidad Privada del Norte (UPN)",
  "SENATI",
];
