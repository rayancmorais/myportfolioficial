# Rayan Morais — Portfolio
 
> Site de portfólio pessoal com foco em performance, acessibilidade e micro-interações.
 
**Live:** [rayancmorais.com.br](https://rayancmorais.com.br)
 
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-black?logo=framer)
![i18n](https://img.shields.io/badge/i18n-PT--BR_%2F_EN-green)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)
 
---
 
## Sobre
 
Site single-page construído com React 19 + Vite. Navegação scroll-based com smooth scroll via Lenis, animações com Framer Motion, suporte a PT-BR e EN, e tema claro/escuro persistido em localStorage.
 
---
 
## Stack
 
| Camada | Tecnologia |
|--------|-----------|
| Framework | React 19 |
| Bundler | Vite 5 |
| Animações | Framer Motion |
| Scroll suave | Lenis |
| Estilização | Styled Components + CSS custom properties |
| i18n | i18next (PT-BR / EN) |
| Ícones | react-icons + lucide-react |
| Deploy | Vercel |
 
---
 
## Funcionalidades
 
- **Tema claro/escuro** — persistido em `localStorage`, aplicado via `data-theme` no `<html>`
- **Smooth scroll** — instância Lenis global acessível via `getLenis()` em qualquer componente
- **Code splitting** — seções abaixo do fold carregadas com `React.lazy` + `Suspense`
- **i18n** — PT-BR padrão, EN como fallback; troca em runtime via `i18n.changeLanguage()`
- **Cursor customizado** — ativado após montagem via `data-cursor-ready` no `<html>`
- **Parallax background** — renderizado apenas em dark mode; desativado em mobile via `data-no-mobile-blur`
- **Spinning gradient border** — utilitário `spin-border-outer` via CSS, ativo apenas em light mode; pausa em mobile
- **Card spotlight** — hook `useCardSpotlight()` com overlay radial-gradient seguindo o mouse
---
 
## Estrutura
 
```
src/
├── components/
│   ├── common/
│   │   ├── SectionContainer/    # Wrapper usado por todas as seções (TypeScript)
│   │   └── AnimatedSectionHeading/  # Heading com gradiente animado + barra accent
│   └── pageSections/
│       ├── introSection/        # Hero com bento tiles e spinning gradient border
│       ├── techStack/           # Grid de tecnologias
│       ├── featuredProjects/    # Case studies (lazy) — dados em featuredData.js
│       ├── projectSection/      # Cards de projetos (lazy) — dados em projectsData.json
│       ├── certificationSection/ # Certificados (lazy) — dados em certificatesData.json
│       ├── serviceSection/      # Serviços oferecidos (lazy)
│       ├── testimonialsSection/ # Depoimentos (lazy)
│       ├── portfolioSection/    # Galeria com expand animation via layoutId (lazy)
│       ├── gitHubStats/         # Stats do GitHub (lazy)
│       └── contactSection/      # Formulário de contato (lazy)
├── hooks/
│   ├── useLenis.js              # Singleton Lenis: useLenis() monta, getLenis() acessa
│   └── useCardSpotlight.js      # Spotlight radial-gradient no hover de cards
├── translations/
│   ├── en/                      # home.json + navbar.json
│   └── pt-br/                   # home.json + navbar.json
└── index.css                    # Design tokens + utilitários globais
```
 
---
 
## Rodando localmente
 
```bash
git clone https://github.com/rayancmorais/myportfolioficial.git
cd myportfolioficial
npm install
npm run dev        # http://localhost:5173
```
 
Outros comandos:
 
```bash
npm run build      # build de produção
npm run preview    # prévia do build localmente
npm run lint       # ESLint
```
 
---
 
## Adicionando uma nova seção
 
1. Cria `src/components/pageSections/<nomeDaSeção>/` com o componente, `*.styles.js` e `index.js`
2. Exporta de `src/components/pageSections/index.js`
3. Importa lazily em `Home.jsx` e envolve com `<Suspense fallback={<Fallback />}>`
4. Adiciona a chave de tradução em `en/navbar.json` e `pt-br/navbar.json`
5. Adiciona a entrada no array `links` em `NavBar.jsx`
---
 
## Internacionalização
 
Traduções organizadas em dois namespaces por locale:
 
```
src/translations/
  en/      home.json  navbar.json
  pt-br/   home.json  navbar.json
```
 
Toda nova string traduzível deve ser adicionada nos **dois** locales. A troca de idioma é feita via `i18n.changeLanguage("en" | "ptBR")` — implementada na `NavBar.jsx`.
 
---
 
## Design tokens
 
Definidos em `src/index.css` e sobrescritos para `[data-theme="light"]`. Nunca hardcode cores em styled-components — use sempre os tokens:
 
| Token | Uso |
|-------|-----|
| `--bg-base`, `--bg-tile`, `--bg-nav` | Backgrounds |
| `--text-primary`, `--text-secondary`, `--text-muted` | Tipografia |
| `--border-subtle`, `--border-card` | Bordas |
| `--accent`, `--accent-glow` | Destaque |
| `--shadow-card`, `--shadow-tile` | Sombras |
 
---
 
## Decisões técnicas
 
**Por que Vite em vez de Next.js?**
O portfólio não tem necessidade de SSR ou SSG — todo o conteúdo é estático e a indexação pelo Google é feita via Vercel. Vite oferece HMR instantâneo e build mais rápido para esse caso de uso.
 
**Por que lazy loading por seção?**
O portfólio tem muitas seções com animações pesadas (Framer Motion, parallax, spotlight). Carregar tudo de uma vez aumentaria o bundle inicial desnecessariamente. `React.lazy` + `Suspense` divide o bundle em chunks carregados conforme o scroll.
 
**Por que styled-components em vez de Tailwind?**
As animações e o sistema de design tokens exigem estilos dinâmicos baseados em props e variáveis CSS. Styled-components permite isso de forma colocada com o componente, sem classes utilitárias inline que crescem com a complexidade visual.
 
---
 
## Roadmap
 
- [ ] Migração para Next.js 15 + TypeScript
- [ ] Layout Bento Grid na seção hero
- [ ] Magnetic buttons e parallax 3D nos cards
- [ ] Integração com assistente de IA
---
 
## Licença
 
MIT — veja [LICENSE](LICENSE) para detalhes.
 
---
 
<p align="center">
  Feito por <a href="https://github.com/rayancmorais">Rayan Morais</a> ·
  <a href="https://rayancmorais.com.br">rayancmorais.com.br</a>
</p>ß