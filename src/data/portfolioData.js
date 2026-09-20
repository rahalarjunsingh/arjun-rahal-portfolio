/**
 * portfolioData.js
 * Single source of truth for all portfolio content.
 * Every value is extracted from:
 *   - Arjun_Singh_Rahal_Senior_NET_Developer_ATS.md (primary)
 *   - Resume_Arjun.pdf
 *   - Profile.pdf
 *   - User-provided links
 */

export const personal = {
  name: 'Arjun Singh Rahal',
  // Title from ATS.md (primary source). Resume says ".NET Developer / Software Engineer".
  title: 'Senior .NET Developer',
  subtitle: 'Backend Engineer — C#, ASP.NET Core, Azure',
  location: 'Mumbai / Nagpur, Maharashtra, India',
  summary:
    'Backend-focused .NET engineer with ~3 years building production e-commerce platforms (Artifi / Znode) in C#, ASP.NET Core MVC, and ASP.NET Core Web API. Designs modular microservices, RESTful integrations, and SQL-backed order/payment/shipping workflows. Ships containerized services with Docker and Azure DevOps CI/CD, and differentiates with LLM/LangChain agents plus Azure OpenAI recommendation pipelines on top of the Microsoft stack.',
  heroIntro:
    'Building scalable e-commerce platforms and microservices with the Microsoft stack — from containerized APIs to AI-powered pipelines.',
  languages: ['Hindi (Native)', 'English (Professional Working)'],
};

export const socialLinks = {
  email: 'rahalarjunsingh@gmail.com',
  linkedin: 'https://www.linkedin.com/in/arjunrahal/',
  github: 'https://github.com/rahalarjunsingh',
};

export const experience = [
  {
    company: 'Amla Commerce',
    companyNote: 'Creator of Artifi and Znode',
    roles: [
      {
        title: 'Associate Software Engineer',
        dates: 'Jan 2025 – Present',
        location: 'Nagpur, India',
        responsibilities: [
          'Delivered a Zero-Dollar Authorization payment path in ASP.NET Core Web API integrated with Spreedly, reducing multi-gateway validation failures by standardizing tokenization and pre-auth checks across payment providers.',
          'Cut shipping-rate fetch latency 40% by engineering a Shipping Manager microservice in C# / ASP.NET Core with multi-carrier APIs, USPS address validation, and in-memory / distributed caching of rate quotes.',
          'Improved Order Management System (OMS) API response time 25% by refactoring ASP.NET Core endpoints and tuning SQL Server stored procedures, indexes, and query plans for high-volume order reads/writes.',
          'Raised tax-calculation accuracy and compliance by rebuilding the Tax Manager service around AvaTax API integration, isolating tax rules behind a dedicated service boundary.',
          'Reduced payment and address-related checkout failures by integrating Spreedly multi-gateway payments and USPS validation into existing ASP.NET Core MVC / Web API order flows.',
          'Shipped ReactJS modules for admin console against the same REST contracts used by checkout and operations teams.',
          'Increased team delivery velocity 15% by mentoring 2 junior developers on Web API design, debugging, and code review inside Agile sprints.',
        ],
        technologies: ['C#', 'ASP.NET Core', 'Web API', 'SQL Server', 'ReactJS', 'Redis', 'Docker', 'Azure DevOps'],
      },
      {
        title: 'Trainee Software Engineer',
        dates: 'Jul 2024 – Dec 2024',
        location: 'Nagpur, India',
        responsibilities: [
          'Transitioned from intern to trainee role, taking ownership of production feature development.',
          'Developed 10+ API endpoints for inventory management system using ASP.NET Core and Entity Framework.',
          'Built dynamic UI components in React.js for admin dashboard, reducing manual processing time by 40%.',
          'Fixed 50+ bugs and improved code quality through unit testing (NUnit) and integration testing.',
          'Containerized applications using Docker, streamlining deployment across dev and staging environments.',
        ],
        technologies: ['ASP.NET Core', 'Entity Framework', 'React.js', 'NUnit', 'Docker'],
      },
      {
        title: 'Intern',
        dates: 'Jan 2024 – Jul 2024',
        location: 'Nagpur, India',
        responsibilities: [
          'Selected for 6-month internship working on enterprise e-commerce platforms (Artifi & Znode).',
          'Contributed to backend development using .NET Core, implementing CRUD operations for product catalog features.',
          'Assisted in database optimization tasks, improving query performance by 25%.',
          'Learned agile development practices, participating in daily standups and sprint planning.',
          'Earned promotion to Trainee Software Engineer based on performance and contributions.',
        ],
        technologies: ['.NET Core', 'SQL Server', 'Agile/Scrum'],
      },
    ],
  },
  {
    company: 'Cognifyz Technologies',
    companyNote: null,
    roles: [
      {
        title: 'Python Developer Intern',
        dates: 'Dec 2023 – Jan 2024',
        location: 'Remote',
        responsibilities: [
          'Developed REST APIs using Flask framework for internal automation tools.',
          'Built database schemas and implemented CRUD operations using PostgreSQL and SQLAlchemy ORM.',
          'Created Python scripts to automate data processing workflows, saving 5+ hours/week of manual work.',
        ],
        technologies: ['Python', 'Flask', 'PostgreSQL', 'SQLAlchemy'],
      },
    ],
  },
  {
    company: 'Oasis Infobyte',
    companyNote: null,
    roles: [
      {
        title: 'Data Science Intern',
        dates: 'Aug 2023 – Sep 2023',
        location: 'Remote',
        responsibilities: [
          'Built machine learning models to predict customer behavior with 82% accuracy using Python, Scikit-Learn, and Pandas.',
          'Performed exploratory data analysis on datasets with 10,000+ records, identifying key patterns and trends.',
          'Developed a Titanic survival prediction model using classification algorithms (Logistic Regression, Random Forest).',
        ],
        technologies: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib'],
      },
    ],
  },
  {
    company: 'ICEICO Technologies Pvt. Ltd.',
    companyNote: null,
    roles: [
      {
        title: 'Web Development Intern',
        dates: 'Jun 2023 – Aug 2023',
        location: 'Nagpur, India',
        responsibilities: [
          'Developed responsive web interfaces using React.js, HTML5, CSS3, and JavaScript.',
          'Implemented 5+ reusable UI components for client projects, reducing development time by 30%.',
          'Integrated frontend with backend APIs, handling asynchronous data fetching and state management.',
          'Collaborated with designers to translate Figma mockups into pixel-perfect React components.',
        ],
        technologies: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
      },
    ],
  },
];

export const projects = [
  {
    title: 'ShopScale',
    tagline: 'E-Commerce Microservices Platform',
    status: 'In Development',
    description:
      'Modular catalog, cart, auth, and order backend using microservices boundaries and Domain-Driven Design for independent scaling and deployment.',
    highlights: [
      'Reduced simulated peak catalog database load 30–40% by adding Redis distributed caching, pagination, and filtered product queries.',
      'Implemented high-throughput order workflows with async ASP.NET Core APIs.',
      'Containerized services with Docker for local-to-pipeline environment standardization.',
    ],
    technologies: ['.NET 8', 'ASP.NET Core Web API', 'C#', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'DDD'],
    github: null,
    live: null,
  },
  {
    title: 'E-Commerce Payment Integration',
    tagline: 'Tokenized Payment Platform',
    status: null,
    description:
      'Tokenized payment platform in ASP.NET Core and ReactJS that processes gateway transactions without persisting raw card data.',
    highlights: [
      'REST order/payment APIs plus webhook callbacks for real-time payment-status updates.',
      'Automated build, test, and deployment by containerizing the stack with Docker and wiring Azure DevOps CI/CD pipelines.',
    ],
    technologies: ['ASP.NET Core Web API', 'ReactJS', 'SQL Server', 'Docker', 'Azure DevOps CI/CD'],
    github: null,
    live: null,
  },
  {
    title: 'AI Job Hunter',
    tagline: 'LangChain Agent for JD Matching',
    status: null,
    description:
      'Automated resume-to-job matching by orchestrating a LangChain + Ollama pipeline that parses PDF resumes, scores JDs, and generates role-specific cover letters above a configurable match threshold.',
    highlights: [
      'Cut manual screening time by chaining scrape → skill match → experience filter → artifact generation.',
      'Structured agent tools around document ingestion and retrieval-style matching.',
    ],
    technologies: ['Python', 'LangChain', 'LangChain-Ollama', 'Llama 3', 'PDF Parsing', 'REST APIs'],
    github: 'https://github.com/rahalarjunsingh/AI-Job-Hunter',
    live: null,
  },
  {
    title: 'AI Stock Analyzer',
    tagline: 'Agentic Inventory Insights',
    status: null,
    description:
      'Single Source of Truth (SSOT) FastAPI data pipeline that analyzes inventory turnover and flags slow-moving stock for revenue-leakage review.',
    highlights: [
      'Generated actionable replenishment recommendations by integrating Azure OpenAI into the analytics API.',
      'Delivered a React / TypeScript dashboard so planners can inspect AI-ranked SKUs and supporting metrics.',
    ],
    technologies: ['Python FastAPI', 'Azure OpenAI', 'React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/rahalarjunsingh/AI_STOCK',
    live: null,
  },
];

export const skills = {
  'Languages & Runtimes': ['C#', '.NET 8', '.NET Core', 'ASP.NET Core', 'ASP.NET Core MVC', 'ASP.NET Core Web API', 'TypeScript', 'JavaScript (ES6+)', 'Python', 'SQL', 'T-SQL'],
  'Architecture & APIs': ['Microservices', 'Domain-Driven Design', 'Clean Architecture', 'SOLID', 'Dependency Injection', 'Repository Pattern', 'RESTful APIs', 'Async Programming', 'JWT', 'OAuth', 'Webhooks', 'Swagger / OpenAPI'],
  'Cloud & DevOps': ['Microsoft Azure', 'Azure DevOps', 'Azure OpenAI', 'Azure App Service', 'CI/CD Pipelines', 'Docker', 'Git', 'GitHub', 'Agile / Scrum'],
  'Data & Caching': ['SQL Server', 'PostgreSQL', 'MySQL', 'Entity Framework Core', 'Stored Procedures', 'Query Optimization', 'Indexing', 'Redis', 'Distributed Caching'],
  'AI / Intelligent Apps': ['LangChain', 'LangChain-Ollama', 'LLM Orchestration', 'Prompt Engineering', 'Azure OpenAI', 'Agentic Workflows', 'Document Parsing'],
  'Frontend': ['ReactJS', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'],
  'Quality & Tooling': ['Visual Studio', 'VS Code', 'Postman', 'JIRA', 'xUnit', 'Moq', 'New Relic', 'Code Review', 'Mentoring'],
};

export const education = {
  degree: 'Bachelor of Engineering, Computer Science',
  university: 'Sant Gadge Baba Amravati University',
  college: 'Sipna College of Engineering & Technology',
  graduationDate: 'June 2024',
  cgpa: '9.1 / 10.0',
};

export const certifications = [
  { name: 'ASP.NET Core', issuer: 'Udemy', date: 'Apr 2026', credentialId: 'UC-5b4d5455-1ccf-4847-af38-42f0c79c9509' },
  { name: 'Docker: Basics to Advanced', issuer: 'Udemy', date: 'Apr 2026', credentialId: 'UC-48b09027-8e6a-4492-9f34-73d7d135197f' },
  { name: 'AWS Academy Cloud Foundations', issuer: 'AWS Academy / Credly', date: 'Apr 2022', credentialId: null },
  { name: 'SQL: The Programming of Database', issuer: 'Udemy', date: null, credentialId: null },
  { name: 'Problem Solving', issuer: 'HackerRank', date: 'Jan 2023', credentialId: null },
  { name: 'Programming Essentials in Python', issuer: 'Cisco Networking Academy', date: 'Jan 2023', credentialId: null },
];

export const achievements = [
  { title: 'Smart India Hackathon 2023', description: 'Winner — full-stack e-commerce solution' },
  { title: 'LeetCode', description: '159 problems solved (81 Easy / 70 Medium / 8 Hard); 100 Days Badge 2026' },
  { title: 'Technical Workshop Coordinator', description: 'Organized API integration and modern tooling sessions' },
  { title: 'Color Coat in Wrestling', description: 'Athletic distinction' },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];
