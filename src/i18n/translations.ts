export type Lang = "en" | "pt-BR";

export const LANGUAGES: { code: Lang; short: string; label: string }[] = [
  { code: "en", short: "EN", label: "English" },
  { code: "pt-BR", short: "PT-BR", label: "Português (Brasil)" },
];

export const dictionaries = {
  "pt-BR": {
    meta: {
      title: "Poliana Sidere — Software Developer | Frontend, Mobile & Engenharia de Software",
      description:
        "Portfólio de Poliana Sidere, desenvolvedora focada em Frontend, Mobile e Engenharia de Software — transformando problemas complexos em produtos digitais.",
    },
    switcher: { aria: "Selecionar idioma" },
    nav: {
      links: [
        { href: "#about", label: "Sobre" },
        { href: "#process", label: "Processo" },
        { href: "#projects", label: "Projetos" },
        { href: "#stack", label: "Tecnologias" },
      ],
      role: "/ software developer",
      cta: "Vamos conversar",
      contact: "Contato",
    },
    hero: {
      eyebrow: "Poliana Sidere — Software Developer",
      title1: "Transformo",
      title2: "problemas complexos",
      title3prefix: "em ",
      title3accent: "produtos digitais.",
      lead: "Desenvolvedora focada em Frontend, Mobile e Engenharia de Software, criando experiências digitais que conectam pessoas, dados e sistemas.",
      ctaPrimary: "Ver projetos",
      ctaSecondary: "Vamos conversar",
      stats: [
        ["Foco", "Frontend / Mobile"],
        ["Em evolução", "Engenharia & Arquitetura"],
        ["Base", "Brasil"],
      ] as [string, string][],
      panel: {
        file: "mapa-da-solucao.tsx",
        live: "ao vivo",
        cells: [
          { k: "Problema", v: "mapeado" },
          { k: "Arquitetura", v: "definida" },
        ],
        rows: ["requisitos", "modelo de dados", "interface", "integração"],
        decisionLabel: "registro de decisão",
        decision:
          "Offline-first em vez de sincronização ao vivo — a feira tem conectividade instável.",
      },
    },
    about: {
      index: "01 — Sobre",
      title: "Mais do que desenvolver. Entender o problema.",
      kicker:
        "Tenho especial interesse por produtos digitais, aplicações web e mobile — e pela engenharia por trás deles.",
      chapters: [
        {
          step: "Início",
          title: "Começou pelas interfaces",
          body: "Minha trajetória começou no desenvolvimento de interfaces e aplicações: telas, estados, layouts, experiências mobile. O cuidado com a superfície.",
        },
        {
          step: "Trajetória",
          title: "Projetos reais mudaram a pergunta",
          body: "Com o tempo, trabalhar em projetos reais me mostrou que desenvolver software vai muito além de escrever código. A parte mais difícil raramente é o código.",
        },
        {
          step: "Hoje",
          title: "O processo começa antes da implementação",
          body: "Entender o problema, organizar informações, identificar necessidades, pensar na arquitetura — e então construir uma solução que faça sentido para quem vai utilizá-la.",
        },
      ],
      highlightPrefix: "Código é parte da solução.",
      highlightAccent: "Entender o problema",
      highlightSuffix: "é o começo dela.",
    },
    process: {
      index: "02 — Processo",
      title: "Toda solução começa antes do código.",
      kicker:
        "Desenvolver software não é apenas transformar requisitos em código. É entender o contexto, questionar o problema, estruturar as informações e tomar decisões que permitam construir algo sustentável.",
      stepLabel: "etapa",
      steps: [
        {
          n: "01",
          t: "Entender",
          d: "Conhecer o problema, o contexto e as pessoas envolvidas antes de pensar na solução.",
        },
        {
          n: "02",
          t: "Estruturar",
          d: "Organizar requisitos, dados, fluxos e regras para transformar um problema complexo em algo compreensível.",
        },
        {
          n: "03",
          t: "Projetar",
          d: "Definir a melhor abordagem para a solução, considerando experiência, arquitetura, tecnologia e contexto.",
        },
        {
          n: "04",
          t: "Desenvolver",
          d: "Transformar a solução planejada em uma aplicação funcional, performática e preparada para evoluir.",
        },
        {
          n: "05",
          t: "Validar",
          d: "Testar decisões, identificar problemas e garantir que aquilo que foi construído realmente resolve a necessidade inicial.",
        },
        {
          n: "06",
          t: "Evoluir",
          d: "Software não termina no primeiro deploy. A solução precisa acompanhar novos problemas, usuários e necessidades.",
        },
      ],
    },
    projects: {
      index: "03 — Projetos selecionados",
      title: "Problemas reais. Soluções construídas.",
      kicker:
        "Cada projeto representa mais do que uma aplicação desenvolvida. São experiências que me ajudaram a entender problemas, tomar decisões técnicas e evoluir minha forma de construir software.",
      cta: "Explorar projeto",
      labels: {
        context: "Contexto",
        challenge: "Desafio",
        solution: "Solução",
        learned: "O que aprendi",
        beyond: "Além da interface",
      },
      one: {
        kicker: "Aplicação mobile · Feira de Caruaru",
        title: "Aqui na Feira",
        lead: "Uma aplicação mobile criada para conectar pessoas, lugares e informações dentro da Feira de Caruaru.",
        context:
          "A ideia inicial parecia simples: ajudar visitantes a encontrar barracas, pontos de interesse e caminhos dentro da feira. Mas, conforme o projeto avançou, percebemos que o problema era maior. A Feira de Caruaru possui uma grande quantidade de informações distribuídas e pouco estruturadas — antes de pensar em como levar uma pessoa de um ponto a outro, era necessário entender como representar e organizar os dados daquele ambiente.",
        challenge:
          "Como transformar um ambiente físico complexo em uma estrutura de dados que possa ser compreendida, consultada e utilizada por uma aplicação?",
        solution:
          "O projeto passou a ser pensado não apenas como uma ferramenta de navegação, mas como uma solução capaz de organizar informações da feira e transformá-las em uma experiência digital acessível. A aplicação utiliza geolocalização, mapas e dados estruturados para aproximar o usuário das informações existentes naquele espaço.",
        beyond1:
          "O desafio mais interessante do projeto não estava apenas nas telas. Foi entender que uma boa experiência depende da forma como os dados por trás dela são estruturados.",
        beyond2Prefix: "Esse projeto mudou minha percepção sobre desenvolvimento:",
        beyond2Strong:
          "muitas vezes, o problema que o usuário enxerga é apenas a ponta de algo muito maior.",
        tags: ["React Native", "Expo", "TypeScript", "Firebase", "Geolocation", "Maps", "APIs"],
      },
      two: {
        kicker: "Desenvolvimento web",
        title: "NS Informática",
        lead: "Uma presença digital para uma assistência técnica que evoluiu para uma experiência mais integrada.",
        context:
          "O projeto começou com uma necessidade direta: criar uma landing page profissional para apresentar a empresa, seus serviços e facilitar o contato com clientes. Durante o desenvolvimento, surgiu uma necessidade maior: integrar informações externas e permitir que determinados dados fossem apresentados de forma mais acessível ao usuário.",
        challenge:
          "Como transformar uma landing page simples em uma interface capaz de consumir e apresentar informações provenientes de sistemas externos sem comprometer a experiência do usuário?",
        solution:
          "A solução foi pensada com uma arquitetura frontend moderna, preparada para integração com APIs e serviços externos. A interface mantém a simplicidade necessária para uma página comercial, enquanto cria espaço para funcionalidades mais complexas conforme o projeto evolui.",
        learned:
          "Projetos aparentemente simples podem revelar desafios de arquitetura conforme novas necessidades surgem. Mais uma vez, o desenvolvimento deixou de ser apenas sobre construir uma interface e passou a envolver decisões sobre integração, dados e experiência.",
        tags: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "APIs",
          "Integrações externas",
          "Vercel",
        ],
      },
    },
    other: {
      index: "04 — Mais trabalhos",
      title: "A história continua.",
      kicker:
        "Novos problemas para entender, novas soluções para construir e novas coisas para aprender.",
      status: "projeto em andamento",
      keys: ["problema", "solução", "decisões", "tecnologia", "resultado"],
      cta: "Ver todos os projetos",
      slots: [
        {
          n: "03",
          title: "Próximo estudo de caso",
          body: "Novos projetos significam novos problemas para entender, novas soluções para construir e novas coisas para aprender.",
        },
        {
          n: "04",
          title: "Reservado",
          body: "Esta seção será atualizada conforme novos projetos entrarem para o portfólio — sempre com a mesma estrutura de leitura.",
        },
      ],
    },
    stack: {
      index: "05 — Stack",
      title: "Ferramentas para construir soluções.",
      kicker:
        "Tecnologia não é o ponto de partida. É o conjunto de ferramentas que utilizo para transformar uma solução pensada em algo real.",
      groups: [
        {
          title: "Frontend",
          items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
        },
        { title: "Mobile", items: ["React Native", "Expo"] },
        { title: "Backend & APIs", items: ["Node.js", "NestJS", "REST APIs"] },
        { title: "Dados", items: ["PostgreSQL", "Prisma", "Firebase"] },
        { title: "Infraestrutura", items: ["Git", "GitHub", "Docker", "Vercel"] },
      ],
      mindsetLabel: "Mindset",
      mindsetTitle: "A tecnologia muda.",
      mindsetTitleAccent: "A forma de resolver problemas permanece.",
      mindsetBody:
        "Estou constantemente aprendendo novas ferramentas, mas meu objetivo não é acumular stacks. Quero entender quando uma tecnologia faz sentido, quais problemas ela resolve e como utilizá-la para construir soluções melhores.",
    },
    contact: {
      index: "06 — Contato",
      title1: "Tem um problema que",
      title2prefix: "precisa virar ",
      title2accent: "produto",
      title2suffix: "?",
      lead: "Se você tem uma ideia, um problema ou uma solução que precisa sair do papel, vamos conversar.",
      ctaPrimary: "Vamos construir algo",
      ctaSecondary: "Enviar mensagem",
      channels: ["/in/poliana-sidere", "@Sidere", "Send a message", "sideresid@gmail.com"],
      rights: "Todos os direitos reservados.",
      role: "Software Developer · Frontend · Mobile · Engenharia de Software",
    },
    mockups: { nearby: "12 barracas próximas" },
  },
  en: {
    meta: {
      title: "Poliana Sidere — Software Developer | Frontend, Mobile & Software Engineering",
      description:
        "Portfolio of Poliana Sidere, a developer focused on Frontend, Mobile and Software Engineering — turning complex problems into digital products.",
    },
    switcher: { aria: "Selecionar idioma" },
    nav: {
      links: [
        { href: "#about", label: "About" },
        { href: "#process", label: "Process" },
        { href: "#projects", label: "Projects" },
        { href: "#stack", label: "Technologies" },
      ],
      role: "/ software developer",
      cta: "Let's talk",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Poliana Sidere — Software Developer",
      title1: "I turn complex",
      title2: "problems",
      title3prefix: "into ",
      title3accent: "digital products.",
      lead: "Developer focused on Frontend, Mobile and Software Engineering, building digital experiences that connect people, data and systems.",
      ctaPrimary: "View projects",
      ctaSecondary: "Let's talk",
      stats: [
        ["Focus", "Frontend / Mobile"],
        ["Growing into", "Engineering & Architecture"],
        ["Based in", "Brazil"],
      ] as [string, string][],
      panel: {
        file: "solution-map.tsx",
        live: "live",
        cells: [
          { k: "Problem", v: "mapped" },
          { k: "Architecture", v: "defined" },
        ],
        rows: ["requirements", "data model", "interface", "integration"],
        decisionLabel: "decision log",
        decision: "Offline-first instead of live sync — the market has unstable connectivity.",
      },
    },
    about: {
      index: "01 — About",
      title: "More than building. Understanding the problem.",
      kicker:
        "I have a particular interest in digital products, web and mobile applications — and the engineering behind them.",
      chapters: [
        {
          step: "Start",
          title: "It began with interfaces",
          body: "My path started in interface and application development: screens, states, layouts, mobile experiences. Care for the surface.",
        },
        {
          step: "Journey",
          title: "Real projects changed the question",
          body: "Over time, working on real projects showed me that building software goes far beyond writing code. The hardest part is rarely the code.",
        },
        {
          step: "Today",
          title: "The process starts before implementation",
          body: "Understanding the problem, organizing information, identifying needs, thinking about architecture — and only then building a solution that makes sense for the people who will use it.",
        },
      ],
      highlightPrefix: "Code is part of the solution.",
      highlightAccent: "Understanding the problem",
      highlightSuffix: "is where it begins.",
    },
    process: {
      index: "02 — Process",
      title: "Every solution starts before the code.",
      kicker:
        "Building software is not just turning requirements into code. It's understanding the context, questioning the problem, structuring information and making decisions that allow something sustainable to be built.",
      stepLabel: "step",
      steps: [
        {
          n: "01",
          t: "Understand",
          d: "Get to know the problem, the context and the people involved before thinking about the solution.",
        },
        {
          n: "02",
          t: "Structure",
          d: "Organize requirements, data, flows and rules to turn a complex problem into something understandable.",
        },
        {
          n: "03",
          t: "Design",
          d: "Define the best approach for the solution, considering experience, architecture, technology and context.",
        },
        {
          n: "04",
          t: "Build",
          d: "Turn the planned solution into a functional, performant application ready to evolve.",
        },
        {
          n: "05",
          t: "Validate",
          d: "Test decisions, spot problems and make sure what was built truly solves the original need.",
        },
        {
          n: "06",
          t: "Evolve",
          d: "Software doesn't end at the first deploy. The solution has to keep up with new problems, users and needs.",
        },
      ],
    },
    projects: {
      index: "03 — Selected projects",
      title: "Real problems. Solutions built.",
      kicker:
        "Each project represents more than an application delivered. They are experiences that helped me understand problems, make technical decisions and evolve the way I build software.",
      cta: "Explore project",
      labels: {
        context: "Context",
        challenge: "Challenge",
        solution: "Solution",
        learned: "What I learned",
        beyond: "Beyond the interface",
      },
      one: {
        kicker: "Mobile application · Caruaru Market",
        title: "Aqui na Feira",
        lead: "A mobile application created to connect people, places and information inside the Caruaru Market.",
        context:
          "The initial idea seemed simple: help visitors find stalls, points of interest and paths inside the market. But as the project progressed, we realized the problem was bigger. The Caruaru Market holds a large amount of scattered, barely structured information — before thinking about how to guide someone from one point to another, we had to understand how to represent and organize the data of that environment.",
        challenge:
          "How do you turn a complex physical environment into a data structure that an application can understand, query and use?",
        solution:
          "The project became not just a navigation tool, but a solution able to organize the market's information and turn it into an accessible digital experience. The application uses geolocation, maps and structured data to bring users closer to the information that already exists in that space.",
        beyond1:
          "The most interesting challenge of the project wasn't only in the screens. It was understanding that a good experience depends on how the data behind it is structured.",
        beyond2Prefix: "This project changed my perception of development:",
        beyond2Strong:
          "very often, the problem the user sees is just the tip of something much bigger.",
        tags: ["React Native", "Expo", "TypeScript", "Firebase", "Geolocation", "Maps", "APIs"],
      },
      two: {
        kicker: "Web development",
        title: "NS Informática",
        lead: "A digital presence for a technical support company that evolved into a more integrated experience.",
        context:
          "The project started with a direct need: create a professional landing page to present the company, its services and make it easier for customers to get in touch. During development, a bigger need emerged: integrating external information and presenting certain data in a more accessible way.",
        challenge:
          "How do you turn a simple landing page into an interface able to consume and present information from external systems without compromising the user experience?",
        solution:
          "The solution was designed with a modern frontend architecture, prepared for integration with APIs and external services. The interface keeps the simplicity a commercial page needs, while making room for more complex features as the project evolves.",
        learned:
          "Seemingly simple projects can reveal architectural challenges as new needs appear. Once again, development stopped being only about building an interface and started involving decisions about integration, data and experience.",
        tags: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "APIs",
          "External integrations",
          "Vercel",
        ],
      },
    },
    other: {
      index: "04 — More work",
      title: "The story continues.",
      kicker: "New problems to understand, new solutions to build and new things to learn.",
      status: "project in progress",
      keys: ["problem", "solution", "decisions", "technology", "outcome"],
      cta: "See all projects",
      slots: [
        {
          n: "03",
          title: "Next case study",
          body: "New projects mean new problems to understand, new solutions to build and new things to learn.",
        },
        {
          n: "04",
          title: "Reserved",
          body: "This section will be updated as new projects join the portfolio — always with the same reading structure.",
        },
      ],
    },
    stack: {
      index: "05 — Stack",
      title: "Tools to build solutions.",
      kicker:
        "Technology is not the starting point. It's the set of tools I use to turn a well-thought solution into something real.",
      groups: [
        {
          title: "Frontend",
          items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
        },
        { title: "Mobile", items: ["React Native", "Expo"] },
        { title: "Backend & APIs", items: ["Node.js", "NestJS", "REST APIs"] },
        { title: "Data", items: ["PostgreSQL", "Prisma", "Firebase"] },
        { title: "Infrastructure", items: ["Git", "GitHub", "Docker", "Vercel"] },
      ],
      mindsetLabel: "Mindset",
      mindsetTitle: "Technology changes.",
      mindsetTitleAccent: "The way of solving problems stays.",
      mindsetBody:
        "I'm constantly learning new tools, but my goal isn't to collect stacks. I want to understand when a technology makes sense, which problems it solves and how to use it to build better solutions.",
    },
    contact: {
      index: "06 — Contact",
      title1: "Got a problem that",
      title2prefix: "needs to become a ",
      title2accent: "product",
      title2suffix: "?",
      lead: "If you have an idea, a problem or a solution that needs to leave the paper, let's talk.",
      ctaPrimary: "Let's build something",
      ctaSecondary: "Send a message",
      channels: ["/in/poliana-sidere", "@Sidere", "Send a message", "sideresid@gmail.com"],
      rights: "All rights reserved.",
      role: "Software Developer · Frontend · Mobile · Software Engineering",
    },
    mockups: { nearby: "12 stalls nearby" },
  },
} as const;

export type Dictionary = (typeof dictionaries)["en"];
