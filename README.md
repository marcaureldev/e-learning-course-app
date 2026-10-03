# E-Learning Course App

Site de cours en ligne construit avec Nuxt 4 et Tailwind CSS, d'après une
maquette Figma (8 pages, déclinées en Desktop 1920 / Laptop 1440 / Mobile 390).

## Stack

- [Nuxt 4](https://nuxt.com) + TypeScript (`strict`)
- [Tailwind CSS 4](https://tailwindcss.com) via `@tailwindcss/vite`
- [`@nuxt/fonts`](https://github.com/nuxt/fonts) - Be Vietnam Pro, auto-hébergée
- [`@nuxt/image`](https://image.nuxt.com) - `<NuxtImg>`
- [`@nuxt/eslint`](https://eslint.nuxt.com) - config plate + règles stylistiques

## Démarrer

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Scripts

| Commande | Rôle |
| --- | --- |
| `pnpm dev` | serveur de développement |
| `pnpm build` | build de production |
| `pnpm preview` | prévisualise le build |
| `pnpm lint` | ESLint (`lint:fix` pour corriger) |
| `pnpm typecheck` | vérification des types (`vue-tsc`) |

## Convention de commits

Les messages suivent les [conventional commits](https://www.conventionalcommits.org),
vérifiés par commitlint via un hook `commit-msg` géré par husky. Un message hors
convention est refusé localement.

```
type(scope facultatif): sujet en minuscules, sans point final
```

Types admis : `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`,
`revert`, `style`, `test`. L'en-tête ne dépasse pas 100 caractères.

Le hook s'installe tout seul : `pnpm install` déclenche le script `prepare`.

## Convention de couleurs

> [!IMPORTANT]
> Les échelles `orange`, `grey` et `white` reproduisent les variables Figma
> (`Famille/Luminosité`), **ce qui inverse la convention de Tailwind** : ici
> `50` est la teinte médiane, pas la plus claire. `orange-50` est donc l'orange
> de marque (`#FF9500`) et non un orange pâle.

| Token Figma | Classe | Valeur |
| --- | --- | --- |
| `Orange/50` | `orange-50` | `#FF9500` |
| `Orange/90` | `orange-90` | `#FFEACC` |
| `Orange/95` | `orange-95` | `#FFF4E5` |
| `Orange/97` | `orange-97` | `#FFF9F0` |
| `Grey/10` → `Grey/40` | `grey-10` … `grey-40` | `#1A1A1A` → `#656567` |
| `Absolute/White` | `white` | `#FFFFFF` (fourni par Tailwind) |
| `White/95` / `97` / `99` | `white-95` … | `#F1F1F3` / `#F7F7F8` / `#FCFCFD` |

L'échelle `gray` de Tailwind reste disponible et inchangée : nos gris
portent l'orthographe britannique `grey`, reprise de Figma.

Les tokens sont déclarés en CSS dans `app/assets/css/main.css`, sous
`@theme` - Tailwind 4 n'utilise plus de fichier `tailwind.config.js`.

## Structure

```
app/
  components/
    layout/   Header (barre promo + navbar), Navbar
    ui/       primitives réutilisables (UiButton)
    icons/    icônes inline
  pages/      une page par route
  layouts/    default.vue
  assets/css/ main.css (thème Tailwind, tokens et couche de base)
  app.vue     coque applicative
  error.vue   404 et erreurs serveur
public/       assets servis tels quels (icônes, images)
server/       routes d'API Nitro
```

## État d'avancement

Page d'accueil : Header, Hero, logos entreprises et visuel principal sont en
place. Restent à construire : Benefits, Our Courses, Testimonials, Pricing, FAQ
et Footer. Les autres routes existent en tant que pages minimales.
