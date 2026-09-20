import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Cpu,
  ExternalLink,
  Gamepad2,
  Globe,
  Layers,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MessageSquare,
  Monitor,
  Phone,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Users,
  X
} from 'lucide-react';
import './styles.css';

// --- DATA DEFINITIONS ---

const projectsData = [
  {
    id: 1,
    title: 'Barcode + Facial Recognition System',
    category: 'Embedded AI & Hardware',
    shortDesc: 'Automated student/employee attendance & access control utilizing embedded camera hardware, OpenCV biometric facial recognition, and barcode verification.',
    image: '/images/barcode-system.jpg',
    gallery: ['/images/barcode-system-1.png', '/images/barcode-system-2.png', '/images/barcode-system-3.png'],
    tech: ['Arduino', 'Python', 'OpenCV', 'Raspberry Pi', 'Biometrics'],
    contributors: ['KF', 'NM', 'RL'],
    accentColor: '#10b981',
  },
  {
    id: 2,
    title: 'ASD Learning Application',
    category: 'Assistive EdTech & Mobile',
    shortDesc: 'Visual-based, interactive assistive mobile app crafted specifically for children and learners with Autism Spectrum Disorder to enhance communication and memory.',
    image: '/images/asd-learning-app.png',
    gallery: ['/images/ar-1.png', '/images/ar-2.png', '/images/ar-3.png'],
    tech: ['Flutter', 'Firebase', 'Dart', 'Tailwind', 'UI/UX'],
    contributors: ['KF', 'JT', 'JB'],
    accentColor: '#38bdf8',
  },
  {
    id: 3,
    title: 'GenSpe Mobile Game',
    category: 'Interactive 2D Game Design',
    shortDesc: 'Playable gamified educational experience teaching biological and scientific concepts through interactive puzzles, quests, and retention mechanics.',
    image: '/images/genspe-game.jpg',
    gallery: ['/images/genspe-1.png', '/images/genspe-2.png', '/images/genspe-3.png'],
    tech: ['Unity', 'C#', 'Game Design', '2D Physics', 'Mobile'],
    contributors: ['KF', 'JM', 'RL'],
    accentColor: '#fbbf24',
  },
  {
    id: 4,
    title: 'Speak-App for Non-Verbal Students',
    category: 'AAC & Assistive Speech',
    shortDesc: 'Augmentative and Alternative Communication (AAC) soundboard tool empowering speech-impaired students with vocal synthesis, tap-to-speak, and picture cards.',
    image: '/images/speak-app.png',
    gallery: ['/images/speaksmart-1.png', '/images/speaksmart-2.png', '/images/speaksmart-3.png'],
    tech: ['Flutter', 'Speech AI', 'Firebase', 'Audio Synth', 'Android'],
    contributors: ['KF', 'NM', 'JT'],
    accentColor: '#a855f7',
  },
  {
    id: 5,
    title: 'IGLA Cognitive Training App',
    category: 'Gamified EdTech',
    shortDesc: 'Attention-training and memory enhancement tool featuring specialized pedagogical mini-games designed for cognitive skill development.',
    image: '/images/igla.png',
    gallery: ['/images/igla-gallery-1.png', '/images/igla-gallery-2.png', '/images/igla-gallery-3.png'],
    tech: ['Flutter', 'Dart', 'UX Research', 'Gamification'],
    contributors: ['KF', 'JB', 'RL'],
    accentColor: '#f43f5e',
  },
  {
    id: 6,
    title: 'Digital RSVP & Invitation Platform',
    category: 'Full-Stack Web Experience',
    shortDesc: 'High-conversion interactive event invitation system featuring live guestbook RSVP, countdown timers, Google Maps integration, and photo galleries.',
    image: '/images/birthday-invitation.png',
    gallery: ['/images/birthday-gallery-1.png', '/images/birthday-gallery-2.png', '/images/wedding-gallery-1.png'],
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Vercel', 'PostgreSQL'],
    contributors: ['KF', 'JM', 'JT'],
    accentColor: '#f97316',
  },
];

const techStack = [
  { name: 'React', icon: '/images/react.png' },
  { name: 'Flutter', icon: '/images/flutter.png' },
  { name: 'Python', icon: '/images/python.png' },
  { name: 'Arduino', icon: '/images/arduino.png' },
  { name: 'ESP32 IoT', icon: '/images/ESP32.png' },
  { name: 'C# .NET', icon: '/images/csharp.png' },
  { name: 'C++', icon: '/images/cpp.png' },
  { name: 'PHP', icon: '/images/php.png' },
  { name: 'Laravel', icon: '/images/laravel.png' },
  { name: 'MySQL', icon: '/images/mysql.png' },
  { name: 'PostgreSQL', icon: '/images/PostgreSQL.png' },
  { name: 'MongoDB', icon: '/images/MongoDB.png' },
  { name: 'Firebase', icon: '/images/firebase.png' },
  { name: 'Unity', icon: '/images/unity.png' },
  { name: 'Figma', icon: '/images/figma.svg' },
  { name: 'Android Studio', icon: '/images/android-studio.svg' },
  { name: 'Postman', icon: '/images/postman.svg' },
  { name: 'VS Code', icon: '/images/vscode.svg' },
  { name: 'Vite', icon: '/images/vite.svg' },
  { name: 'Bootstrap', icon: '/images/bootstrap.svg' },
];

const technicalExpertiseGroups = [
  {
    title: 'Code Languages',
    items: [
      { name: 'PHP', icon: '/images/php.png', description: 'Server-side Development' },
      { name: 'JavaScript', icon: '/images/javascript.png', description: 'Web Interactivity' },
      { name: 'Python', icon: '/images/python.png', description: 'Programming Language' },
      { name: 'C#', icon: '/images/csharp.png', description: 'Software Development' },
      { name: 'Java', icon: '/images/java.png', description: 'Software Development' },
      { name: 'C++', icon: '/images/cpp.png', description: 'Systems Programming' },
      { name: 'Kotlin', icon: '/images/kotlin.png', description: 'Android Development' },
      { name: 'Dart', icon: '/images/dart.svg', description: 'Flutter App Logic' },
    ],
  },
  {
    title: 'Frameworks & Development',
    items: [
      { name: 'Flutter', icon: '/images/flutter.png', description: 'Cross-platform Development' },
      { name: 'Laravel', icon: '/images/laravel.png', description: 'Backend Development' },
      { name: 'React', icon: '/images/react.png', description: 'Frontend Development' },
      { name: 'Bootstrap', icon: '/images/bootstrap.svg', description: 'Responsive UI' },
      { name: 'Vite', icon: '/images/vite.svg', description: 'Frontend Build Tool' },
      { name: 'Flame Engine', icon: '/images/flame.png', description: 'Game Engine' },
      { name: 'Unity', icon: '/images/unity.png', description: 'Game Development' },
    ],
  },
  {
    title: 'Database & Backend',
    items: [
      { name: 'Firebase', icon: '/images/firebase.png', description: 'Backend Services' },
      { name: 'MySQL', icon: '/images/mysql.png', description: 'Database Systems' },
      { name: 'PostgreSQL', icon: '/images/PostgreSQL.png', description: 'Relational Database' },
      { name: 'MongoDB', icon: '/images/MongoDB.png', description: 'NoSQL Database' },
      { name: 'SQLite', icon: '/images/sqlite.svg', description: 'Local App Storage' },
      { name: 'REST API', icon: '/images/rest-api.svg', description: 'System Integration' },
    ],
  },
  {
    title: 'Hardware & Embedded',
    items: [
      { name: 'Arduino', icon: '/images/arduino.png', description: 'Embedded Systems' },
      { name: 'Raspberry Pi', icon: '/images/raspberry-pi.svg', description: 'Single-board Computing' },
      { name: 'ESP32', icon: '/images/ESP32.png', description: 'IoT Microcontroller' },
      { name: 'IoT', icon: '/images/iot.svg', description: 'Connected Devices' },
      { name: 'Sensors & Automation', icon: '/images/sensors-automation.svg', description: 'Monitoring & Control' },
    ],
  },
  {
    title: 'Design & Development Tools',
    items: [
      { name: 'Canva', icon: '/images/canva.svg', description: 'Graphic Design' },
      { name: 'Adobe Illustrator', icon: '/images/Adobe illustrator.png', description: 'Vector Design' },
      { name: 'Photoshop', icon: '/images/Photoshop.png', description: 'Image Editing' },
      { name: 'VS Code', icon: '/images/vscode.svg', description: 'Code Editor' },
      { name: 'Android Studio', icon: '/images/android-studio.svg', description: 'Android Tooling' },
      { name: 'GitHub', icon: '/images/github.png', description: 'Version Control' },
      { name: 'Postman', icon: '/images/postman.svg', description: 'API Testing' },
      { name: 'Figma', icon: '/images/figma.svg', description: 'UI/UX Prototyping' },
    ],
  },
];

const teamMembers = [
  {
    name: 'Engr. Nonito Molijon Jr.',
    role: 'Founder / CEO',
    image: '/images/nonito.jpg',
  },
  {
    name: 'Ken Chester Felongco',
    role: 'CTO / Lead Developer',
    image: '/images/ken.png',
  },
  {
    name: 'Junelyn Bertudazo',
    role: 'Finance & HR Officer',
    image: '/images/Junelyn.png',
  },
  {
    name: 'Ronnel Labata',
    role: 'Senior Developer',
    image: '/images/ronnel.png',
  },
  {
    name: 'JannLemor Malakad',
    role: 'Web Developer',
    image: '/images/jannlemor.png',
  },
  {
    name: 'John Paul Terania',
    role: 'UI/UX Designer',
    image: '/images/john-paul-terania.png',
  },
  {
    name: 'Eljay',
    role: 'Frontend Developer',
    image: '/images/eljay.png',
  },
  {
    name: 'Madel',
    role: 'Quality Assurance',
    image: '/images/madel.png',
  },
  {
    name: 'Nachie',
    role: 'Project Coordinator',
    image: '/images/nachie.png',
  },
];

const workflowSteps = [
  {
    step: '01',
    side: 'right',
    badge: 'INQUIRY',
    title: 'Chat',
    desc: "Free consultation. Tell us what you need — we'll tell you exactly what it takes. No pressure, no sales pitch, just straight answers.",
  },
  {
    step: '02',
    side: 'left',
    badge: 'WITHIN 24 HOURS',
    title: 'Plan & quote',
    desc: 'Within 24 hours, you get a written scope, timeline, and fixed price. What we agree on is what you pay — no surprise fees later.',
  },
  {
    step: '03',
    side: 'right',
    badge: 'AT LEAST 25%',
    title: 'Downpayment',
    desc: 'A minimum 25% downpayment locks in your timeline and reserves our team. Development begins the moment payment clears — no waiting, no delays.',
  },
  {
    step: '04',
    side: 'left',
    badge: '2 - 6 WEEKS TYPICAL',
    title: 'Build',
    desc: 'Real progress in days, not months. We work in 2–4 stages with a live preview link — you see every update as it happens, with quick check-ins by chat or email.',
  },
  {
    step: '05',
    side: 'right',
    badge: 'IMPROVE TOGETHER',
    title: 'Review & refine',
    desc: 'Test the preview, share feedback, watch us improve it. Changes inside the agreed scope are always included — never billed as extras.',
  },
  {
    step: '06',
    side: 'left',
    badge: '30 DAYS FREE FIXES',
    title: 'Launch & support',
    desc: 'We set it up on your hosting, hand over full docs and logins, and stay on call for 30 days of free fixes. Optional monthly plan for ongoing support afterward.',
  },
];

const pricingPlans = [
  {
    name: 'Basic',
    subtitle: 'Basic Starter',
    price: '₱1K',
    priceRange: '– ₱30K',
    desc: 'Best for students, startups, and simple projects on a budget.',
    highlight: false,
    cta: 'Get Started',
    features: [
      'Free Web Hosting Setup',
      'Minor Changes (within agreed scope)',
      'Automatic Email Setup',
      'Standard delivery time',
      'Flexible down payment terms',
      'Basic support after handover',
    ],
  },
  {
    name: 'Pro',
    subtitle: 'Business Growth',
    badge: '★ Most Popular',
    price: '₱31K',
    priceRange: '– ₱100K',
    desc: 'Best for businesses that need advanced features and room to grow.',
    highlight: true,
    cta: 'Choose Pro',
    features: [
      'Everything in Basic',
      'Free 1-Year Domain Registration',
      'Free 2 Months Web Hosting',
      'Major Revisions (per agreed scope)',
      'Payment Gateway Integration',
      '5 Months Free Maintenance & Support',
      'Priority Project Handling',
      'AI Automation Features',
      'NDA Contract Provided',
    ],
  },
  {
    name: 'Premium',
    subtitle: 'Enterprise Solution',
    price: 'Custom',
    priceRange: 'pricing',
    desc: 'For large businesses, enterprise systems, and high-level automation.',
    highlight: false,
    cta: 'Request Quote',
    features: [
      'Everything in Basic & Pro',
      'Complete Project Documentation',
      'Multiple Payment Gateways',
      'Extended Maintenance (Up to 5 Years)',
      'Free 1-Year VPS Subscription',
      'Advanced Security Setup',
      'Priority Support & Consultation',
      'And more...',
    ],
  },
];

const clientReviews = [
  {
    rating: 5,
    name: 'Margarett Kim Allauigan',
    role: 'Client',
    avatar: '/images/nonito.jpg',
    text: 'Great work! My web app works smoothly and everything functions well. Very professional and easy to work with. I would definitely recommend this developer!',
  },
  {
    rating: 5,
    name: 'Jennifer Pailona',
    role: 'Client',
    avatar: '/images/ken.png',
    text: 'This team is genius! One of my hardest system problems was solved quickly. Thank you so much! Highly recommended! Rate 5 stars here! Very easy to negotiate with.',
  },
  {
    rating: 5,
    name: 'Hazel Joy Mangcucang',
    role: 'Client',
    avatar: '/images/Junelyn.png',
    text: 'Highly recommended! Mabilis kausap, very detailed, and super patient sa pag-handle ng requirements and processes. Mabait and straightforward sa transactions kaya hassle-free.',
  },
  {
    rating: 5,
    name: 'Andrea Zarriena',
    role: 'Client',
    avatar: '/images/ronnel.png',
    text: 'To be honest, I was nervous at first because I thought my research and system concerns were too complicated. But they turned out to be really approachable and supportive throughout!',
  },
  {
    rating: 5,
    name: 'Emma Marmoles',
    role: 'Client',
    avatar: '/images/jannlemor.png',
    text: '11/10 honestly! Our system was rushed because of the upcoming thesis defense, but they managed to finish it agad without compromising quality. Very responsive and kind!',
  },
  {
    rating: 5,
    name: 'Maegan Ancheta',
    role: 'Student / Capstone',
    avatar: '/images/john-paul-terania.png',
    text: 'Vouching for this team! Ang bilis gumawa and super reliable. Very approachable and student-friendly price, ramdam na student considerate. Sulit ang bayad!',
  },
];

// --- SPLASH SCREEN LOADER (Matching Padilla HelpDesk) ---
function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1900);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-[#09090b] animate-splash-out pointer-events-none"
    >
      <div className="flex items-center justify-center">
        <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-emerald-500/30 bg-zinc-900 shadow-[0_0_18px_rgba(16,185,129,0.18)]">
          <img src="/images/logo.jpg" alt="AC Logo" className="h-full w-full object-cover" />
        </div>
      </div>
      <span className="h-0.5 w-32 overflow-hidden rounded-full bg-zinc-800">
        <span className="block h-full w-1/3 rounded-full bg-emerald-500 animate-splash-bar motion-reduce:animate-none" />
      </span>
    </div>
  );
}

// --- MOUSE TRAIL EFFECT (Code Tokens) ---
function MouseTokenTrail() {
  const tokens = ['const', '<div>', '=>', 'async', 'return', 'state', '01', 'true', '<AC />', 'npm dev', 'function', '{...}', 'class', 'await'];
  const colors = [
    ['#34d399', 'rgba(52, 211, 153, 0.6)'],
    ['#38bdf8', 'rgba(56, 189, 248, 0.6)'],
    ['#fbbf24', 'rgba(251, 191, 36, 0.6)'],
    ['#fb7185', 'rgba(251, 113, 133, 0.6)'],
    ['#c084fc', 'rgba(192, 132, 252, 0.6)'],
  ];
  const lastSpawn = useRef(0);

  useEffect(() => {
    function handleMouseMove(e) {
      const now = Date.now();
      if (now - lastSpawn.current < 90) return;
      lastSpawn.current = now;

      const span = document.createElement('span');
      span.className = 'mt-token';
      span.innerText = tokens[Math.floor(Math.random() * tokens.length)];
      const [tokenColor, tokenGlow] = colors[Math.floor(Math.random() * colors.length)];
      span.style.left = `${e.clientX}px`;
      span.style.top = `${e.clientY}px`;
      span.style.setProperty('--token-color', tokenColor);
      span.style.setProperty('--token-glow', tokenGlow);
      span.style.setProperty('--dx', `${(Math.random() - 0.5) * 40}px`);
      span.style.setProperty('--dy', `${-25 - Math.random() * 30}px`);

      document.body.appendChild(span);
      setTimeout(() => {
        span.remove();
      }, 800);
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
}

// --- NAVBAR ---
function Navbar({ onOpenChat, onOpenBrandSummary }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#top' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Team', href: '#team' },
    { label: 'Reviews', href: '#reviews' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3.5 transition-all duration-300 ${scrolled ? 'header-shell-scrolled' : ''}`}>
      <div className={`mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 transition-all duration-500 ${scrolled ? 'header-scrolled glass-nav shadow-2xl rounded-none' : 'max-w-6xl rounded-full bg-transparent'}`}>
        
        {/* Brand Logo */}
        <button
          type="button"
          onClick={onOpenBrandSummary}
          className="nav-logo-button"
          aria-label="Read about AC: Apex of Champions"
          aria-haspopup="dialog"
          aria-controls="brandSummaryModal"
        >
          <span className="nav-brand-logo" aria-hidden="true">
            <video
              className="nav-brand-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
            >
              <source src="/images/animation/animation.mp4" type="video/mp4" />
            </video>
            <span className="nav-brand-core">
              <span className="nav-brand-ac">AC</span>
              <span className="nav-brand-title">APEX OF<br />CHAMPIONS</span>
            </span>
          </span>
        </button>

        {/* Desktop Nav Pills */}
        <nav className="hidden md:flex items-center gap-1 nav-pill rounded-full px-3 py-1">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="hidden sm:inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-zinc-950 transition-all duration-200 hover:opacity-90 hover:scale-105"
          >
            Get Started
          </a>

          <button
            type="button"
            className="md:hidden text-zinc-400 hover:text-white p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-18 glass-nav rounded-2xl p-6 border border-zinc-800 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-emerald-400 py-2 border-b border-zinc-800/50"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="mt-2 w-full text-center py-2.5 rounded-full bg-emerald-500 font-semibold text-zinc-950 text-xs"
            >
              Ask Our Team
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

// --- HERO SECTION ---
function HeroSection({ onOpenChat, onSelectProject }) {
  const heroRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let frameId = 0;

    const updateHero = () => {
      if (!heroRef.current) return;
      const scrollProgress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
      const shift = Math.min(window.scrollY * 0.08, 36);
      heroRef.current.style.setProperty('--hero-shift', `${shift}px`);
      heroRef.current.style.setProperty('--hero-fade', `${scrollProgress * 0.65}`);
      heroRef.current.style.setProperty('--hero-blur', `${scrollProgress * 10}px`);
      heroRef.current.style.setProperty('--hero-scale', `${1 - scrollProgress * 0.05}`);
      heroRef.current.style.setProperty('--hero-opacity', `${1 - scrollProgress * 0.5}`);
      heroRef.current.style.setProperty('--hero-content-opacity', `${Math.max(0.1, 1 - window.scrollY / 420)}`);
      heroRef.current.style.setProperty('--hero-content-shift', `${Math.min(window.scrollY * -0.12, -42)}px`);
      frameId = requestAnimationFrame(updateHero);
    };

    frameId = requestAnimationFrame(updateHero);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={heroRef} id="top" className="home-layer hero-section relative pt-28 sm:pt-36 pb-20 lg:pb-32 overflow-hidden">
      {/* Background Ambient Lights */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] glow-emerald opacity-60 blur-3xl -z-10" />
      <div className="pointer-events-none absolute top-40 right-10 w-[400px] h-[400px] glow-subtle opacity-50 blur-2xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Actions */}
          <div className="hero-copy lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for work
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-light text-white tracking-tight leading-[1.06]">
                Got a business problem?
              </h1>
              <p className="accent-serif text-4xl sm:text-5xl lg:text-[62px] leading-[1.06] text-white">
                Let's build the <span className="text-emerald-400">solution.</span>
              </p>
            </div>

            {/* Team Identity Meta Line */}
            <div className="flex flex-wrap items-center gap-x-2 text-xs sm:text-sm text-zinc-400">
              <span className="font-semibold text-zinc-200">Joshua Anderson Padilla</span>
              <span>·</span>
              <span>Full Stack Developer</span>
              <span>·</span>
              <span className="flex items-center gap-1 text-zinc-300">
                <MapPin size={13} className="text-emerald-400" />
                svgBulacan, Philippines
              </span>
            </div>

            {/* Paragraph Summary */}
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
              We develop custom software, websites, mobile apps, and AI-powered systems designed to help businesses work smarter and grow faster.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenChat}
                className="btn-emerald text-xs sm:text-sm inline-flex items-center gap-2"
              >
                Send Inquiry
                <ArrowUpRight size={16} />
              </button>
              <a
                href="#projects"
                className="btn-outline text-xs sm:text-sm inline-flex items-center gap-2"
              >
                View Works
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-4 text-zinc-400">
              <a
                href="mailto:apexofchampions@gmail.com"
                aria-label="Email AC"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:text-emerald-400 hover:border-emerald-500/40 hover:scale-110 transition-all"
              >
                <Mail size={15} />
              </a>
              <a
                href="https://wa.me/639553983149"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp AC"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:text-emerald-400 hover:border-emerald-500/40 hover:scale-110 transition-all"
              >
                <Phone size={15} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61587213903017"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Page"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:text-emerald-400 hover:border-emerald-500/40 hover:scale-110 transition-all"
              >
                <MessageCircle size={15} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:text-emerald-400 hover:border-emerald-500/40 hover:scale-110 transition-all"
              >
                <Code2 size={15} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- VENETIAN BLIND IMAGE COMPONENT ---
const SLAT_COUNT = 10;

function BlindImage({ src, alt, activeIndex }) {
  const [displaySrc, setDisplaySrc] = useState(src);
  const [phase, setPhase] = useState('idle'); // 'idle' | 'closing' | 'opening'
  const prevSrcRef = useRef(src);
  const timerRef = useRef(null);

  useEffect(() => {
    if (src === prevSrcRef.current) return;
    clearTimeout(timerRef.current);
    // Phase 1: close blinds over old image
    setPhase('closing');
    timerRef.current = setTimeout(() => {
      setDisplaySrc(src);
      prevSrcRef.current = src;
      setPhase('opening');
      timerRef.current = setTimeout(() => {
        setPhase('idle');
      }, SLAT_COUNT * 25 + 80);
    }, SLAT_COUNT * 25 + 60);
    return () => clearTimeout(timerRef.current);
  }, [src, activeIndex]);

  return (
    <>
      <img
        src={displaySrc}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover filter contrast-[1.05] brightness-90"
      />
      <div className="blind-overlay">
        {Array.from({ length: SLAT_COUNT }).map((_, i) => (
          <div
            key={i}
            className={`blind-slat${phase === 'closing' ? ' closing' : phase === 'opening' ? ' opening' : ''}`}
            style={{ '--delay': `${i * 25}ms` }}
          />
        ))}
      </div>
    </>
  );
}

// --- 3D COVERFLOW FEATURED PROJECTS ---
const carouselProjects = [...projectsData, ...projectsData];

function ProjectsCoverflow({ onSelectProject }) {
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const orbitRotationRef = useRef(0);
  const previousFrameTimeRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let frameId = 0;

    const updateCoverflow = (timestamp) => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      if (previousFrameTimeRef.current) {
        const elapsed = timestamp - previousFrameTimeRef.current;
        if (!isPaused) orbitRotationRef.current += elapsed * 0.006;
      }
      previousFrameTimeRef.current = timestamp;

      const revealProgress = Math.min(
        Math.max(window.scrollY / (window.innerHeight * 0.85), 0),
        1
      );
      const rotation = -revealProgress * 150 + orbitRotationRef.current;
      section.style.setProperty('--project-reveal', revealProgress);
      track.style.transform = `rotateY(${rotation}deg)`;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const baseAngle = (index / carouselProjects.length) * 360;
        const rawAngle = baseAngle + rotation;
        const angle = ((rawAngle + 180) % 360 + 360) % 360 - 180;
        const frontness = Math.max(0, Math.cos((angle * Math.PI) / 180));
        card.style.setProperty('--card-scale', `${0.78 + frontness * 0.22}`);
        card.style.setProperty('--card-opacity', `${0.35 + frontness * 0.65}`);
        card.style.setProperty('--card-brightness', `${0.48 + frontness * 0.52}`);
        card.style.setProperty('--card-blur', '0px');
      });

      frameId = requestAnimationFrame(updateCoverflow);
    };

    frameId = requestAnimationFrame(updateCoverflow);
    return () => cancelAnimationFrame(frameId);
  }, [isPaused]);

  return (
    <section ref={sectionRef} id="projects" className="projects-layer py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">Portfolio</p>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400">
              A few systems, apps, and experiences we have built from first sketch to launch.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                onSelectProject(projectsData[0]);
              }}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
            >
              View details <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* 3D Coverflow Perspective Container */}
      <div
        className="coverflow-container w-full max-w-7xl mx-auto py-6"
        style={{ height: '540px' }}
      >
        <div ref={trackRef} className={`coverflow-track ${isPaused ? 'is-paused' : ''}`}>
          {carouselProjects.map((project, index) => {
            return (
              <div
                key={`${project.id}-${index}`}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onFocus={() => setIsPaused(true)}
                onBlur={() => setIsPaused(false)}
                onClick={() => onSelectProject(project)}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                className="coverflow-card group"
                style={{
                  '--position': index + 1,
                  '--quantity': carouselProjects.length,
                  '--project-delay': `${index * 70}ms`
                }}
              >
                {/* Ambient dynamic backlight glow behind active card */}
                <div className="card-ambient-glow" />

                {/* Main Card */}
                <div
                  className="project-card-surface w-full h-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/90 relative flex flex-col justify-end p-3 shadow-2xl"
                  style={{ '--project-delay': `${index * 90}ms` }}
                >
                  
                  {/* Project artwork stays inside each rotating card */}
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                  {/* Gradient Overlay — sits above blind slats (z-index 6) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" style={{ zIndex: 6 }} />

                  {/* Keep the title readable while the full details remain hover-only */}
                  <div className="absolute inset-x-0 bottom-0 p-2.5 z-[7] bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:opacity-0 transition-opacity duration-200">
                    <h4 className="project-card-title">{project.title}</h4>
                  </div>

                  {/* Detailed card overlay on hover */}
                  <div className="project-hover-details" style={{ zIndex: 11 }}>
                    <p className="project-card-category">Featured</p>
                    <h4 className="project-card-title">{project.title}</h4>
                    <p className="project-card-desc">{project.shortDesc}</p>
                    <div className="project-card-tags">
                      {project.tech.map((technology) => (
                        <span key={technology} className="project-card-tag">
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Reflection underneath card */}
                <div className="coverflow-reflection">
                  <img
                    src={project.image}
                    alt=""
                    className="w-full h-full object-cover filter brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#09090b]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --- SKILLS & TECHNOLOGIES INFINITE MARQUEE ---
function SkillsMarquee() {
  return (
    <section id="skills" className="py-16 border-y border-zinc-900 bg-zinc-950/40 relative">
      <div className="max-w-6xl mx-auto px-4 mb-8 text-center">
        <h2 className="text-xl sm:text-2xl font-light text-zinc-300 tracking-tight">
          Skills & Technologies
        </h2>
      </div>

      <div className="w-full overflow-hidden relative">
        {/* Subtle Edge Gradients */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#09090b] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#09090b] to-transparent z-10" />

        {/* Marquee Track */}
        <div className="marquee-content gap-8 sm:gap-12 py-2">
          {[...techStack, ...techStack].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-4 py-2 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-emerald-500/40 hover:bg-zinc-800/50 transition-all cursor-default shrink-0 group"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <span className="text-xs font-medium text-zinc-400 group-hover:text-white transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- WHAT WE CAN BUILD ---
function WhatWeCanBuild({ onOpenChat }) {
  const swingRef = useRef({ angle: 0, velocity: 0, dragging: false, startX: 0, startAngle: 0, lastAngle: 0 });
  const [swingAngle, setSwingAngle] = useState(0);

  useEffect(() => {
    let frameId = 0;
    let lastTime = performance.now();

    const animateSwing = (time) => {
      const elapsed = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;
      const swing = swingRef.current;

      if (!swing.dragging) {
        swing.velocity += (-18 * swing.angle - 4.5 * swing.velocity) * elapsed;
        swing.angle += swing.velocity * elapsed;
        if (Math.abs(swing.angle) < 0.0005 && Math.abs(swing.velocity) < 0.0005) {
          swing.angle = 0;
          swing.velocity = 0;
        }
        setSwingAngle(swing.angle);
      }

      frameId = requestAnimationFrame(animateSwing);
    };

    frameId = requestAnimationFrame(animateSwing);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const handleCardPointerDown = (event) => {
    const swing = swingRef.current;
    event.currentTarget.setPointerCapture(event.pointerId);
    swing.dragging = true;
    swing.startX = event.clientX;
    swing.startAngle = swing.angle;
    swing.lastAngle = swing.angle;
  };

  const handleCardPointerMove = (event) => {
    const swing = swingRef.current;
    if (!swing.dragging) return;
    const nextAngle = Math.max(-0.65, Math.min(0.65, swing.startAngle - (event.clientX - swing.startX) / 240));
    swing.velocity = (nextAngle - swing.lastAngle) * 12;
    swing.lastAngle = nextAngle;
    swing.angle = nextAngle;
    setSwingAngle(nextAngle);
  };

  const handleCardPointerUp = (event) => {
    const swing = swingRef.current;
    if (swing.dragging) event.currentTarget.releasePointerCapture(event.pointerId);
    swing.dragging = false;
  };

  const capabilities = [
    {
      icon: Monitor,
      title: 'Web Development',
      desc: 'Websites and web apps built for how your business actually runs — from a simple first version to a full system. Secure, and fully yours to own.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      desc: 'Apps that feel native on both iOS and Android from a single build, so you reach your customers wherever they are.',
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      desc: 'Playable 2D and 3D games for web and mobile — from prototype and art through to release.',
    },
    {
      icon: Cpu,
      title: 'Custom Systems & AI Integration',
      desc: 'POS, HR, inventory and school systems shaped around your workflow, with AI assistants and automation built in.',
    },
  ];

  return (
    <section id="services" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-14">
        <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">Capabilities</p>
        <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
          What We Can Build
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Lead Portrait with Floating Badges & Stats */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-[440px] aspect-[4/5] overflow-visible flex flex-col items-center justify-end">
            
            <div
              className="absolute inset-x-5 top-3 bottom-3 z-10 flex flex-col items-center cursor-grab active:cursor-grabbing"
              onPointerDown={handleCardPointerDown}
              onPointerMove={handleCardPointerMove}
              onPointerUp={handleCardPointerUp}
              onPointerCancel={handleCardPointerUp}
              style={{
                touchAction: 'none',
                transform: `rotate(${swingAngle * (180 / Math.PI)}deg)`,
                transformOrigin: 'top center',
                willChange: 'transform'
              }}
            >
              <div className="w-3 h-3 rounded-full bg-zinc-800 border border-zinc-600 shadow-lg" />
              <div className="w-1 h-9 bg-zinc-800 rounded-full shadow-inner" />

              <div className="relative w-full max-w-[300px] h-[460px] flex-none rounded-[1.6rem] overflow-hidden bg-zinc-950 border border-white/20 shadow-2xl">
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-20 w-8 h-2 rounded-full bg-black/80 border border-white/30" />
                <div className="h-[62%] relative overflow-hidden bg-gradient-to-br from-emerald-700 via-emerald-500 to-zinc-950">
                  <img src="/images/ken.png" alt="Joshua Anderson Padilla" className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-emerald-500/10 to-transparent" />
                  {capabilities.map(({ icon: ServiceIcon, title }, index) => (
                    <div
                      key={title}
                      title={title}
                      className={`absolute z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/60 bg-sky-500/20 text-sky-300 shadow-[0_0_18px_rgba(14,165,233,0.35)] ${[
                        'left-4 top-8',
                        'right-4 top-8',
                        'right-12 top-32',
                        'left-4 bottom-8'
                      ][index]}`}
                    >
                      <ServiceIcon size={19} />
                    </div>
                  ))}
                </div>
                <div className="h-[38%] bg-zinc-950 px-4 py-3 flex flex-col gap-2">
                  <div className="grid grid-cols-4 gap-2 border-t border-zinc-800 pt-3 text-center">
                    <div className="min-w-0 h-20 rounded-xl border border-zinc-800 bg-zinc-900/70 px-1.5 py-2 flex flex-col items-center justify-center shadow-inner">
                      <p className="text-xl font-bold leading-none text-white">30+</p>
                      <p className="mt-2 text-[8px] leading-tight text-zinc-400">Projects Completed</p>
                    </div>
                    <div className="min-w-0 h-20 rounded-xl border border-zinc-800 bg-zinc-900/70 px-1.5 py-2 flex flex-col items-center justify-center shadow-inner">
                      <p className="text-xl font-bold leading-none text-white">30</p>
                      <p className="mt-2 text-[8px] leading-tight text-zinc-400">Total Reviews</p>
                    </div>
                    <div className="min-w-0 h-20 rounded-xl border border-zinc-800 bg-zinc-900/70 px-1.5 py-2 flex flex-col items-center justify-center shadow-inner">
                      <p className="text-xl font-bold leading-none text-white">4+</p>
                      <p className="mt-2 text-[8px] leading-tight text-zinc-400">Years Experience</p>
                    </div>
                    <div className="min-w-0 h-20 rounded-xl border border-emerald-500/30 bg-emerald-950/20 px-1.5 py-2 flex flex-col items-center justify-center shadow-inner">
                      <p className="text-xl font-bold leading-none text-emerald-400">99%</p>
                      <p className="mt-2 text-[8px] leading-tight text-emerald-200/70">Client Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: 2x2 Feature Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div
                key={i}
                className="dark-card p-6 flex flex-col justify-between group hover:border-emerald-500/40"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-white tracking-tight mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {cap.desc}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onOpenChat}
                  className="text-xs font-semibold text-zinc-300 hover:text-emerald-400 flex items-center gap-1.5 transition-colors self-start"
                >
                  Learn more <ArrowUpRight size={14} />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// --- HOW WE'LL WORK TOGETHER (ROADMAP TIMELINE) ---
function WorkRoadmap() {
  const timelineRef = useRef(null);
  const progressLineRef = useRef(null);
  const progressMarkerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    let frameId = 0;

    const updateTimelineProgress = () => {
      const timeline = timelineRef.current;
      const progressLine = progressLineRef.current;
      const progressMarker = progressMarkerRef.current;
      if (!timeline || !progressLine || !progressMarker) return;

      const bounds = timeline.getBoundingClientRect();
      const start = window.innerHeight * 0.84;
      const progress = Math.min(
        Math.max((start - bounds.top) / Math.max(bounds.height + window.innerHeight * 0.6, 1), 0),
        1
      );
      const pathLength = progressLine.getTotalLength();
      progressLine.style.strokeDasharray = '1';
      progressLine.style.strokeDashoffset = `${1 - progress}`;
      const point = progressLine.getPointAtLength(pathLength * progress);
      progressMarker.setAttribute('cx', `${point.x}`);
      progressMarker.setAttribute('cy', `${point.y}`);
      const nextActiveStep = progress <= 0
        ? -1
        : Math.min(workflowSteps.length - 1, Math.floor(progress * workflowSteps.length));
      setActiveStep((currentStep) => currentStep === nextActiveStep ? currentStep : nextActiveStep);
      frameId = requestAnimationFrame(updateTimelineProgress);
    };

    frameId = requestAnimationFrame(updateTimelineProgress);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section id="roadmap" className="py-24 bg-zinc-950/50 border-t border-zinc-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">Career</p>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            Career Journey
          </h2>
          <p className="mt-3 text-sm text-zinc-400">An evolving path of leadership, innovation, and impact</p>
        </div>

        {/* Timeline Container */}
        <div ref={timelineRef} className="relative">
          {/* Thick hand-drawn progress path */}
          <svg
            className="absolute inset-0 z-0 h-full w-full overflow-visible pointer-events-none"
            viewBox="0 0 200 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M100 0 C100 65 135 65 135 125 C135 185 70 165 70 245 C70 315 135 285 135 370 C135 455 70 430 70 520 C70 610 135 580 135 680 C135 775 70 750 70 835 C70 915 100 950 100 1000"
              fill="none"
              stroke="#27272a"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              ref={progressLineRef}
              d="M100 0 C100 65 135 65 135 125 C135 185 70 165 70 245 C70 315 135 285 135 370 C135 455 70 430 70 520 C70 610 135 580 135 680 C135 775 70 750 70 835 C70 915 100 950 100 1000"
              pathLength="1"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="9"
              strokeLinecap="round"
              style={{ strokeDasharray: 1, strokeDashoffset: 1, filter: 'drop-shadow(0 0 8px rgba(59,130,246,0.65))' }}
            />
            <circle
              ref={progressMarkerRef}
              cx="100"
              cy="0"
              r="9"
              fill="#3b82f6"
              stroke="#dbeafe"
              strokeWidth="3"
              style={{ filter: 'drop-shadow(0 0 10px rgba(59,130,246,0.9))' }}
            />
          </svg>

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {workflowSteps.map((step, idx) => {
              const isRight = step.side === 'right';
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isRight ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Dot */}
                  <div className={`absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-zinc-950 border-2 flex items-center justify-center text-xs font-bold z-30 shadow-lg font-mono-code transition-all duration-300 ${
                    idx <= activeStep ? 'border-emerald-300 text-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.5)]' : 'border-zinc-700 text-zinc-500'
                  }`}>
                    {step.step}
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card Content */}
                  <div
                    className={`pl-12 sm:pl-0 sm:w-1/2 ${
                      isRight ? 'sm:pl-10' : 'sm:pr-10'
                    }`}
                  >
                    <div className={`relative z-10 dark-card p-6 border-zinc-800/90 hover:border-emerald-500/40 transition-all duration-500 ${
                      idx <= activeStep
                        ? 'border-emerald-500/50 shadow-[0_0_24px_rgba(16,185,129,0.12)] opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold tracking-wider text-emerald-400 uppercase bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                          {step.badge}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white tracking-tight mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- MEET OUR TEAM ---
function TeamSection() {
  return (
    <section id="team" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">Talent</p>
        <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
          Meet Our Team
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => {
          const initials = member.name
            .split(' ')
            .map((part) => part[0])
            .slice(0, 2)
            .join('')
            .toUpperCase();

          return (
            <div key={`${member.name}-${index}`} className="team-card-shell">
              <article className="team-social-card group" aria-label={member.name}>
                <div className="team-card-background">
                  <img src={member.image} alt={member.name} loading="lazy" />
                </div>

                <div className="team-card-glow" aria-hidden="true" />

                <div className="box box1" aria-hidden="true">
                  <span className="icon">
                    <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="svg">
                      <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
                    </svg>
                  </span>
                </div>

                <div className="box box2" aria-hidden="true">
                  <span className="icon">
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="svg">
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                  </span>
                </div>

                <div className="box box3" aria-hidden="true">
                  <span className="icon">
                    <svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" className="svg">
                      <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                    </svg>
                  </span>
                </div>

                <div className="box box4" aria-hidden="true" />

                <div className="team-card-name-wrap">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-bold text-white tracking-tight truncate">
                      {member.name}
                    </h3>
                    <span className="text-sky-400 shrink-0" title="Verified Member">
                      <CheckCircle2 size={14} className="fill-sky-400 text-zinc-950" />
                    </span>
                  </div>
                  <p className="text-xs text-zinc-200/80 truncate">
                    {member.role}
                  </p>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// --- TECHNICAL EXPERTISE ---
function TechnicalExpertiseSection() {
  return (
    <section id="technical-expertise" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center lg:text-left">
        <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">Technical Expertise</p>
        <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
          Technologies & Expertise
        </h2>
        <p className="mt-4 max-w-3xl text-sm sm:text-base text-zinc-400 leading-relaxed">
          A multidisciplinary stack of technologies used in mobile development, embedded systems, software engineering, and modern web solutions.
        </p>
      </div>

      <div className="space-y-8">
        {technicalExpertiseGroups.map((group) => (
          <div key={group.title} className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">{group.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {group.items.map((item) => (
                <div key={`${group.title}-${item.name}`} className="tech-card-wrapper noselect">
                  <div className="tech-card-canvas" aria-label={item.name}>
                    {Array.from({ length: 25 }).map((_, index) => (
                      <div key={`${item.name}-tracker-${index}`} className={`tech-tracker tr-${index + 1}`} />
                    ))}
                    <div className="tech-card-shell">
                      <div className="tech-card-content">
                        <div className="tech-card-glare" />
                        <div className="tech-card-lines">
                          <span />
                          <span />
                          <span />
                          <span />
                        </div>

                        <div className="tech-card-icon-wrap">
                          <img src={item.icon} alt={item.name} className="tech-card-icon" />
                        </div>

                        <div className="tech-card-title-wrap">
                          <div className="tech-card-title">{item.name}</div>
                        </div>

                        <div className="tech-card-glowing-elements">
                          <div className="tech-glow-1" />
                          <div className="tech-glow-2" />
                          <div className="tech-glow-3" />
                        </div>

                        <div className="tech-card-subtitle">
                          <span>{item.description}</span>
                        </div>

                        <div className="tech-card-particles">
                          <span /><span /><span /><span /><span /><span />
                        </div>

                        <div className="tech-card-corner-elements">
                          <span /><span /><span /><span />
                        </div>

                        <div className="tech-card-scan-line" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- WHAT CLIENTS SAY (REVIEWS) ---
function ReviewsSection() {
  const [expandedReview, setExpandedReview] = useState(null);
  const [reviewIndex, setReviewIndex] = useState(0);

  const visibleReviews = [0, 1, 2].map((offset) => (
    clientReviews[(reviewIndex + offset) % clientReviews.length]
  ));

  const moveReviews = (direction) => {
    setExpandedReview(null);
    setReviewIndex((current) => (
      (current + direction + clientReviews.length) % clientReviews.length
    ));
  };

  return (
    <section id="reviews" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            What Clients Say
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://www.facebook.com/profile.php?id=61587213903017"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex text-xs font-medium text-zinc-400 hover:text-emerald-400 items-center gap-1 transition-colors mr-2"
          >
            See all <ArrowUpRight size={14} />
          </a>
          <button
            type="button"
            onClick={() => moveReviews(-1)}
            className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 flex items-center justify-center transition-all"
            aria-label="Previous review"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => moveReviews(1)}
            className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 flex items-center justify-center transition-all"
            aria-label="Next review"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {visibleReviews.map((rev, i) => {
          const reviewKey = (reviewIndex + i) % clientReviews.length;
          return (
          <div key={`${rev.name}-${reviewKey}`} className="dark-card p-6 flex flex-col justify-between border-zinc-800/90 animate-in fade-in duration-300">
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(rev.rating)].map((_, s) => (
                  <Star key={s} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className={`review-text text-xs text-zinc-300 leading-relaxed mb-2 italic ${expandedReview === reviewKey ? 'is-expanded' : ''}`}>
                "{rev.text}"
              </p>
              <button
                type="button"
                onClick={() => setExpandedReview(expandedReview === reviewKey ? null : reviewKey)}
                className="text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                {expandedReview === reviewKey ? 'See less' : 'See more'}
              </button>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/80">
              <div className="relative h-9 w-9 overflow-hidden rounded-full border border-emerald-500/40 bg-emerald-950/80 shadow-lg shadow-emerald-500/10">
                <img src={rev.avatar} alt={rev.name} className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="text-xs font-bold text-white tracking-tight">{rev.name}</p>
                <p className="text-[11px] text-zinc-400">{rev.role}</p>
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
}

// --- FREQUENTLY ASKED QUESTIONS ---
function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState(null);
  const questions = [
    ['How long does a project take?', 'Most projects take 2 to 6 weeks depending on scope, feedback, and integrations.'],
    ['What services do you provide?', 'We build websites, web systems, mobile apps, games, custom software, and AI-powered workflows.'],
    ['How much does a website cost?', 'Projects start at the Basic package range. We provide a written scope and fixed quote after the initial consultation.'],
    ['Can you redesign an existing website?', 'Yes. We can improve the visual design, content structure, performance, and mobile experience of an existing site.'],
    ['Do you provide maintenance?', 'Yes. Every launch includes 30 days of free fixes, with optional ongoing maintenance afterward.'],
  ];

  return (
    <section id="faq" className="py-24 max-w-4xl mx-auto px-4 sm:px-6">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">FAQ</p>
        <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">Questions, answered.</h2>
      </div>
      <div className="border-t border-zinc-800">
        {questions.map(([question, answer], index) => {
          const isOpen = openQuestion === index;
          return (
            <div key={question} className="border-b border-zinc-800">
              <button
                type="button"
                onClick={() => setOpenQuestion(isOpen ? null : index)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left text-sm font-semibold text-zinc-200 hover:text-white transition-colors"
                aria-expanded={isOpen}
              >
                <span>{question}</span>
                <span className={`faq-icon text-emerald-400 text-xl font-light ${isOpen ? 'is-open' : ''}`}>+</span>
              </button>
              <div className={`faq-answer ${isOpen ? 'is-open' : ''}`}>
                <p className="pb-5 pr-10 text-sm leading-relaxed text-zinc-400">{answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// --- PROMOTIONAL SHOWCASE BANNER ---
function PromoBanner({ onOpenChat }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 p-8 sm:p-10 relative overflow-hidden shadow-2xl">
        
        {/* Glow backdrop */}
        <div className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 glow-emerald opacity-30 blur-2xl" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <p className="text-xs font-bold text-amber-400 tracking-wider flex items-center gap-2">
              <span>&gt;&gt;&gt;</span> NOW ACCEPTING <span>&gt;&gt;&gt;</span>
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              SOFTWARE DEVELOPMENT PROJECTS!
            </h2>

            {/* Platforms pills */}
            <div className="flex flex-wrap gap-2 pt-2 text-xs font-medium text-zinc-300">
              <span className="px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/60">📱 Mobile Apps</span>
              <span className="px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/60">🖥 Desktop Software</span>
              <span className="px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/60">🌐 Web Applications</span>
              <span className="px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/60">⚡ AI Systems</span>
              <span className="px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/60">🎮 Game Dev</span>
            </div>

            <p className="text-xs text-zinc-400 pt-1 flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-400" />
              We have completed many successful projects with satisfied clients.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3">
            <button
              type="button"
              onClick={onOpenChat}
              className="btn-emerald text-xs sm:text-sm inline-flex items-center gap-2"
            >
              Start Your Project <ArrowUpRight size={16} />
            </button>
            <span className="text-[11px] text-zinc-400 font-mono-code">
              apexofchampions.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- READY TO BUILD SOMETHING GREAT? CTA ---
function CtaSection({ onOpenChat }) {
  return (
    <section className="py-24 max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight mb-8">
        Ready to build something<br />great?
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
        <button
          type="button"
          onClick={onOpenChat}
          className="btn-primary text-xs sm:text-sm inline-flex items-center gap-2"
        >
          <Mail size={15} /> Get In Touch
        </button>
        <a
          href="#projects"
          className="btn-outline text-xs sm:text-sm inline-flex items-center gap-2"
        >
          <Layers size={15} /> View My Work
        </a>
      </div>

      <p className="text-xs text-zinc-400">
        Scope and quote in 24 hours · No surprise fees later · 30 days of free fixes
      </p>
    </section>
  );
}

// --- FOOTER ---
function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 py-16 text-xs text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative h-7 w-7 overflow-hidden rounded-lg border border-emerald-500/30 bg-zinc-900 shadow-[0_0_18px_rgba(16,185,129,0.18)]">
                <img src="/images/logo.jpg" alt="AC Logo" className="h-full w-full object-cover" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white font-display">
                Apex of Champions
              </span>
            </div>
            <p className="leading-relaxed text-zinc-400">
              Websites, mobile apps, and custom software for businesses that need reliable digital solutions.
            </p>
            <div className="flex items-center gap-3 text-zinc-300">
              <a href="https://www.facebook.com/profile.php?id=61587213903017" target="_blank" rel="noreferrer" className="hover:text-emerald-400">
                Facebook
              </a>
              <span>·</span>
              <a href="mailto:apexofchampions@gmail.com" className="hover:text-emerald-400">
                Email
              </a>
              <span>·</span>
              <a href="https://wa.me/639553983149" target="_blank" rel="noreferrer" className="hover:text-emerald-400">
                WhatsApp
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white tracking-wider uppercase">Navigation</p>
            <ul className="space-y-2">
              <li><a href="#top" className="hover:text-white">&gt; Home</a></li>
              <li><a href="#projects" className="hover:text-white">&gt; Projects</a></li>
              <li><a href="#reviews" className="hover:text-white">&gt; Reviews</a></li>
              <li><a href="#pricing" className="hover:text-white">&gt; Pricing</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white tracking-wider uppercase">Services</p>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white">&gt; Web Development</a></li>
              <li><a href="#services" className="hover:text-white">&gt; Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-white">&gt; Game Development</a></li>
              <li><a href="#services" className="hover:text-white">&gt; Custom Systems & AI</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact" className="space-y-3">
            <p className="text-xs font-bold text-white tracking-wider uppercase">Contact</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={13} className="text-emerald-400" />
                <span>apexofchampions@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={13} className="text-emerald-400" />
                <span>09975096733 / 09553983149</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={13} className="text-emerald-400" />
                <span>Isulan, Sultan Kudarat, Philippines</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Martin Fowler Quote */}
        <div className="py-8 text-center border-b border-zinc-900/60 max-w-2xl mx-auto">
          <p className="italic text-zinc-300 leading-relaxed">
            "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
          </p>
          <p className="text-[11px] text-zinc-400 mt-1">— Martin Fowler</p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <p>© 2026 AC: Apex of Champions — All rights reserved.</p>
          <p className="flex items-center gap-4">
            <a href="#top" className="hover:text-zinc-300">Privacy Notice</a>
            <a href="#top" className="hover:text-zinc-300">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// --- PROJECT DETAIL MODAL ---
function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl bg-zinc-950 border border-zinc-800 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-white p-1 rounded-lg bg-zinc-900 border border-zinc-800"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div className="space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-400 border border-emerald-500/30">
            {project.category}
          </span>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm text-zinc-300 leading-relaxed">
            {project.shortDesc}
          </p>

          <div className="rounded-xl overflow-hidden border border-zinc-800">
            <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
          </div>

          <div>
            <p className="text-xs font-bold text-white uppercase tracking-wider mb-2">Technologies Used</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end gap-3 border-t border-zinc-900">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-semibold text-zinc-400 hover:text-white bg-zinc-900"
            >
              Close
            </button>
            <a
              href={`mailto:apexofchampions@gmail.com?subject=Inquiry%20about%20${encodeURIComponent(project.title)}`}
              className="btn-emerald text-xs"
            >
              Request Similar Build
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- FLOATING "ASK OUR TEAM!" ASSISTANT ---
function ChatAssistant({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Floating speech bubble and avatar */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <div className="chat-speech-bubble" aria-hidden="true">
          Ask our team!
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="chat-avatar group"
          aria-label="Ask our team"
        >
          <span className="chat-avatar-mark">
            <video
              className="chat-avatar-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
            >
              <source src="/images/animation/animation.mp4" type="video/mp4" />
            </video>
            <span className="chat-avatar-core">
              <img src="/images/logo.jpg" alt="AC Logo" className="chat-avatar-logo" />
            </span>
          </span>
          <span className="chat-online-dot" aria-label="Online" />
        </button>
      </div>

      {/* Floating Chat Drawer */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-[320px] rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl p-5 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <div className="relative h-7 w-7 overflow-hidden rounded-full border border-cyan-400/70 bg-zinc-900 shadow-[0_0_18px_rgba(34,211,238,0.2)]">
                <video
                  className="absolute inset-0 h-full w-full object-cover opacity-80"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-hidden="true"
                >
                  <source src="/images/animation/animation.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-[3px] flex items-center justify-center rounded-full bg-zinc-950/90">
                  <span className="text-[0.5rem] font-black tracking-[-0.14em] text-white">AC</span>
                </div>
              </div>
              <strong className="text-sm font-bold text-white">Inquiry</strong>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white"
            >
              <X size={16} />
            </button>
          </div>

          <p className="text-xs text-zinc-300 py-3 leading-relaxed">
            Tell us about your digital project or thesis system, and our team will get back to you within 24 hours with a scope & quote!
          </p>

          <div className="space-y-2 pt-2">
            <a
              href="https://wa.me/639553983149"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold text-white hover:bg-zinc-800 hover:border-emerald-500/40 transition-all"
            >
              <span className="flex items-center gap-2">
                <Phone size={14} className="text-emerald-400" /> WhatsApp
              </span>
              <ArrowUpRight size={14} className="text-zinc-400" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61587213903017"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold text-white hover:bg-zinc-800 hover:border-emerald-500/40 transition-all"
            >
              <span className="flex items-center gap-2">
                <MessageSquare size={14} className="text-sky-400" /> Facebook Messenger
              </span>
              <ArrowUpRight size={14} className="text-zinc-400" />
            </a>

            <a
              href="mailto:apexofchampions@gmail.com"
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-emerald-500 text-zinc-950 text-xs font-bold hover:bg-emerald-400 transition-all"
            >
              <span className="flex items-center gap-2">
                <Mail size={14} /> Direct Email Inquiry
              </span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

// --- BRAND SUMMARY MODAL ---
function BrandSummaryModal({ isOpen, onClose, onOpenChat }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div id="brandSummaryModal" role="dialog" aria-modal="true" className="brand-summary-panel">
        <div className="brand-summary-topbar">
          <button
            type="button"
            onClick={onClose}
            className="brand-back-button"
            aria-label="Back to portfolio"
          >
            <ChevronLeft size={15} />
            Back
          </button>

          <button
            type="button"
            onClick={onClose}
            className="brand-close-button"
            aria-label="Close company summary"
          >
            <X size={16} />
          </button>
        </div>

        <div className="brand-summary-layout">
          <div className="brand-summary-content">
            <div className="brand-summary-section">
              <p className="brand-summary-kicker">About us</p>
              <h3 className="brand-summary-title">AC: Apex of Champions</h3>
              <p className="brand-summary-intro">
                AC helps clients turn ideas into useful digital solutions through web systems, mobile applications, embedded projects, UI/UX design, graphics, documentation, and technology support.
              </p>
            </div>

            <div className="brand-summary-grid">
              <article className="brand-summary-card">
                <p className="brand-summary-label">AC</p>
                <h4>Flexible Like Alternating Current</h4>
                <p>AC is inspired by Alternating Current — a symbol of flexibility, adaptability, and the ability to move through multiple paths and solutions.</p>
              </article>

              <article className="brand-summary-card">
                <p className="brand-summary-label">Apex</p>
                <h4>Reaching The Highest Peak</h4>
                <p>Apex means the highest point. We keep improving, learning, and building stronger systems so every project rises toward its best version.</p>
              </article>

              <article className="brand-summary-card">
                <p className="brand-summary-label">Champions</p>
                <h4>Learning To Become Better</h4>
                <p>Champions keep learning, practicing, and growing. AC carries that mindset through teamwork, research, creativity, and commitment.</p>
              </article>
            </div>

            <div className="brand-summary-section">
              <p className="brand-summary-kicker">How we help</p>
              <h4 className="brand-summary-subheading">Built for real-world impact</h4>
              <ul className="brand-summary-list">
                <li>Clarifies project goals, features, workflows, and user needs.</li>
                <li>Helps businesses improve digital presence through websites, systems, dashboards, branding, and customer-friendly platforms.</li>
                <li>Designs clean UI/UX flows, prototypes, graphics, and visual materials.</li>
                <li>Develops web systems, mobile applications, embedded projects, portfolios, and academic technology systems.</li>
                <li>Supports students, startups, professionals, and organizations in turning ideas into polished, launch-ready solutions.</li>
              </ul>
            </div>

            <p className="brand-summary-footer">
              AC is built to rise with purpose, innovate with excellence, and grow with a champion spirit — crowned by God’s grace and committed to His glory.
            </p>
          </div>

          <div className="brand-summary-visual" aria-label="AC Apex of Champions logo panel">
            <div className="brand-summary-logo">
              <video
                className="brand-summary-video"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden="true"
              >
                <source src="/images/animation/animation.mp4" type="video/mp4" />
              </video>
              <span className="brand-summary-core">
                <span className="brand-summary-ac">AC</span>
                <span className="brand-summary-subtitle">APEX OF<br />CHAMPIONS</span>
              </span>
            </div>
          </div>
        </div>

        <div className="brand-summary-actions">
          <a href="#contact" className="btn-emerald flex-1 text-center text-xs sm:text-sm" onClick={onClose}>
            Work With AC
          </a>
          <a href="mailto:apexofchampions@gmail.com" className="btn-outline flex-1 text-center text-xs sm:text-sm" onClick={onClose}>
            Email AC
          </a>
        </div>
      </div>
    </div>
  );
}

// --- MAIN APP ROOT ---
export default function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [brandSummaryOpen, setBrandSummaryOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('main > section, footer');
    const popTargets = document.querySelectorAll(
      'main > section h1, main > section h2, main > section h3, main > section h4, main > section p, main > section button, main > section a, main > section img, main > section .dark-card, main > section .project-index'
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    sections.forEach((section) => {
      section.classList.add('reveal-on-scroll');
      observer.observe(section);
    });

    popTargets.forEach((target, index) => {
      target.classList.add('pop-up-on-scroll');
      target.style.setProperty('--pop-delay', `${(index % 8) * 55}ms`);
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 relative font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Splash Screen on load */}
      <SplashScreen />

      {/* Code Token Cursor Trail */}
      <MouseTokenTrail />
      <Navbar
        onOpenChat={() => setChatOpen(true)}
        onOpenBrandSummary={() => setBrandSummaryOpen(true)}
      />
      
      <main>
        <div className="hero-project-stage">
          <HeroSection
            onOpenChat={() => setChatOpen(true)}
            onSelectProject={(p) => setSelectedProject(p)}
          />
          <ProjectsCoverflow
            onSelectProject={(p) => setSelectedProject(p)}
          />
        </div>
        <SkillsMarquee />
        <TechnicalExpertiseSection />
        <WhatWeCanBuild
          onOpenChat={() => setChatOpen(true)}
        />
        <WorkRoadmap />
        <TeamSection />
        <ReviewsSection />
        <FaqSection />
        <PromoBanner
          onOpenChat={() => setChatOpen(true)}
        />
        <CtaSection
          onOpenChat={() => setChatOpen(true)}
        />
      </main>

      <Footer />

      {/* Modals & Drawers */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <BrandSummaryModal
        isOpen={brandSummaryOpen}
        onClose={() => setBrandSummaryOpen(false)}
        onOpenChat={() => {
          setBrandSummaryOpen(false);
          setChatOpen(true);
        }}
      />
      <ChatAssistant
        isOpen={chatOpen}
        setIsOpen={setChatOpen}
      />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
