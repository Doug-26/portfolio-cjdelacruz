export interface SkillGroup {
  name: string;
  items: string[];
  icon: string;
}

export interface ExperienceRole {
  title: string;
  bullets: string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  roles: ExperienceRole[];
}

export interface EducationEntry {
  school: string;
  degree: string;
  date: string;
}

export interface Certification {
  name: string;
  year: number;
}

export type ProjectAccent = 'violet' | 'pink' | 'orange' | 'blue' | 'red';

export interface Project {
  title: string;
  subtitle?: string;
  summary: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  accent: ProjectAccent;
  context: 'work' | 'personal';
  initial: string;
}

export interface Profile {
  name: string;
  initials: string;
  /** Portrait served from `public/`. The rail shows the initials until the file exists. */
  photo: string;
  title: string;
  /** Short stack label shown next to the title, e.g. "Angular & .NET". */
  focus: string;
  subtitle: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  githubHandle: string;
  resumeFile: string;
  resumeDownloadName: string;
  tagline: string;
  bio: string;
  yearsExperience: string;
  skillGroups: SkillGroup[];
  experience: ExperienceEntry[];
  education: EducationEntry[];
  certifications: Certification[];
  professionalDevelopment: string[];
  leadership: string;
  projects: Project[];
}

export const profile: Profile = {
  name: 'Christian Jay P. De La Cruz',
  initials: 'CJ',
  photo: 'profile.jpg',
  title: 'Software Engineer',
  focus: 'Angular & .NET',
  subtitle: 'Software Engineer · Angular & .NET',
  location: 'Naga City, Camarines Sur, Bicol',
  email: 'cjdelacruz267@gmail.com',
  phone: '09516909596',
  github: 'https://github.com/Doug-26',
  githubHandle: 'Doug-26',
  resumeFile: 'cv-De-La-Cruz.pdf',
  resumeDownloadName: 'Christian-Jay-De-La-Cruz-Resume.pdf',
  tagline:
    'I build full-stack web applications with Angular and .NET, and deliver and maintain live web and mobile apps.',
  bio: "Software engineer with 5 years of experience delivering, maintaining, and improving enterprise web and hybrid mobile applications. My front-end work is in Angular, TypeScript, JavaScript, HTML, and CSS, and I've built full-stack applications with C#, .NET Core (Web API), and SQL Server in personal projects. I've worked across the development lifecycle: root-cause analysis, change requests and bug fixes, validating fixes before release, and deploying updates through Azure DevOps CI/CD pipelines. I use AI-assisted tools like GitHub Copilot, Claude Code, and ChatGPT day to day. I'm looking to deepen my full-stack work in C# and .NET on a SaaS product.",
  yearsExperience: '5',
  skillGroups: [
    {
      name: 'Frontend',
      icon: 'layout',
      items: [
        'Angular (v15–v22)',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Responsive Design',
        'Bootstrap',
      ],
    },
    {
      name: 'Backend & Database',
      icon: 'server',
      items: ['C#', '.NET Core (Web API)', 'RESTful API Integration', 'SQL Server'],
    },
    {
      name: 'Mobile',
      icon: 'smartphone',
      items: ['Ionic (hybrid cross-platform mobile apps)'],
    },
    {
      name: 'CI/CD & Cloud',
      icon: 'cloud',
      items: [
        'Azure DevOps (Boards, Pipelines)',
        'Firebase (App Distribution, Cloud Messaging, CLI)',
        'AWS (S3, CloudWatch, DynamoDB)',
      ],
    },
    {
      name: 'Debugging & Support',
      icon: 'bug',
      items: ['Root-Cause Analysis', 'Angular Dev Tools', 'ServiceNow'],
    },
    {
      name: 'Tools & Version Control',
      icon: 'wrench',
      items: ['Git', 'Postman', 'VS Code', 'Visual Studio'],
    },
    {
      name: 'Low-Code Platforms',
      icon: 'blocks',
      items: ['Microsoft Power Apps', 'Power Automate'],
    },
    {
      name: 'AI Tools',
      icon: 'sparkles',
      items: ['GitHub Copilot', 'Claude Code', 'ChatGPT'],
    },
    {
      name: 'Methodologies',
      icon: 'users',
      items: ['Agile/Scrum', 'Technical Documentation'],
    },
  ],
  experience: [
    {
      company: 'Accenture',
      role: 'Custom Software Engineer Associate',
      start: 'Sep 2021',
      end: 'Sep 2026',
      location: 'Philippines',
      roles: [
        {
          title: 'Angular Developer / Application Support Engineer',
          bullets: [
            'Delivered change requests and bug fixes on live enterprise web and hybrid mobile applications (UI updates, component changes, API integration fixes) using Angular, TypeScript, HTML5, CSS3/SCSS, and Ionic.',
            'Built CI/CD workflows with Azure Pipelines and Firebase CLI to deploy updates and automate mobile build distribution, speeding up delivery to testers.',
            'Modernized the supported applications by upgrading Angular v15 to v20 and Ionic v4 to v8, improving maintainability and performance.',
            'Investigated and resolved support tickets for live enterprise web and hybrid mobile applications, reproducing issues, performing root-cause analysis, and validating fixes before production release.',
            'Optimized performance and ensured cross-browser and mobile compatibility through refactoring, lazy loading, and responsive layouts.',
            'Led a hybrid mobile app project, providing knowledge transfer, technical guidance, and training to teammates.',
            'Coordinated the resolution of a production outage caused by an expired SSL certificate, restoring access and setting up preventive monitoring.',
            'Managed tickets and defects in Azure DevOps Boards and ServiceNow, working with developers and QA to prioritize and resolve issues.',
            'Wrote technical documentation and troubleshooting guides for recurring issues, improving support efficiency.',
          ],
        },
        {
          title: 'Power Apps Developer',
          bullets: [
            'Designed and deployed business applications using Microsoft Power Apps, integrated with SharePoint/SQL Server, and automated workflows with Power Automate to streamline internal processes.',
            'Collaborated with stakeholders to gather requirements and translate them into low-code solutions, ensuring rapid delivery and adaptability to evolving business needs.',
          ],
        },
      ],
    },
  ],
  education: [
    {
      school: 'University of Nueva Caceres',
      degree: 'Bachelor of Science in Information Technology',
      date: 'June 2021',
    },
  ],
  certifications: [
    { name: 'AWS Cloud Quest: Generative AI Practitioner Training', year: 2026 },
    { name: 'AWS Cloud Practitioner', year: 2025 },
    { name: 'Full Stack Development: Angular & .NET', year: 2025 },
    { name: 'Scrum Foundation', year: 2022 },
  ],
  professionalDevelopment: [],
  leadership:
    'Worked with designers, QA engineers, product owners, and developers throughout the software development lifecycle.',
  projects: [
    // {
    //   title: 'Salary Calibration Tool',
    //   subtitle: 'Accenture · Power Platform',
    //   summary:
    //     'A Canvas app built on Microsoft Power Platform to manage candidate compensation evaluation and approval. Power Apps provides the UI for entering, reviewing, and updating salary data, connected to structured sources (SharePoint/Dataverse) for candidate info, compensation details, and approval statuses. Power Automate handles approval workflows — routing requests to the right approvers, sending notifications, and tracking decisions. The system enforces role-based access control, validates compensation against predefined rules, and maintains audit trails for transparency and compliance.',
    //   tags: ['Power Apps', 'Power Automate', 'Dataverse', 'SharePoint', 'Approval Workflows', 'RBAC'],
    //   accent: 'violet',
    //   context: 'work',
    //   initial: 'S',
    // },
    // {
    //   title: 'Always Safe App',
    //   subtitle: 'Accenture · Mobile Operations',
    //   summary:
    //     'Internal Accenture mobile app where I handled modernization, release support, and production readiness. Led framework upgrades across major Angular/Ionic/Capacitor versions, refactored deprecated patterns, and supported stage/prod testing — including push-notification behavior across iOS and Android — while keeping the app compliant through ongoing security-scan remediation.',
    //   tags: ['Angular', 'Ionic', 'Capacitor', 'iOS', 'Android', 'Mobile Ops'],
    //   accent: 'violet',
    //   context: 'work',
    //   initial: 'A',
    // },
    // {
    //   title: 'Mobile App Release & Deployment Automation',
    //   subtitle: 'Accenture · DevOps Enablement',
    //   summary:
    //     'Built and documented an internal deployment approach for distributing mobile builds through Azure Pipelines and Firebase App Distribution. Standardized pipeline steps and distribution checks — upload, verification, and tester workflow — to make releases repeatable for the Mobile Operations team.',
    //   tags: ['Azure Pipelines', 'Firebase App Distribution', 'DevOps', 'CI/CD'],
    //   accent: 'violet',
    //   context: 'work',
    //   initial: 'M',
    // },
    {
      title: 'EventSync',
      subtitle: 'Personal Project',
      summary:
        'A full-stack event management platform where organizers create events, generate shareable invite links, and collect RSVPs from guests — no sign-up required for invitees.',
      tags: ['Full-Stack', 'Events', 'RSVP', 'Shareable Links', 'Angular', '.NET', 'Auth0'],
      liveUrl: 'https://ashy-coast-07caf1200.7.azurestaticapps.net/',
      repoUrl: 'https://github.com/Doug-26/EventSync',
      accent: 'blue',
      context: 'personal',
      initial: 'ES',
    },
    {
      title: 'Exodus Home Office Website',
      subtitle: 'Business Website',
      summary:
        'A public website and portfolio for Exodus Home Office, a remote team offering social media management, video editing, and bookkeeping services. It includes a private Angular admin panel for managing projects, media, and inquiries, powered by Supabase with optional Resend email notifications.',
      tags: [
        'Angular',
        'TypeScript',
        'Bootstrap',
        'Supabase',
        'PostgreSQL',
        'Auth',
        'Edge Functions',
      ],
      liveUrl: 'https://exodushomeoffice.com',
      //repoUrl: 'https://github.com/Doug-26/exodus-office-website',
      accent: 'blue',
      context: 'personal',
      initial: 'EHO',
    },
    {
      title: 'Exodus Laundry',
      subtitle: 'Personal Project',
      summary:
        'A laundry service platform for Naga City: customers order, get notified when their laundry is ready, choose pickup or delivery, and track the rider live. Three front-ends share one Firebase backend — an Ionic/Capacitor mobile app for customers and riders, and a zoneless Angular web dashboard where shop staff run the daily queue and tap "Ready" to trigger the push notification.',
      tags: ['Ionic', 'Angular', 'Capacitor', 'Firebase', 'Cloud Functions', 'FCM', 'Monorepo'],
      liveUrl: 'https://exodus-laundry.firebaseapp.com/',
      repoUrl: 'https://github.com/Doug-26/exodus-laundry',
      accent: 'blue',
      context: 'personal',
      initial: 'EL',
    },
    {
      title: 'Pet Manager 2000',
      subtitle: 'Personal Project',
      summary:
        'A pet store queue management web app built with Angular and Tailwind CSS. Staff manage a kanban-style board to track pets through the queue, while a separate customer-facing display keeps owners informed in real time.',
      tags: ['Angular', 'Tailwind CSS', 'Kanban', 'Realtime'],
      liveUrl: 'https://doug-26.github.io/Pet-Manager-2000/',
      repoUrl: 'https://github.com/Doug-26/Pet-Manager-2000',
      accent: 'blue',
      context: 'personal',
      initial: 'P2',
    },
    {
      title: 'Klima',
      subtitle: 'Personal Project',
      summary:
        'A mobile-responsive Angular weather forecast app with a colorful sunset-themed UI. Search any city in the world to instantly see temperature, humidity, wind speed, pressure, and more.',
      tags: ['Angular', 'Weather API', 'Responsive', 'Vercel'],
      liveUrl: 'https://weather-forecast-app-sigma-nine.vercel.app/',
      repoUrl: 'https://github.com/Doug-26/weather-forecast-app',
      accent: 'blue',
      context: 'personal',
      initial: 'K',
    },
    // {
    //   title: 'TicketFlow',
    //   subtitle: 'Personal Project',
    //   summary:
    //     'A small internal support-ticket management app built end-to-end as a learning project. Employees raise tickets against a department, an admin or department head assigns them, and the assignee changes status as they work through it. Status changes are audited.',
    //   tags: ['Full-Stack', 'Ticket Management', 'Audit Trail', 'Angular', '.NET'],
    //   repoUrl: 'https://github.com/Doug-26/TicketFlow',
    //   accent: 'blue',
    //   context: 'personal',
    //   initial: 'TF',
    // },
    // {
    //   title: 'Enquiry Management App',
    //   subtitle: 'Personal Project',
    //   summary:
    //     'A full-stack business tool for capturing and tracking customer enquiries. Staff log enquiries with customer details and link them to a service catalogue, then monitor progress through status updates. Built with Angular 21 and ASP.NET Core 10 Web API, backed by SQL Server via Entity Framework Core.',
    //   tags: ['Full-Stack', 'Angular', '.NET', 'SQL Server', 'EF Core', 'Swagger'],
    //   repoUrl: 'https://github.com/Doug-26/enquiry-app',
    //   accent: 'blue',
    //   context: 'personal',
    //   initial: 'Q',
    // },
  ],
};
