// app/projects/projectsData.ts

export interface Project {
  id: string | number;
  title: string;
  description: string;
  imageUrl?: string;
  imagePlaceholder?: string;
  techStack: string[];
  liveLink?: string;
  sourceLink?: string;
}

export interface DetailedProject extends Project {
  coverImageLarge?: string;
  detailedSaga: string;
  challenge?: string;
  solution?: string;
  results?: string[];
}

export const allMyProjects: DetailedProject[] = [
  {
    id: "techne-indonesia-platform",
    title: "Techne Indonesia Learning Platform",
    description: "Platform pembelajaran pemrograman interaktif dengan berbagai metode belajar.",
    detailedSaga: "Techne Indonesia adalah sebuah visi untuk demokratisasi pendidikan teknologi di Indonesia. Dibangun dengan semangat kolaborasi, platform ini menghadapi tantangan dalam menyajikan materi yang kompleks menjadi mudah dicerna. Kami menggunakan arsitektur modular dengan Node.js di backend untuk skalabilitas, dan Tailwind CSS untuk UI yang responsif dan cepat dikembangkan. PostgreSQL dipilih karena robust dan kemampuannya menangani relasi data yang kompleks untuk fitur kuis, bootcamp, dan tracking progres pengguna.",
    imageUrl: "/project/techne.png",
    imagePlaceholder: "Techne Indonesia Platform",
    coverImageLarge: "/project/techne.png",
    techStack: ["Node.js", "Next.js", "Tailwind CSS", "PostgreSQL", "TypeScript", "React"],
    liveLink: "https://techne.id",
    sourceLink: undefined,
  },
  {
    id: "alchecode-2025",
    title: "Alchecode.com (Upcoming)",
    description: "Proyek platform inovatif untuk developer, fokus pengembangan di tahun 2025.",
    detailedSaga: "Alchecode.com adalah proyek ambisius yang saat ini menjadi fokus utama pengembangan untuk tahun 2025. Bertujuan untuk menjadi platform inovatif yang menyediakan [sebutkan tujuan utama Alchecode, misal: alat, komunitas, sumber daya] bagi para software developer. Tantangan utamanya adalah membangun arsitektur yang scalable dan fitur-fitur yang benar-benar menjawab kebutuhan developer modern. Detail lebih lanjut akan diumumkan seiring dengan progres pengembangan.",
    imageUrl: "/project/alchecode.png",
    imagePlaceholder: "Alchecode.com Concept",
    coverImageLarge: "/project/alchecode.png",
    techStack: ["React", "Next.js", "TypeScript", "Node.js", "Supabase/PostgreSQL", "Tailwind CSS"],
    liveLink: "https://alchecode.com",
    sourceLink: undefined,
  },
  {
    id: "fansfirst-tickets",
    title: "Fansfirst Tickets",
    description: "A no-fee secondary ticket marketplace for Canadian sporting events, ensuring transparency.",
    imageUrl: "/project/fansfirst.png",
    imagePlaceholder: "Fansfirst Tickets Logo/Screenshot",
    coverImageLarge: "/project/fansfirst.png",
    techStack: ["Python", "React", "DynamoDB", "Flask/Django", "AWS"],
    liveLink: undefined,
    sourceLink: undefined,
    detailedSaga: `Fansfirst set out to revolutionize the secondary ticket market for Canadian sporting events by creating a transparent, no-fee platform for both buyers and sellers. The primary challenge was overcoming the prevalent high fees and lack of trust in existing marketplaces, necessitating a secure and reliable transaction system. 
      We engineered a robust solution featuring a Python backend (likely Flask or Django) and a dynamic React frontend, all supported by AWS DynamoDB for scalable data storage. Key to its success was the integration of a secure payment gateway and robust user verification processes. 
      This approach aimed to foster a trustworthy environment, leading to a significant number of processed transactions and a growing base of registered users who appreciated the fair and open model.`,
    challenge: "High fees in existing marketplaces, lack of trust, need for secure transactions.", // Bisa dipertahankan atau dihilangkan jika sudah di saga
    solution: "Developed a secure platform using Python backend, React frontend, integrated secure payment gateway, built user verification.",
    results: ["Processed a significant volume of transactions", "Gained a substantial number of registered users"],
  },
  {
    id: "psa-pca",
    title: "PSA PCA (Project Submission & Risk Examination)",
    description: "Internal app for project submissions, procurement, and risk examination.",
    imageUrl: "/project/psapca.png",
    imagePlaceholder: "PSA PCA Application Screenshot",
    coverImageLarge: "/project/psapca.png",
    techStack: ["Laravel", "PHP", "Bootstrap", "PostgreSQL", "jQuery/Vue.js"],
    liveLink: undefined,
    sourceLink: undefined,
    detailedSaga: `The PSA PCA application was developed as a comprehensive internal tool to streamline the entire project lifecycle management, from initial proposal submissions and procurement tracking to in-depth risk assessment for upcoming projects. 
      The core challenge lay in replacing inefficient manual processes and consolidating data from disparate sources, which made it difficult to track project progress and identify potential risks effectively.
      Our solution was a web application built with Laravel, featuring distinct modules for each phase: submission, procurement, and risk analysis, complemented by role-based access control. This system significantly reduced project processing times and dramatically improved data accuracy and reporting capabilities for the organization.`,
    challenge: "Inefficient manual processes, lack of centralized data, difficulty tracking project progress and risks.",
    solution: "Built a web application using Laravel with distinct modules for submission, procurement, and risk analysis, role-based access control.",
    results: ["Reduced project processing time significantly", "Improved data accuracy and reporting capabilities"],
  },
  {
    id: "ooh-management-system",
    title: "OOH Management System",
    description: "System for managing billboards, client ad checking, and performance statistics across Indonesia.",
    imageUrl: "/project/dashboardooh.png",
    imagePlaceholder: "OOH Management Dashboard",
    coverImageLarge: "/project/dashboardooh.png",
    techStack: ["Python", "JavaScript", "PostgreSQL", "Flask/Django", "React/Vue.js", "Mapping Libraries"],
    liveLink: undefined,
    sourceLink: undefined,
    detailedSaga: `This Out-Of-Home (OOH) advertising management platform was designed to empower clients by enabling them to monitor their billboard campaigns, view precise ad placements, and access comprehensive performance statistics for ads spread throughout Indonesia. 
      The project tackled the common industry challenges of tracking ad performance accurately, managing a diverse and geographically spread inventory, and automating a previously manual reporting process.
      The solution involved developing a sophisticated platform with a dedicated client portal, an admin panel for robust inventory management, and advanced data visualization for statistics, potentially incorporating mapping features (e.g., Leaflet/Mapbox). This resulted in the centralized management of a large number of billboards and provided clients with invaluable real-time performance data.`,
    challenge: "Difficulty tracking ad performance, lack of centralized inventory, manual reporting.",
    solution: "Developed a platform with a client portal, admin panel for inventory management, data visualization for statistics, potential mapping features.",
    results: ["Centralized management of numerous billboards", "Provided clients with real-time performance data"],
  },
  {
    id: "enterprise-resource-planning",
    title: "Custom Enterprise Resource Planning (ERP)",
    description: "Integrated management of main business processes for an enterprise.",
    imageUrl: "/project/erp.png",
    imagePlaceholder: "ERP System Interface",
    coverImageLarge: "/project/erp.png",
    techStack: ["CodeIgniter", "PHP", "Bootstrap", "PostgreSQL", "jQuery"], // Sesuaikan DB jika perlu
    liveLink: undefined,
    sourceLink: undefined,
    detailedSaga: `This custom Enterprise Resource Planning (ERP) system was engineered to integrate and streamline core business functions, including modules for finance, HR, inventory, and CRM, tailored to the client's specific operational needs.
      The primary challenge was to unify disparate existing systems, improve data visibility across departments, and automate key business processes that were previously manual and prone to inefficiencies.
      A modular ERP was constructed using CodeIgniter and PHP, with Bootstrap for the frontend. We designed specific workflows for each business unit and implemented comprehensive reporting features. The system successfully integrated multiple departments, leading to marked improvements in operational efficiency and data-driven decision-making.`,
    challenge: "Disparate systems, lack of data visibility, need for process automation.",
    solution: "Built a modular ERP using CodeIgniter, designed specific workflows, implemented reporting features.",
    results: ["Successfully integrated multiple company departments", "Improved overall operational efficiency"],
  },
  {
    id: "recruitment-system",
    title: "Online Recruitment Test System",
    description: "Web application to simplify candidate screening with online assessment tests.",
    imageUrl: "/project/hrd.png",
    imagePlaceholder: "Recruitment System Interface",
    coverImageLarge: "/project/hrd.png",
    techStack: ["Laravel", "PHP", "Tailwind CSS", "MySQL", "Vue.js/React"],
    liveLink: undefined,
    sourceLink: undefined,
    detailedSaga: `An online recruitment test application was developed to significantly simplify and enhance the candidate screening phase of the hiring process. The system provides online assessment tests and features automated scoring to improve efficiency.
      This addressed the challenges of time-consuming manual screening procedures and the logistical difficulties often associated with conducting in-person tests for a large pool of applicants.
      The platform, built with Laravel and Tailwind CSS, allows HR personnel to easily create and manage tests, oversee candidates, and benefit from automated test delivery and scoring. An admin dashboard provides comprehensive oversight. This has led to a reduction in screening time per candidate and has enabled a wider candidate reach.`,
    challenge: "Time-consuming manual screening, logistical difficulties with in-person tests.",
    solution: "Created a platform for creating tests, managing candidates, automated test delivery and scoring, admin dashboard.",
    results: ["Reduced screening time per candidate significantly", "Widened candidate reach for recruitment"],
  },
  {
    id: "mcm-multi-chip-murah",
    title: "MCM (Multi Chip Murah) - WordPress Site",
    description: "Simple WordPress informational website for credit and bill server companies.",
    imageUrl: "/project/mcm.png",
    imagePlaceholder: "MCM Website Screenshot",
    coverImageLarge: "/project/mcm.png",
    techStack: ["WordPress", "Elementor", "PHP", "CSS"],
    liveLink: undefined, // Isi jika ada
    sourceLink: undefined,
    detailedSaga: `MCM (Multi Chip Murah) required a straightforward yet professional online presence for their credit (pulsa) and bill payment server solutions. A simple informational website was created using the WordPress platform and the Elementor page builder.
      The main challenge was to clearly present their services to potential B2B clients and establish a credible online footprint with an easy-to-navigate interface.
      The solution was a responsive WordPress site, designed and developed with Elementor, focusing on clear service descriptions, company information, and prominent contact details. This successfully established a professional online presence and aimed to generate leads through its contact channels.`,
    challenge: "Need for a simple online presence, showcasing services clearly.",
    solution: "Designed and developed a responsive WordPress site using Elementor, focused on clear service presentation and contact information.",
    results: ["Established a professional online presence for the company", "Aimed to generate leads via contact form"],
  },
  {
    id: "playy-world",
    title: "Playy World - TCG Marketplace",
    description: "B2C online community for trading card game players to buy and sell cards globally.",
    imageUrl: "/project/playy.png",
    imagePlaceholder: "Playy World Platform",
    coverImageLarge: "/project/playy.png",
    techStack: ["CodeIgniter", "PHP", "Bootstrap", "MySQL", "jQuery", "Payment Integration"],
    liveLink: undefined,
    sourceLink: undefined,
    detailedSaga: `Playy.World was envisioned as a B2C online marketplace and community platform where trading card game enthusiasts from around the globe could securely buy, sell, and interact with each other.
      Key challenges included establishing a secure transaction system for peer-to-peer trading, building trust within the community, and managing user inventories and listings effectively.
      The platform was developed using CodeIgniter (PHP) and Bootstrap. It featured user profiles, robust card listing capabilities, a secure escrow or direct payment integration system, and community features like messaging or forums. The goal was to facilitate a high volume of trades and cultivate a thriving community of engaged users.`,
    challenge: "Need for a secure transaction system, building trust in P2P trading, managing user inventory.",
    solution: "Developed the platform using CodeIgniter, implemented user profiles, card listing features, secure escrow/payment system, messaging/forum features.",
    results: ["Facilitated a large number of secure trades", "Built a significant community of TCG users"],
  },
  {
    id: "ptn-erp",
    title: "PTN Airport Ground Handling ERP",
    description: "MIS application managing ground handling company data, assets, and employees at Indonesian airports.",
    imageUrl: "/project/ptn.png",
    imagePlaceholder: "PTN ERP System Screenshot",
    coverImageLarge: "/project/ptn.png",
    techStack: ["CodeIgniter", "PHP", "Bootstrap", "PostgreSQL", "jQuery"],
    liveLink: undefined,
    sourceLink: undefined,
    detailedSaga: `This specialized Management Information System (MIS), referred to as PTN ERP, was designed for an airport ground handling company to meticulously manage company data, track valuable assets, and oversee employee operations across multiple airports throughout Indonesia.
      The project addressed the complexities of managing distributed assets and personnel, handling complex operational data streams, and the critical need for centralized reporting and oversight.
      A custom MIS was built using CodeIgniter (PHP) and PostgreSQL, featuring tailored modules for asset tracking, employee scheduling, operational reporting, and potentially geo-location features for real-time visibility. This led to improved asset visibility and streamlined employee management across all operational locations.`,
    challenge: "Managing distributed assets/personnel, complex operational data, need for centralized reporting.",
    solution: "Built a custom MIS using CodeIgniter, tailored modules for asset tracking, employee scheduling, operational reporting, potentially geo-location features.",
    results: ["Improved asset visibility and tracking", "Streamlined employee management across diverse locations"],
  },
  {
    id: "hospital-information-system",
    title: "Hospital Information System (HIS)",
    description: "Comprehensive HIS to manage patient records, coordinate care, scheduling, and billing.",
    imageUrl: "/project/simrs.png",
    imagePlaceholder: "Hospital Information System Interface",
    coverImageLarge: "/project/simrs.png",
    techStack: ["CodeIgniter", "PHP", "Bootstrap", "MySQL", "jQuery", "Security Practices"],
    liveLink: undefined,
    sourceLink: undefined,
    detailedSaga: `A comprehensive Hospital Information System (HIS) was developed to augment healthcare professionals' ability to coordinate care by efficiently managing patients and all related healthcare data.
      The system was designed to tackle challenges such as managing sensitive patient data securely, coordinating complex inter-departmental workflows, ensuring regulatory compliance (e.g., HIPAA or local equivalents), and streamlining administrative tasks.
      The solution was a modular HIS built with CodeIgniter (PHP) and MySQL, incorporating secure data handling protocols and role-based access controls. It featured modules for patient registration, Electronic Medical Records (EMR), billing, scheduling, and other essential hospital functions. This resulted in improved accessibility of patient records and more streamlined administrative processes within the hospital.`,
    challenge: "Managing sensitive patient data securely, coordinating complex workflows, need for regulatory compliance.",
    solution: "Developed a modular HIS using CodeIgniter, implemented secure data handling, role-based access, modules for patient registration, EMR, billing, etc.",
    results: ["Improved patient record accessibility and management", "Streamlined hospital administrative processes"],
  },
  {
    id: "x-fire-check",
    title: "X-Fire Check (Epson)",
    description: "Application to record data on fire extinguishing equipment at Epson warehouses in Indonesia.",
    imageUrl: "/project/xfirecek.png",
    imagePlaceholder: "X-Fire Check Application",
    coverImageLarge: "/project/xfirecek.png",
    techStack: ["CodeIgniter", "PHP", "Bootstrap", "MySQL", "jQuery/Mobile Framework"],
    liveLink: undefined,
    sourceLink: undefined,
    detailedSaga: `X-Fire Check is a specialized application developed for Epson Indonesia to log, track, and manage the status and maintenance records of fire extinguishing equipment across their warehouse facilities.
      The system addressed the critical need for ensuring regulatory compliance for safety equipment, overcoming manual tracking difficulties, and implementing proactive maintenance scheduling with alerts.
      A web and potentially mobile-compatible application was built using CodeIgniter, enabling easy data entry, comprehensive reporting on equipment status, and features for scheduling maintenance. QR code integration might have been part of the solution for quick equipment identification. This led to improved compliance tracking and more timely maintenance scheduling.`,
    challenge: "Ensuring regulatory compliance for safety equipment, manual tracking difficulties, need for maintenance scheduling/alerts.",
    solution: "Built a web/mobile application for data entry, reporting on equipment status, maintenance scheduling features, potential QR code integration.",
    results: ["Improved compliance tracking for fire safety equipment", "Enabled timely maintenance scheduling and alerts"],
  },
  {
    id: "first-company-profile",
    title: "First Company Profile Website",
    description: "My foundational project as a programmer, building a simple company profile website.",
    imageUrl: "/project/compro.png",
    imagePlaceholder: "Early Company Profile Design",
    coverImageLarge: "/project/compro.png",
    techStack: ["CodeIgniter", "PHP", "Bootstrap", "HTML", "CSS", "MySQL"],
    liveLink: undefined,
    sourceLink: undefined,
    detailedSaga: `This project marked my initial foray as a professional programmer within a company setting, involving the creation of a basic company profile website. 
      The primary challenge was to apply and solidify web development fundamentals while delivering a professional online presence for the company, likely with limited initial resources or complex requirements.
      The solution involved utilizing CodeIgniter and Bootstrap to construct a static or semi-dynamic informational website. It focused on clearly presenting information about the company, its services, and contact details. This project was instrumental in successfully launching the company's first website and helped in acquiring foundational web development skills that paved the way for more complex endeavors.`,
    challenge: "Learning web development fundamentals, creating a professional online presence with limited resources.",
    solution: "Utilized CodeIgniter and Bootstrap to build a static or semi-dynamic informational website.",
    results: ["Successfully launched the first company website", "Acquired and solidified foundational web development skills"],
  },
];
