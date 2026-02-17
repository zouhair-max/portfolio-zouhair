import type { InfoItem, Stat, Project, Service, Testimonial, Client, ProcessStep, Award, BlogPost, FAQ } from '@/types';

export const infoItems: InfoItem[] = [
  { label: 'LOCATION', value: 'MOROCCO' },
  { label: 'FIELD', value: 'FULL STACK DEVELOPMENT' },
  { label: 'APPROACH', value: 'INNOVATION & QUALITY' },
  { label: 'CLIENTS', value: 'STARTUPS & BUSINESSES' },
];

export const stats: Stat[] = [
  {
    value: 6,
    suffix: '+',
    label: 'PROJECTS',
    description: 'WEB & MOBILE APPLICATIONS BUILT WITH MODERN TECHNOLOGIES AND BEST PRACTICES.',
  },
  {
    value: 3,
    suffix: '+',
    label: 'YEARS EXPERIENCE',
    description: 'FULL STACK DEVELOPMENT WITH REACT, NODE.JS, LARAVEL, AND MORE.',
  },
  {
    value: 100,
    suffix: '%',
    label: 'COMMITMENT',
    description: 'DEDICATED TO DELIVERING HIGH-QUALITY CODE AND EXCEPTIONAL USER EXPERIENCES.',
  },
  {
    value: 10,
    suffix: '+',
    label: 'TECHNOLOGIES',
    description: 'MASTERING A WIDE RANGE OF MODERN WEB AND MOBILE DEVELOPMENT TOOLS.',
  },
];

export const projects: Project[] = [
  {
    id: 'querysql',
    title: 'QUERYSQL',
    image: '/images/work-querysql.jpg',
    tags: ['WEB APP', 'PYTHON', 'FASTAPI', 'REACT', 'POSTGRESQL'],
    size: 'large',
  },
  {
    id: 'smartmenu',
    title: 'SMARTMENU',
    image: '/images/work-smartmenu.jpg',
    tags: ['WEB APP', 'REACT', 'LARAVEL', 'STRIPE', 'SOCKET.IO'],
    size: 'small',
  },
  {
    id: 'choufrap',
    title: 'CHOUFRAP',
    image: '/images/work-choufrap.jpg',
    tags: ['WEB APP', 'NEXT.JS', 'NODE.JS', 'MONGODB', 'WEBRTC'],
    size: 'medium',
  },
  {
    id: 'leafypaws',
    title: 'LEAFYPAWS',
    image: '/images/work-leafypaws.jpg',
    tags: ['MOBILE APP', 'REACT NATIVE', 'LARAVEL', 'AR KIT', 'STRIPE'],
    size: 'medium',
  },
  {
    id: 'questionnaire',
    title: 'QUESTIONNAIRE PRO',
    image: '/images/work-questionnaire.jpg',
    tags: ['WEB APP', 'REACT', 'TYPESCRIPT', 'EXPRESS', 'MYSQL'],
    size: 'large',
  },
  {
    id: 'khayrat',
    title: 'KHAYRAT',
    image: '/images/work-khayrat.jpg',
    tags: ['MOBILE APP', 'REACT NATIVE', 'BLOCKCHAIN', 'SOLIDITY', 'WEB3'],
    size: 'medium',
  },
];

export const services: Service[] = [
  {
    id: 'web',
    number: '01/',
    title: 'WEB APPLICATION DEVELOPMENT',
    description: 'I BUILD RESPONSIVE, HIGH-PERFORMING WEB APPLICATIONS USING MODERN FRAMEWORKS LIKE REACT, NEXT.JS, AND LARAVEL. FOCUSED ON CLEAN CODE, SCALABILITY, AND OPTIMAL USER EXPERIENCES.',
    tags: ['REACT', 'NEXT.JS', 'LARAVEL', 'NODE.JS', 'TYPESCRIPT', 'TAILWIND CSS'],
  },
  {
    id: 'mobile',
    number: '02/',
    title: 'MOBILE APPLICATION DEVELOPMENT',
    description: 'I CREATE CROSS-PLATFORM MOBILE APPLICATIONS USING REACT NATIVE, DELIVERING NATIVE-LIKE PERFORMANCE AND SMOOTH USER INTERACTIONS ACROSS IOS AND ANDROID.',
    tags: ['REACT NATIVE', 'EXPO', 'ANDROID', 'IOS', 'MOBILE UI/UX'],
  },
  {
    id: 'backend',
    number: '03/',
    title: 'BACKEND DEVELOPMENT & APIs',
    description: 'I DEVELOP ROBUST BACKEND SYSTEMS AND RESTFUL APIs USING NODE.JS, LARAVEL, PYTHON, AND FASTAPI. ENSURING SECURITY, PERFORMANCE, AND SCALABILITY FOR YOUR APPLICATIONS.',
    tags: ['NODE.JS', 'LARAVEL', 'PYTHON', 'FASTAPI', 'EXPRESS', 'REST APIs'],
  },
  {
    id: 'database',
    number: '04/',
    title: 'DATABASE DESIGN & MANAGEMENT',
    description: 'I DESIGN AND IMPLEMENT EFFICIENT DATABASE ARCHITECTURES USING RELATIONAL AND NOSQL DATABASES, OPTIMIZING QUERIES AND ENSURING DATA INTEGRITY.',
    tags: ['MYSQL', 'POSTGRESQL', 'MONGODB', 'DATABASE DESIGN', 'QUERY OPTIMIZATION'],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Zouhair delivered an exceptional web application that exceeded our expectations. His technical expertise and attention to detail made the development process smooth and efficient.',
    author: 'CLIENT',
    role: 'PROJECT MANAGER',
    company: 'TECH STARTUP',
    avatar: '/images/testimonial-1.jpg',
  },
  {
    id: '2',
    quote: 'Working with Zouhair was a great experience. He transformed our ideas into a beautiful, functional mobile application with clean code and modern design.',
    author: 'CLIENT',
    role: 'FOUNDER',
    company: 'MOBILE APP COMPANY',
    avatar: '/images/testimonial-2.jpg',
  },
  {
    id: '3',
    quote: 'Zouhair\'s full-stack development skills are impressive. He built a robust backend and intuitive frontend that perfectly met our business requirements.',
    author: 'CLIENT',
    role: 'CTO',
    company: 'ENTERPRISE COMPANY',
    avatar: '/images/testimonial-3.jpg',
  },
];

export const clients: Client[] = [
  { name: 'QUERYSQL PROJECT', year: '2024' },
  { name: 'SMARTMENU', year: '2024' },
  { name: 'CHOUFRAP', year: '2024' },
  { name: 'LEAFYPAWS', year: '2023' },
  { name: 'QUESTIONNAIRE PRO', year: '2023' },
  { name: 'KHAYRAT', year: '2023' },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01/',
    title: 'DISCOVERY & INSIGHT',
    description: 'I START BY UNDERSTANDING YOUR WORLD — YOUR AUDIENCE, YOUR GOALS, AND THE CHALLENGES BEHIND THEM.',
  },
  {
    number: '02/',
    title: 'STRUCTURE & STRATEGY',
    description: 'USER FLOWS, CONTENT DIRECTION, AND THE OVERALL FRAMEWORK. THIS IS WHERE IDEAS TAKE SHAPE.',
  },
  {
    number: '03/',
    title: 'DESIGN & BUILD',
    description: 'I EXPLORE VISUALS AND LAYOUTS THAT ELEVATE YOUR BRAND WHILE STAYING ALIGNED WITH YOUR GOALS.',
  },
  {
    number: '04/',
    title: 'REFINE & FINALIZE',
    description: 'THIS FINAL PHASE ENSURES YOUR PROJECT FEELS COHESIVE, INTUITIVE, AND READY FOR REAL-WORLD USE.',
  },
];

export const awards: Award[] = [
  {
    name: 'Awwwards',
    count: '3×',
    description: 'RECOGNIZED ON THE AWWWARDS PLATFORM AS A MILESTONE THAT CELEBRATES BOTH DIRECTION AND TECHNICAL EXECUTION.',
  },
  {
    name: 'CSSDA',
    count: '9×',
    description: 'FEATURED ON CSS DESIGN AWARDS WITH BEST INNOVATION, BEST CREATIVITY, BEST ANIMATION, AND MULTIPLE DEVELOPER AWARDS.',
  },
  {
    name: 'Framer Gallery',
    count: '8×',
    description: 'I EARNED A SPOT IN THE FRAMER GALLERY TWICE AND RECEIVED THE FRAMER EXPERT BADGE, SHOWCASING HIGH-QUALITY EXECUTION.',
  },
  {
    name: 'Behance',
    count: '3×',
    description: 'AWARDED ACROSS BEHANCE WITH BADGES IN FIGMA, ADOBE ILLUSTRATOR, UI/UX, AND MULTIPLE CASE STUDY FEATURES.',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Designing With Intent: Why Clarity Beats Complexity',
    category: 'DESIGN STRATEGY',
    date: 'NOV 18, 2025',
  },
  {
    id: '2',
    title: 'Why Framer Makes the Workflow Effortless',
    category: 'FRAMER DEVELOPMENT',
    date: 'NOV 18, 2025',
  },
  {
    id: '3',
    title: 'How Visual Hierarchy Shapes User Decisions',
    category: 'UI PRINCIPLES',
    date: 'NOV 18, 2025',
  },
];

export const faqs: FAQ[] = [
  {
    question: 'How does the project typically start?',
    answer: 'Every project begins with a discovery call where we discuss your goals, audience, and vision. From there, I create a proposal outlining the scope, timeline, and investment.',
  },
  {
    question: 'How long does a project usually take?',
    answer: 'Timeline varies based on complexity. A typical website takes 4-8 weeks from kickoff to launch. More complex projects with custom features may take 10-12 weeks.',
  },
  {
    question: "What if I don't have branding yet?",
    answer: "No problem! I offer brand identity services and can help you develop a cohesive visual system before we start on the website.",
  },
  {
    question: 'Do you offer ongoing support after the project?',
    answer: 'Yes, I offer maintenance packages that include updates, bug fixes, and minor changes. This ensures your site stays secure and up-to-date.',
  },
  {
    question: 'Will the website be responsive for all devices?',
    answer: 'Absolutely. Every website I build is fully responsive and tested across multiple devices and browsers to ensure a consistent experience.',
  },
  {
    question: 'Can you work with content I already have?',
    answer: "Of course! I can work with your existing content and imagery. I'll also provide guidance on what works best for web and suggest improvements if needed.",
  },
  {
    question: 'What about SEO?',
    answer: 'All websites are built with SEO best practices in mind, including clean code, fast loading times, proper heading structure, and meta tags.',
  },
  {
    question: "What's your pricing structure?",
    answer: 'Pricing is project-based and depends on scope and complexity. After our initial call, I provide a detailed proposal with transparent pricing.',
  },
];
