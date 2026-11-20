import { html } from "../lib/html.mjs";
import { sponsorStrip, pageHero, sectionHead, statCard, callout, figure, teamPortraits } from "../lib/components.mjs";
import { team } from "../content/team.mjs";
import { partners, institutional, companies } from "../content/partners.mjs";
import { site } from "../content/site.mjs";

const body = html`
  ${pageHero({
    eyebrow: "Nosotros",
    title: "Cinco exbecarios Fulbright, dos regiones, un compromiso",
    lead:
      "PACTO-MI nació cuando un grupo de profesionales cajamarquinos formados en programas de intercambio de los Estados Unidos identificó la misma brecha desde ángulos distintos: la sociedad no tiene información confiable sobre lo que la minería ilegal realmente provoca.",
    meta: ["Ganadores globales AEIF 2025", "Cajamarca y Madre de Dios", "9 meses de ejecución"],
  })}

  <section class="section shell" aria-labelledby="origen">
    <div class="split-section">
      <div class="prose">
        ${sectionHead({ eyebrow: "Origen", title: "Cómo nace el proyecto", id: "origen" })}
        <p>
          El <strong>Alumni Engagement Innovation Fund</strong> es una iniciativa de la Embajada de los
          Estados Unidos dirigida a exbecarios de programas de intercambio educativo. Financia proyectos de
          responsabilidad social y empoderamiento territorial en el Perú.
        </p>
        <p>
          Cada año las propuestas atraviesan una evaluación en dos etapas, una nacional y otra global. En
          2025, el equipo presentó <em>${site.project}</em> y fue reconocido como ganador global del fondo.
        </p>
        <p>
          Así nace PACTO-MI: una red de acción juvenil contra la minería ilegal y el crimen organizado,
          concebida como plataforma de liderazgo y acción colectiva en Cajamarca y Madre de Dios.
        </p>
        ${figure("aeif-ganadores-globales", { zoom: true, className: "winners-figure" })}
      </div>
      <div class="stat-grid cols-1">
        ${statCard("presupuesto")} ${statCard("duracion")} ${statCard("beneficiarios-directos")}
      </div>
    </div>
  </section>

  <section class="band band-dark team-band" aria-labelledby="equipo" id="equipo-ejecutor">
    <div class="shell">
      <div class="team-band-head">
        ${sectionHead({
          eyebrow: "Equipo ejecutor",
          title: "Cinco exbecarios Fulbright, un mismo pacto",
          lead: "Profesionales cajamarquinos formados en programas de intercambio de los Estados Unidos, ganadores globales del AEIF 2025.",
          id: "equipo",
        })}
        <img class="team-fulbright" src="/assets/brand/fulbright-peru.webp" width="434" height="116" alt="Logotipo de Fulbright Perú, programa del que provienen los cinco integrantes" loading="lazy" decoding="async" />
      </div>
      ${teamPortraits(team, { detailed: true })}
    </div>
  </section>

  <section class="section shell" aria-labelledby="aliados">
    ${sectionHead({
      eyebrow: "Aliados",
      title: "Con quiénes trabajamos",
      lead:
        "Aliados académicos, científicos, gremiales y empresariales que aportan credibilidad técnica, convocatoria y sostenibilidad al proyecto.",
      id: "aliados",
    })}
    <div class="partner-grid">
      ${partners.map(
        (p) => html`
          <article class="partner">
            <span class="partner-seal" aria-hidden="true">${p.mark}</span>
            <p class="partner-kind">${p.kind} · ${p.region}</p>
            <h3>${p.name}</h3>
            <p>${p.detail}</p>
          </article>
        `
      )}
    </div>
    <div class="companies">
      <p class="companies-title">También acompañan al proyecto</p>
      <ul>
        ${companies.map((c) => html`<li><img src="${c.src}" width="${c.w}" height="${c.h}" alt="${c.alt}" loading="lazy" decoding="async" /></li>`)}
      </ul>
      <p class="tk-source">Logotipos tal como figuran en la portada de la presentación institucional AEIF 2026.</p>
    </div>
  </section>

  <section class="band band-dark" aria-labelledby="respaldo">
    <div class="shell">
      ${sectionHead({ eyebrow: "Respaldo institucional", title: "Financiamiento y programas", id: "respaldo" })}
      <ul class="org-list">
        ${institutional.map(
          (i) => html`
            <li>
              ${i.logo ? html`<img class="org-logo" src="${i.logo.src}" width="${i.logo.w}" height="${i.logo.h}" alt="${i.logo.alt}" loading="lazy" decoding="async" />` : ""}
              <strong>${i.name}</strong>
              <span>${i.detail}</span>
            </li>
          `
        )}
      </ul>
      <div class="sponsors-card">${sponsorStrip()}</div>
      ${callout({
        tone: "info",
        icon: "i",
        title: "Sobre el uso de logotipos",
        body:
          "El logotipo de Fulbright Perú, la bandera, el sello de la Embajada de los Estados Unidos en Lima y el logotipo de U.S.-Peru Alumni se muestran tal como aparecen en el toolkit oficial del proyecto. También se muestran el logotipo de Fulbright Perú y los de las empresas que figuran en la presentación institucional AEIF 2026. Los aliados restantes se identifican con sus siglas hasta que el equipo entregue sus logotipos.",
      })}
    </div>
  </section>

  <section class="section shell narrow" aria-labelledby="contacto">
    ${sectionHead({ eyebrow: "Contacto", title: "Hablemos", id: "contacto", align: "center" })}
    <p class="center-text">
      Si representas a una organización juvenil, una universidad, una institución pública o una empresa que
      quiera sumarse al proyecto en Cajamarca o Madre de Dios, escríbenos.
    </p>
    <ul class="contact-list">
      <li><span>Correo</span><a href="mailto:${site.contact.email}">${site.contact.email}</a></li>
      <li><span>Teléfono</span><a href="tel:${site.contact.phoneHref}">${site.contact.phone}</a></li>
      <li><span>LinkedIn</span><a href="${site.contact.linkedin}" rel="noopener">PACTO-MI</a></li>
    </ul>
  </section>
`;

export default {
  path: "/nosotros",
  file: "nosotros/index.html",
  title: "Nosotros",
  description:
    "El equipo de cinco exbecarios Fulbright detrás de PACTO-MI, los aliados académicos, científicos y empresariales del proyecto, y el respaldo del Alumni Engagement Innovation Fund 2025.",
  breadcrumb: true,
  body,
};
