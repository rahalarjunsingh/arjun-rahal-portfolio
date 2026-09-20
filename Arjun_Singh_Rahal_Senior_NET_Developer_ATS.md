# ARJUN SINGH RAHAL
**Senior .NET Developer | Backend Engineer (C#, ASP.NET Core Web API, Azure)**
Mumbai / Nagpur, Maharashtra, India | Open to Relocate (Bengaluru, Hyderabad, Pune, NCR)
+91-8378085788 | rahalarjunsingh@gmail.com
linkedin.com/in/arjunrahal | github.com/rahalarjunsingh | https://dev-arjun-rahal.vercel.app | leetcode.com/u/ArjunSinghRahal

## Professional Summary
Backend-focused .NET engineer with ~3 years building production e-commerce platforms (Artifi / Znode) in C#, ASP.NET Core MVC, and ASP.NET Core Web API. Designs modular microservices, RESTful integrations, and SQL-backed order/payment/shipping workflows; cut shipping-rate latency 40% and OMS API latency 25% through caching, stored-procedure tuning, and async I/O. Ships containerized services with Docker and Azure DevOps CI/CD, and differentiates with LLM/LangChain agents plus Azure OpenAI recommendation pipelines on top of the Microsoft stack.

## Core Competencies
**Languages & Runtimes:** C#, .NET 8, .NET Core, ASP.NET Core, ASP.NET Core MVC, ASP.NET Core Web API, TypeScript, JavaScript (ES6+), Python, SQL, T-SQL
**Architecture & APIs:** Microservices, Domain-Driven Design (DDD), Clean Architecture, SOLID, Dependency Injection, Repository Pattern, RESTful APIs, Asynchronous Programming (async/await, TPL), JWT, OAuth, Webhooks, Third-Party API Integration, Swagger / OpenAPI
**Cloud, DevOps & Containers:** Microsoft Azure, Azure DevOps, Azure OpenAI, Azure App Service (working knowledge), CI/CD Pipelines, Docker, Containerization, Git, GitHub, Agile / Scrum
**Data, Caching & Persistence:** Microsoft SQL Server, PostgreSQL, MySQL, Entity Framework Core, Stored Procedures, Query Optimization, Indexing, Redis, Distributed Caching
**AI / Intelligent Apps:** LangChain, LangChain-Ollama, LLM Orchestration, Prompt Engineering, Azure OpenAI, Agentic Workflows, Document Parsing (PDF)
**Frontend (supporting):** ReactJS, React, HTML5, CSS3, Bootstrap, Tailwind CSS
**Quality & Tooling:** Visual Studio, VS Code, Postman, JIRA, Code Review, Mentoring

## Professional Experience

**Amla Commerce (Creator of Artifi and Znode)** — Associate Software Engineer, Full Stack .NET Developer
Nagpur, India | January 2024 – Present

- Delivered a Zero-Dollar Authorization payment path in ASP.NET Core Web API integrated with Spreedly, reducing multi-gateway validation failures by standardizing tokenization and pre-auth checks across payment providers.
- Cut shipping-rate fetch latency **40%** by engineering a Shipping Manager microservice in C# / ASP.NET Core with multi-carrier APIs, USPS address validation, and in-memory / distributed caching of rate quotes.
- Improved Order Management System (OMS) API response time **25%** by refactoring ASP.NET Core endpoints and tuning SQL Server stored procedures, indexes, and query plans for high-volume order reads/writes.
- Raised tax-calculation accuracy and compliance by rebuilding the Tax Manager service around AvaTax API integration, isolating tax rules behind a dedicated service boundary instead of embedded checkout logic.
- Reduced payment and address-related checkout failures by integrating Spreedly multi-gateway payments and USPS validation into existing ASP.NET Core MVC / Web API order flows.
- Increased admin-console component reuse and UI responsiveness by shipping ReactJS modules against the same REST contracts used by checkout and operations teams.
- Increased team delivery velocity **15%** by mentoring 2 junior developers on Web API design, debugging, and code review inside Agile sprints.

## Technical Projects

**ShopScale — E-Commerce Microservices Platform (In Development)**
*.NET 8, ASP.NET Core Web API, C#, React, TypeScript, PostgreSQL, Redis, Docker, DDD*

- Designed a modular catalog, cart, auth, and order backend using microservices boundaries and Domain-Driven Design so services can scale and deploy independently.
- Reduced simulated peak catalog database load **30–40%** by adding Redis distributed caching, pagination, and filtered product queries in front of PostgreSQL.
- Implemented high-throughput order workflows with async ASP.NET Core APIs to keep checkout paths responsive under concurrent transactions.
- Containerized services with Docker to standardize local-to-pipeline environments and prepare CI/CD promotion of independently versioned APIs.

**E-Commerce Payment Integration Platform**
*ASP.NET Core Web API, ReactJS, SQL Server, Docker, Azure DevOps CI/CD*

- Built a tokenized payment platform in ASP.NET Core and ReactJS that processes gateway transactions without persisting raw card data.
- Increased reconciliation reliability by implementing REST order/payment APIs plus webhook callbacks for real-time payment-status updates.
- Automated build, test, and deployment by containerizing the stack with Docker and wiring Azure DevOps CI/CD pipelines.

**AI Job Hunter — LangChain Agent for JD Matching**
*Python, LangChain, LangChain-Ollama, Llama 3, PDF parsing, REST / automation APIs*
GitHub: https://github.com/rahalarjunsingh/AI-Job-Hunter

- Automated resume-to-job matching by orchestrating a LangChain + Ollama pipeline that parses PDF resumes, scores JDs, and generates role-specific cover letters above a configurable match threshold.
- Cut manual screening time by chaining scrape → skill match → experience filter → artifact generation instead of ad-hoc LLM prompts.
- Structured agent tools around document ingestion and retrieval-style matching so only jobs meeting skill and experience gates proceed.

**AI Stock Analyzer — Agentic Inventory Insights**
*Python FastAPI, Azure OpenAI, React, TypeScript, Tailwind CSS*
GitHub: https://github.com/rahalarjunsingh/AI_STOCK

- Built a Single Source of Truth (SSOT) FastAPI data pipeline that analyzes inventory turnover and flags slow-moving stock for revenue-leakage review.
- Generated actionable replenishment recommendations by integrating Azure OpenAI into the analytics API rather than static rule dashboards.
- Delivered a React / TypeScript dashboard so planners can inspect AI-ranked SKUs and supporting metrics in one view.

## Education & Certifications

**Bachelor of Engineering, Computer Science** — Sant Gadge Baba Amravati University (Sipna College of Engineering & Technology)
June 2024 | CGPA 9.1 / 10.0

**Certifications**
- ASP.NET Core — Udemy (Issued Apr 2026) | Credential UC-5b4d5455-1ccf-4847-af38-42f0c79c9509
- Docker: Basics to Advanced — Udemy (Issued Apr 2026) | Credential UC-48b09027-8e6a-4492-9f34-73d7d135197f
- AWS Academy Cloud Foundations — AWS Academy / Credly (Issued Apr 2022)
- SQL: The Programming of Database — Udemy
- Problem Solving — HackerRank (Issued Jan 2023)
- Programming Essentials in Python — Cisco Networking Academy (Issued Jan 2023)

**Selected Distinctions**
- Smart India Hackathon 2023 — Winner (full-stack e-commerce solution)
- LeetCode: 159 problems (81 Easy / 70 Medium / 8 Hard); C++ and MySQL; 100 Days Badge 2026
- Technical Workshop Coordinator — API integration and modern tooling sessions
