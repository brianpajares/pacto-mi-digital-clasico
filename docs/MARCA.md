# Identidad visual (versión clásica)

La paleta, el escudo y los logos de auspicio se tomaron del **Toolkit PACTO-MI**
(portada y encabezado de cada página).

| Uso | Color |
|---|---|
| Rojo del escudo (marca, botones, enlaces) | `#A11F27` |
| Rojo vivo (franjas, subrayados) | `#D2232A` |
| Granate profundo (títulos, degradados) | `#6E1219` |
| Texto | `#3D1216` (granate muy oscuro; el sitio no usa negro) |
| Fondos | `#F5F5F6`, `#ECECEE`, blanco |

- Tipografía de títulos: Montserrat 600/700/800, alojada en `assets/fonts/`
  (licencia SIL OFL en `assets/fonts/OFL-Montserrat.txt`). El cuerpo usa las
  fuentes del sistema. No hay peticiones a terceros.
- `assets/brand/pacto-mi-escudo.svg`: escudo oficial vectorizado desde la portada.
- `assets/brand/bandera-eeuu.webp`, `embajada-eeuu-lima.webp`, `us-peru-alumni.webp`:
  franja "Una iniciativa auspiciada por:", tal como en el toolkit.
- `assets/brand/textura-mina.webp`: textura de la portada usada bajo las bandas rojas.
- Iconos (`assets/icons/`) e imagen para redes (`og.png`) se renderizaron a partir
  del escudo; ya no se generan en el build.
- Aliados: se muestran con sus siglas hasta contar con los logotipos autorizados.
  Para añadir uno, guarda el archivo en `assets/brand/` y agrega `logo` a la
  entrada correspondiente de `content/partners.mjs`.
- No hay modo oscuro: el sitio mantiene siempre la paleta clara del toolkit.
