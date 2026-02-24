import React from 'react';
import { NavLink, TechIcon, Service, Experience, Technology, Project, Testimonial } from './types';
import { Monitor, Smartphone, Server, PenTool, Database, Blocks, Youtube, FileCode, Box } from 'lucide-react';

export const navLinks: NavLink[] = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "experience",
    title: "Expériences",
  },
  {
    id: "projects",
    title: "Projets",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services: Service[] = [
  {
    title: "Développeur Web",
    icon: <Monitor size={48} strokeWidth={1.5} className="text-white" />,
  },
  {
    title: "Développeur React Native",
    icon: <Smartphone size={48} strokeWidth={1.5} className="text-white" />,
  },
  {
    title: "Développeur Backend",
    icon: <Server size={48} strokeWidth={1.5} className="text-white" />,
  },
  {
    title: "Développeur Blockchain",
    icon: <Blocks size={48} strokeWidth={1.5} className="text-white" />,
  },
  {
    title: "Formateur YouTube",
    icon: <Youtube size={48} strokeWidth={1.5} className="text-white" />,
  },
];

// --- Brand Logos (SVGs) ---

export const ReactLogo = () => (
  <svg viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#61DAFB]">
    <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="10" ry="4.5"></ellipse>
      <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
      <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
    </g>
  </svg>
);

export const FirebaseLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M4.6 15.6L3.1 4.5C3.05 4.15 3.45 3.9 3.75 4.1L20.8 15.6" fill="#FFC107"/>
    <path d="M11.6 8.35L6.7 15.6L3.75 4.1C3.65 3.8 3.3 3.8 3.2 4.05L4.6 15.6" fill="#FFA000"/>
    <path d="M18.95 9.1L12.55 19.55L4.6 15.6L18.95 9.1Z" fill="#FFCA28"/>
    <path d="M18.95 9.1C19.15 8.9 19.45 9.05 19.4 9.35L17.3 22.1L12.55 19.55L18.95 9.1Z" fill="#FFA000"/>
  </svg>
);

export const NextLogo = () => (
  <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
     <mask id="mask0_408_134" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
      <circle cx="90" cy="90" r="90" fill="black"/>
    </mask>
    <g mask="url(#mask0_408_134)">
      <circle cx="90" cy="90" r="90" fill="white"/>
      <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="black"/>
      <rect x="115" y="54" width="12" height="72" fill="black"/>
    </g>
  </svg>
);

const HtmlLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M1.5 0h21l-1.91 21.563L12 24 1.41 21.563 1.5 0z" fill="#E34F26"/>
    <path d="M12 22.435l8.61-2.083 1.575-17.727h-10.185v19.81z" fill="#EF652A"/>
    <path d="M12 10.606v-3.48H7.99l.26 3.48h3.75zm0 6.677v-3.447l-3.376-.906-.217-2.324h-3.48l.42 5.56L12 17.283z" fill="#fff"/>
  </svg>
);

const CssLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M1.5 0h21l-1.91 21.563L12 24 1.41 21.563 1.5 0z" fill="#1572B6"/>
    <path d="M12 22.435l8.61-2.083 1.575-17.727h-10.185v19.81z" fill="#33A9DC"/>
    <path d="M12 10.606v-3.48H7.99l.26 3.48h3.75zm0 6.677v-3.447l-3.376-.906-.217-2.324h-3.48l.42 5.56L12 17.283z" fill="#fff"/>
  </svg>
);

const JsLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M0 0h24v24H0V0z" fill="#F7DF1E"/>
    <path d="M6.75 16.5c0 1.5 1.5 2.25 3 2.25s3-.75 3-2.25V9h2.25v7.5c0 2.25-2.25 4.5-5.25 4.5s-5.25-2.25-5.25-4.5H6.75zM17.25 16.5c0 1.5 1.5 2.25 3 2.25.75 0 1.5-.375 1.5-.75v2.25c-.75.375-1.5.75-3 .75-2.25 0-4.5-1.5-4.5-4.5v-7.5h2.25v7.5h.75z" fill="#000"/>
  </svg>
);

const TsLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M0 0h24v24H0z" fill="#3178C6"/>
    <path d="M11.5 6.5v2.5h-3v10h-2.5v-10h-3v-2.5h8.5zm8.5 8.5c0 1.8-1.2 2.5-3 2.5-1.5 0-2.8-.8-2.8-.8l.5-2.2s1 .8 2.2.8c.8 0 1-.5 1-1 0-2-3.8-1.8-3.8-4.5 0-1.8 1.5-2.5 3-2.5 1.5 0 2.5.8 2.5.8l-.5 2s-.8-.5-2-.5c-.5 0-.8.5-.8 1 0 1.8 3.8 1.5 3.8 4.5z" fill="#fff"/>
  </svg>
);

const ReduxLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 11a1 1 0 100 2 1 1 0 000-2zm4 4a1 1 0 100 2 1 1 0 000-2zm-8 0a1 1 0 100 2 1 1 0 000-2z" fill="#764ABC"/>
    <circle cx="12" cy="12" r="8" stroke="#fff" strokeWidth="2" strokeOpacity="0.5"/>
  </svg>
);

const TailwindLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M6 12c-2.5 0-4-1.5-4-4s1.5-4 4-4 4 2 6 5c-2.5 0-4 1.5-4 4s1.5 4 4 4 4-2.5 6-5" stroke="#38B2AC" strokeWidth="2"/>
    <path d="M14 12c-2.5 0-4-1.5-4-4s1.5-4 4-4 4 2 6 5c-2.5 0-4 1.5-4 4s1.5 4 4 4 4-2.5 6-5" stroke="#38B2AC" strokeWidth="2" transform="translate(4 4)"/>
  </svg>
);

const NodeLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M12 0L2 5v14l10 5 10-5V5L12 0z" fill="#339933"/>
    <path d="M12 22l-9-4.5v-11l9-4.5 9 4.5v11L12 22z" fill="#fff" opacity="0.1"/>
  </svg>
);

const MongoLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M12 0C12 0 6 10 6 15c0 4 3 7 6 7s6-3 6-7c0-5-6-15-6-15z" fill="#47A248"/>
    <path d="M12 22c-2 0-2-10-2-10s0 10 2 10z" fill="#3FA037"/>
  </svg>
);

const GitLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M22 12l-10 10-10-10L12 2 22 12z" fill="#F05032"/>
    <path d="M12 6v12m-4-4h8" stroke="#fff" strokeWidth="2"/>
  </svg>
);

const AngularLogo = () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" className="w-full h-full p-1" alt="Angular" />;
const NestjsLogo = () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" className="w-full h-full p-1" alt="NestJS" />;
const PhpLogo = () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" className="w-full h-full p-1" alt="PHP" />;
const SolidityLogo = () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg" className="w-full h-full p-1" alt="Solidity" />;
const PostgreSQLLogo = () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" className="w-full h-full p-1" alt="PostgreSQL" />;

// --- Exports ---

export const techIcons: TechIcon[] = [
  {
    name: "Firebase",
    icon: <FirebaseLogo />,
    color: "bg-yellow-500/10",
  },
  {
    name: "React",
    icon: <ReactLogo />,
    color: "bg-blue-500/10",
  },
  {
    name: "Next.js",
    icon: <NextLogo />,
    color: "bg-white/10",
  },
];

export const experiences: Experience[] = [
  {
    title: "Développeur Full stack",
    company_name: "GNA-CI (Assurance Digitale)",
    icon: <Server size="60%" className="text-red-500" />,
    iconBg: "#383E56",
    date: "2020 - 2025",
    points: [
      "Conception et développement d’API robustes et sécurisées avec NestJS.",
      "Développement d’interfaces dynamiques et ergonomiques avec Angular.",
      "Intégration des services front-end et back-end au sein d’architectures modulaires.",
      "Mise en place et documentation d’API REST pour la communication interservices.",
      "Maintenance évolutive et corrective des applications existantes."
    ],
  },
  {
    title: "Chargé de Développement et d'exploitation",
    company_name: "GNA-CI",
    icon: <Monitor size="60%" className="text-blue-400" />,
    iconBg: "#E6DEDD",
    date: "2020 - 2025",
    points: [
      "Surveillance de la fiabilité et de la qualité du système informatique.",
      "Réalisation des applications de cotation MRH, MRP, IA, NOUFALA.",
      "Vérification de la sécurité des données et gestion des plans de secours.",
      "Coordination de la réalisation des traitements informatiques."
    ],
  },
  {
    title: "Formation Programmation Informatique",
    company_name: "NaN",
    icon: <FileCode size="60%" className="text-indigo-400" />,
    iconBg: "#383E56",
    date: "2019 - 2020",
    points: [
      "Programmation orientée objet: JavaScript, PHP, TypeScript.",
      "Manipulation des bases de données MySQL et SQL server.",
      "Programmation Algorithmique.",
      "Utilisation des environnements Linux et Windows."
    ],
  },
  {
    title: "Développement Blockchain & Smart Contracts",
    company_name: "Université Virtuelle de Côte d'Ivoire",
    icon: <Blocks size="60%" className="text-purple-500" />,
    iconBg: "#E6DEDD",
    date: "2022 - 2023",
    points: [
      "Étude et développement de Smart Contracts sécurisés avec Solidity.",
      "Déploiement sur Ethereum et réseaux compatibles EVM.",
      "Intégration Web3 avec des applications front-end (dApps).",
      "Obtention du Master 2 en Blockchain."
    ],
  },
  {
    title: "Formateur et Créateur de contenu",
    company_name: "École du programmeur (YouTube)",
    icon: <Youtube size="60%" className="text-red-500" />,
    iconBg: "#383E56",
    date: "Présent",
    points: [
      "Création de tutoriels vidéo éducatifs sur la programmation.",
      "Partage de connaissances sur React, Node.js, et l'écosystème web.",
      "Mentorat et accompagnement de la communauté de développeurs.",
      "Veille technologique et vulgarisation de concepts complexes."
    ],
  },
];

export const technologies: Technology[] = [
  { name: "JavaScript", icon: <JsLogo /> },
  { name: "TypeScript", icon: <TsLogo /> },
  { name: "React JS", icon: <ReactLogo /> },
  { name: "Next JS", icon: <NextLogo /> },
  { name: "React Native", icon: <ReactLogo /> },
  { name: "Angular", icon: <AngularLogo /> },
  { name: "NestJS", icon: <NestjsLogo /> },
  { name: "PHP", icon: <PhpLogo /> },
  { name: "Solidity", icon: <SolidityLogo /> },
  { name: "Tailwind CSS", icon: <TailwindLogo /> },
  { name: "PostgreSQL", icon: <PostgreSQLLogo /> },
  { name: "Node JS", icon: <NodeLogo /> },
  { name: "Git", icon: <GitLogo /> },
];

export const projects: Project[] = [
  {
    name: "ABMI engineering",
    description:
      "Refonte du site d'ABMI Engineering, comprenant un grand nombre de pages en anglais et en français. Un système de design a été créé en se basant sur le site existant, puis migré vers Next.js et TypeScript.",
    tags: [
      {
        name: "nextjs",
        color: "text-blue-500",
      },
      {
        name: "firebase",
        color: "text-green-500",
      },
      {
        name: "tailwind",
        color: "text-pink-500",
      },
    ],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2944&auto=format&fit=crop", // Blog/Tech placeholder
    source_code_link: "https://github.com/",
  },
  {
    name: "Tomhe Torah",
    description:
      "Tomhe Torah est une plateforme de dons robuste développée avec Next.js, TypeScript et Firebase. Cette plateforme intègre des paiements Stripe pour assurer la sécurité des transactions et gère les reçus CERFA.",
    tags: [
      {
        name: "nextjs",
        color: "text-blue-500",
      },
      {
        name: "firebase",
        color: "text-green-500",
      },
      {
        name: "stripe",
        color: "text-pink-500",
      },
       {
        name: "node",
        color: "text-orange-500",
      },
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2940&auto=format&fit=crop", // Payment/Donation placeholder
    source_code_link: "https://github.com/",
  },
  {
    name: "MEEM",
    description:
      "Meem est une plateforme de messagerie en temps réel innovante, élaborée avec JavaScript, Bootstrap, Firebase et WebSockets. Clone de WhatsApp, elle permet des échanges instantanés et sécurisés.",
    tags: [
      {
        name: "react",
        color: "text-blue-500",
      },
      {
        name: "firebase",
        color: "text-green-500",
      },
      {
        name: "bootstrap",
        color: "text-pink-500",
      },
       {
        name: "socket.io",
        color: "text-orange-500",
      },
    ],
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2940&auto=format&fit=crop", // Messaging/Chat placeholder
    source_code_link: "https://github.com/",
  },
];

export const testimonials: Testimonial[] = [
  {
    testimonial:
      "Je tiens à exprimer ma grande satisfaction concernant le travail réalisé par Emmanuel lors de la refactorisation complète de notre projet Gatsby.js...",
    name: "Arnaud desportes",
    designation: "CEO",
    company: "Remote Monkey",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Je tiens à recommander chaleureusement Emmanuel, un développeur exceptionnel avec qui j'ai eu le plaisir de collaborer. Emmanuel possède une...",
    name: "J.C Meilland",
    designation: "CEO",
    company: "FRENCH4 DEV",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    testimonial:
      "Emmanuel a conçu une application pour notre entreprise qui englobe divers domaines de compétences, incluant le développement, le design, les bases de...",
    name: "Naomi Saghroun",
    designation: "CFO",
    company: "Menouchat Chalom",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];
