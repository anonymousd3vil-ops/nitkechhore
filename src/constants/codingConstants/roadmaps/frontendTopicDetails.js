export const TOPIC_DETAILS = {
  I1: {
    title: "Internet Fundamentals",
    level: "Beginner",
    description:
      "The internet is a global network connecting computers and devices for information sharing. Enables browsing, email, streaming, and communication through interconnected systems. Acts as worldwide infrastructure facilitating access to online resources and services.",
  },
  I2: {
    title: "HTTP / HTTPS",
    level: "Beginner",
    description:
      "HTTP (Hypertext Transfer Protocol) enables browser-server communication through requests and responses. Stateless protocol using methods like GET and POST. HTTPS provides encrypted security. Newer versions (HTTP/2, HTTP/3) offer improved performance. Fundamental for web development understanding.",
  },
  I3: {
    title: "Domain & Hosting",
    level: "Beginner",
    description:
      "Domain names are human-friendly web addresses (e.g., google.com) substituting numerical IP addresses. Comprise second-level (\"google\") and top-level (\".com\") domains. Registered through registrars, essential for branding and online presence. DNS translates names to IP addresses for accessibility.",
  },
  I4: {
    title: "DNS",
    level: "Beginner",
    description:
      "DNS (Domain Name System) translates human-readable domain names into IP addresses through a global, decentralized server network. Enables easy internet navigation by converting names like www.example.com to numeric addresses browsers can connect to.",
  },
  I5: {
    title: "Browsers & Rendering",
    level: "Beginner",
    description:
      "Web browsers request and display websites by interpreting HTML, CSS, and JavaScript. Use rendering engines (Blink, Gecko) for display and JavaScript engines (V8) for code execution. Handle security, bookmarks, history, and user interactions for web navigation.",
  },

  H1: {
    title: "HTML Basics",
    level: "Beginner",
    description:
      "HTML (Hypertext Markup Language) is the standard for creating web pages, structuring content with elements and attributes. Browsers interpret HTML tags to render pages. HTML5, the current standard, adds semantic elements, multimedia support, and form controls. It works with CSS for styling and JavaScript for interactivity, forming web development's foundation.",
  },
  H2: {
    title: "Semantic HTML",
    level: "Beginner",
    description:
      "Using header, main, section, article, nav, and footer tags for accessible structure.",
  },
  H3: {
    title: "Forms & Validations",
    level: "Beginner",
    description:
      "HTML form elements, inputs, form submission, and client-side validation attributes.",
  },
  H4: {
    title: "Accessibility (a11y)",
    level: "Beginner",
    description:
      "ARIA attributes, screen readers, contrast ratios, and keyboard navigation.",
  },
  H5: {
    title: "SEO Basics",
    level: "Beginner",
    description:
      "Meta tags, Open Graph, indexing, sitemaps, and search crawler visibility.",
  },

  C1: {
    title: "CSS Basics",
    level: "Beginner",
    description:
      "Selectors, cascading rules, specificity, inheritance, and the box model.",
  },
  C2: {
    title: "CSS Layouts",
    level: "Beginner",
    description:
      "Mastering Flexbox and CSS Grid layout algorithms for complex UI designs.",
  },
  C3: {
    title: "Responsive Design",
    level: "Beginner",
    description:
      "Mobile-first development, viewport meta tags, container queries, and media queries.",
  },

  J1: {
    title: "JavaScript Basics",
    level: "Intermediate",
    description:
      "Variables, data types, loops, functions, scope, closures, and ES6+ features.",
  },
  J2: {
    title: "DOM Manipulation",
    level: "Intermediate",
    description:
      "Selecting elements, manipulating nodes, event listeners, and bubbling/capturing.",
  },
  J3: {
    title: "Fetch API & Async JS",
    level: "Intermediate",
    description:
      "Promises, async/await, handling JSON payloads, and network error handling.",
  },

  Git: {
    title: "Git Version Control",
    level: "Beginner",
    description:
      "Staging, commits, branching, rebasing, merge conflicts, and remote repositories.",
  },
  GH: {
    title: "GitHub",
    level: "Beginner",
    description:
      "Remote hosting, Pull Requests, Code Reviews, and GitHub Actions CI/CD.",
  },
  GL: {
    title: "GitLab",
    level: "Beginner",
    description:
      "Self-hosted & cloud Git platform with built-in CI/CD pipelines.",
  },
  BB: {
    title: "Bitbucket",
    level: "Beginner",
    description: "Atlassian's Git solution tightly integrated with Jira.",
  },

  NPM: {
    title: "npm",
    level: "Beginner",
    description:
      "Default package manager for Node.js to manage project dependencies and scripts.",
  },
  PNPM: {
    title: "pnpm",
    level: "Beginner",
    description:
      "Fast, disk space efficient package manager utilizing hard links and symlinks.",
  },
  YARN: {
    title: "yarn",
    level: "Beginner",
    description:
      "Fast, reliable, and secure package manager with workspace support.",
  },

  React: {
    title: "React.js",
    level: "Intermediate",
    description:
      "Component-driven architecture, JSX, Hooks (useState, useEffect), and virtual DOM.",
  },
  Vue: {
    title: "Vue.js",
    level: "Intermediate",
    description:
      "Reactivity system, Composition API, Single-File Components, and Directives.",
  },
  Angular: {
    title: "Angular",
    level: "Intermediate",
    description:
      "TypeScript-first enterprise framework with Dependency Injection and RxJS.",
  },
  Svelte: {
    title: "Svelte",
    level: "Intermediate",
    description:
      "Compiler-based framework that compiles code to minimal vanilla JavaScript.",
  },
  Solid: {
    title: "Solid JS",
    level: "Intermediate",
    description: "Fine-grained reactive UI library without a Virtual DOM.",
  },
  Qwik: {
    title: "Qwik",
    level: "Intermediate",
    description:
      "Resumable framework with near-instant page loads by serializing state.",
  },

  Tailwind: {
    title: "Tailwind CSS",
    level: "Intermediate",
    description:
      "Utility-first CSS framework for creating rapid custom user interfaces.",
  },
  PostCSS: {
    title: "PostCSS",
    level: "Intermediate",
    description:
      "Tool for transforming CSS with JavaScript plugins like Autoprefixer.",
  },
  Sass: {
    title: "Sass",
    level: "Intermediate",
    description:
      "CSS extension with variables, nesting, mixins, and inheritance.",
  },
  BEM: {
    title: "BEM Architecture",
    level: "Intermediate",
    description:
      "Block Element Modifier methodology for maintainable CSS class naming.",
  },
  CSSMods: {
    title: "CSS Modules & Styled Components",
    level: "Intermediate",
    description: "Scoped styling and CSS-in-JS solutions.",
  },

  Vite: {
    title: "Vite",
    level: "Intermediate",
    description:
      "Modern build tool with native ESM dev server and Rollup production builds.",
  },
  Esbuild: {
    title: "esbuild",
    level: "Intermediate",
    description: "Extremely fast JS/TS bundler written in Go.",
  },
  Rollup: {
    title: "Rollup",
    level: "Intermediate",
    description: "Module bundler specializing in libraries and tree-shaking.",
  },
  Webpack: {
    title: "Webpack",
    level: "Intermediate",
    description:
      "Battle-tested configurable asset bundler with rich plugin ecosystem.",
  },
  Parcel: {
    title: "Parcel",
    level: "Intermediate",
    description: "Zero-configuration build tool and bundler.",
  },
  Linters: {
    title: "ESLint & Prettier",
    level: "Beginner",
    description:
      "Enforcing code standards, catching bugs, and automated code formatting.",
  },

  Vitest: {
    title: "Vitest",
    level: "Advanced",
    description:
      "Vite-native unit test runner with blazing speed and Jest-compatible API.",
  },
  Jest: {
    title: "Jest",
    level: "Advanced",
    description:
      "Widely used JavaScript testing framework with built-in mocking.",
  },
  Playwright: {
    title: "Playwright",
    level: "Advanced",
    description: "Reliable End-to-End testing across modern browser engines.",
  },
  Cypress: {
    title: "Cypress",
    level: "Advanced",
    description: "Developer-friendly browser testing for modern web apps.",
  },
  TS: {
    title: "TypeScript",
    level: "Intermediate",
    description:
      "Static typing on top of JavaScript for enterprise maintainability.",
  },

  Auth: {
    title: "Authentication Strategies",
    level: "Advanced",
    description:
      "JWT, OAuth 2.0, SSO, session cookies, and multi-factor authentication.",
  },
  Sec: {
    title: "Web Security Basics",
    level: "Advanced",
    description:
      "CORS policies, HTTPS, CSP headers, XSS, CSRF, and OWASP Top 10 risks.",
  },

  Next: {
    title: "Next.js",
    level: "Advanced",
    description:
      "Production React framework with App Router, SSR, SSG, and Server Components.",
  },
  Nuxt: {
    title: "Nuxt.js",
    level: "Advanced",
    description:
      "Intuitive Vue framework for server-rendered and hybrid web applications.",
  },
  SvelteKit: {
    title: "SvelteKit",
    level: "Advanced",
    description: "Full-stack framework powered by Svelte compiler.",
  },
  Astro: {
    title: "Astro",
    level: "Advanced",
    description:
      "Island Architecture SSG for content-heavy sites with zero client-side JS by default.",
  },
  Eleventy: {
    title: "Eleventy",
    level: "Advanced",
    description: "Simple, flexible Node-based static site generator.",
  },
  Vuepress: {
    title: "Vuepress",
    level: "Advanced",
    description:
      "Vue-powered static site generator optimized for technical documentation.",
  },
  GraphQL: {
    title: "GraphQL",
    level: "Advanced",
    description:
      "Query language for APIs with Apollo Client and Relay Modern integrations.",
  },

  Performance: {
    title: "Performance & Vitals",
    level: "Advanced",
    description:
      "Core Web Vitals (LCP, CLS, INP), Lighthouse audits, and RAIL model.",
  },
  BrowserAPIs: {
    title: "Browser APIs & PWAs",
    level: "Advanced",
    description:
      "Service Workers, WebSockets, Local/Session Storage, Geolocation, and Push API.",
  },
  Apps: {
    title: "Cross-Platform Apps",
    level: "Advanced",
    description:
      "React Native, Flutter, Electron, and Tauri for mobile and desktop applications.",
  },
};

export const CHART_DEFINITION = `
flowchart TD

  classDef reco fill:#7c3aed,stroke:#a78bfa,stroke-width:2px,color:#ffffff;
  classDef opt fill:#0284c7,stroke:#38bdf8,stroke-width:2px,color:#ffffff;
  classDef standard fill:#475569,stroke:#64748b,stroke-width:1px,color:#ffffff;

  subgraph Internet["🌐 1. Internet"]
    I1["How does the internet work?"]
    I2["What is HTTP / HTTPS?"]
    I3["What is Domain Name & Hosting?"]
    I4["DNS and how it works?"]
    I5["Browsers and how they work?"]
  end

  subgraph CoreTriad["🧱 2. Core Web Technologies"]
    direction TB

    subgraph HTML["HTML"]
      H1["Learn the basics"]
      H2["Writing Semantic HTML"]
      H3["Forms and Validations"]
      H4["Accessibility - a11y"]
      H5["SEO Basics"]
    end

    subgraph CSS["CSS"]
      C1["Learn the basics"]
      C2["Making Layouts - Flexbox, Grid"]
      C3["Responsive Design & Media Queries"]
    end

    subgraph JS["JavaScript"]
      J1["Learn the Basics"]
      J2["DOM Manipulation"]
      J3["Fetch API / Ajax"]
    end
  end

  Internet --> CoreTriad

  subgraph VCS_Pkg["🧰 3. Version Control & Package Managers"]

    subgraph VCS["Version Control Systems"]
      Git["Git"]:::reco
    end

    subgraph VCSHosting["VCS Hosting"]
      GH["GitHub"]:::reco
      GL["GitLab"]:::opt
      BB["Bitbucket"]:::opt
    end

    subgraph PkgMgr["Package Managers"]
      NPM["npm"]:::reco
      PNPM["pnpm"]:::reco
      YARN["yarn"]:::opt
    end
  end

  CoreTriad --> VCS_Pkg

  subgraph Frameworks["⚛️ 4. Pick a Framework"]
    React["React"]:::reco
    Vue["Vue.js"]:::opt
    Angular["Angular"]:::opt
    Svelte["Svelte"]:::opt
    Solid["Solid JS"]:::opt
    Qwik["Qwik"]:::opt
  end

  subgraph Styling["🎨 5. Writing CSS & Architecture"]
    Tailwind["Tailwind CSS"]:::reco
    PostCSS["PostCSS"]:::opt
    Sass["Sass"]:::opt
    BEM["BEM Architecture"]:::standard
    CSSMods["CSS Modules / Styled Components"]:::standard
  end

  VCS_Pkg --> Frameworks
  VCS_Pkg --> Styling

  subgraph BuildTools["⚙️ 6. Build Tools & Linters"]
    Vite["Vite"]:::reco
    Esbuild["esbuild"]:::opt
    Rollup["Rollup"]:::opt
    Webpack["Webpack"]:::standard
    Parcel["Parcel"]:::opt
    Linters["ESLint & Prettier"]:::reco
  end

  Frameworks --> BuildTools
  Styling --> BuildTools

  subgraph TestingType["🧪 7. Testing & Type Checkers"]

    subgraph Testing["Testing"]
      Vitest["Vitest"]:::reco
      Jest["Jest"]:::opt
      Playwright["Playwright (E2E)"]:::reco
      Cypress["Cypress"]:::opt
    end

    subgraph TypeCheckers["Type Checkers"]
      TS["TypeScript"]:::reco
    end
  end

  BuildTools --> TestingType

  subgraph SecAuth["🔒 8. Authentication & Web Security"]
    Auth["Auth: JWT, OAuth, SSO, Session Auth"]:::standard
    Sec["Security: CORS, HTTPS, CSP, OWASP"]:::standard
  end

  TestingType --> SecAuth

  subgraph SSR_SSG["🚀 9. Rendering & Meta-Frameworks"]

    subgraph SSR["Server-Side Rendering"]
      Next["Next.js"]:::reco
      Nuxt["Nuxt.js"]:::opt
      SvelteKit["SvelteKit"]:::opt
    end

    subgraph SSG["Static Site Generators"]
      Astro["Astro"]:::reco
      Eleventy["Eleventy"]:::opt
      Vuepress["Vuepress"]:::opt
    end

    subgraph API_Layer["Data Layer"]
      GraphQL["GraphQL (Apollo / Relay)"]:::standard
    end
  end

  SecAuth --> SSR_SSG

  subgraph AdvancedPath["📈 10. Performance & Cross-Platform"]
    Performance["Measure & Improve Perf: Core Web Vitals, DevTools"]
    BrowserAPIs["Browser APIs: Service Workers, Storage, WebSockets"]
    Apps["Cross-Platform Apps: React Native, Flutter, Tauri, Electron"]
  end

  SSR_SSG --> AdvancedPath

  %% ==========================================================
  %% MERMAID CLICK EVENTS
  %% ==========================================================

  click I1 call onRoadmapClick()
  click I2 call onRoadmapClick()
  click I3 call onRoadmapClick()
  click I4 call onRoadmapClick()
  click I5 call onRoadmapClick()

  click H1 call onRoadmapClick()
  click H2 call onRoadmapClick()
  click H3 call onRoadmapClick()
  click H4 call onRoadmapClick()
  click H5 call onRoadmapClick()

  click C1 call onRoadmapClick()
  click C2 call onRoadmapClick()
  click C3 call onRoadmapClick()

  click J1 call onRoadmapClick()
  click J2 call onRoadmapClick()
  click J3 call onRoadmapClick()

  click Git call onRoadmapClick()
  click GH call onRoadmapClick()
  click GL call onRoadmapClick()
  click BB call onRoadmapClick()

  click NPM call onRoadmapClick()
  click PNPM call onRoadmapClick()
  click YARN call onRoadmapClick()

  click React call onRoadmapClick()
  click Vue call onRoadmapClick()
  click Angular call onRoadmapClick()
  click Svelte call onRoadmapClick()
  click Solid call onRoadmapClick()
  click Qwik call onRoadmapClick()

  click Tailwind call onRoadmapClick()
  click PostCSS call onRoadmapClick()
  click Sass call onRoadmapClick()
  click BEM call onRoadmapClick()
  click CSSMods call onRoadmapClick()

  click Vite call onRoadmapClick()
  click Esbuild call onRoadmapClick()
  click Rollup call onRoadmapClick()
  click Webpack call onRoadmapClick()
  click Parcel call onRoadmapClick()
  click Linters call onRoadmapClick()

  click Vitest call onRoadmapClick()
  click Jest call onRoadmapClick()
  click Playwright call onRoadmapClick()
  click Cypress call onRoadmapClick()
  click TS call onRoadmapClick()

  click Auth call onRoadmapClick()
  click Sec call onRoadmapClick()

  click Next call onRoadmapClick()
  click Nuxt call onRoadmapClick()
  click SvelteKit call onRoadmapClick()
  click Astro call onRoadmapClick()
  click Eleventy call onRoadmapClick()
  click Vuepress call onRoadmapClick()
  click GraphQL call onRoadmapClick()

  click Performance call onRoadmapClick()
  click BrowserAPIs call onRoadmapClick()
  click Apps call onRoadmapClick()
`;