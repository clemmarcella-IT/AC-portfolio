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
    avatar: 'MA',
    text: 'Great work! My web app works smoothly and everything functions well. Very professional and easy to work with. I would definitely recommend this developer!',
  },
  {
    rating: 5,
    name: 'Jennifer Pailona',
    role: 'Client',
    avatar: 'JP',
    text: 'This team is genius! One of my hardest system problems was solved quickly. Thank you so much! Highly recommended! Rate 5 stars here! Very easy to negotiate with.',
  },
  {
    rating: 5,
    name: 'Hazel Joy Mangcucang',
    role: 'Client',
    avatar: 'HM',
    text: 'Highly recommended! Mabilis kausap, very detailed, and super patient sa pag-handle ng requirements and processes. Mabait and straightforward sa transactions kaya hassle-free.',
  },
  {
    rating: 5,
    name: 'Andrea Zarriena',
    role: 'Client',
    avatar: 'AZ',
    text: 'To be honest, I was nervous at first because I thought my research and system concerns were too complicated. But they turned out to be really approachable and supportive throughout!',
  },
  {
    rating: 5,
    name: 'Emma Marmoles',
    role: 'Client',
    avatar: 'EM',
    text: '11/10 honestly! Our system was rushed because of the upcoming thesis defense, but they managed to finish it agad without compromising quality. Very responsive and kind!',
  },
  {
    rating: 5,
    name: 'Maegan Ancheta',
    role: 'Student / Capstone',
    avatar: 'MA',
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
      <div className="flex items-center gap-2.5">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400 font-display text-lg shadow-lg shadow-emerald-500/10">
          AC
        </div>
        <span className="text-2xl font-bold tracking-tight text-white font-display">
          AC<span className="text-emerald-400">desk</span>
        </span>
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
function Navbar({ onOpenChat }) {
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
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400 font-display text-sm tracking-tight group-hover:scale-105 transition-transform">
            AC
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-display">
            AC<span className="text-emerald-400">desk</span>
          </span>
        </a>

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
    const handleScroll = () => {
      if (!heroRef.current) return;
      const shift = Math.min(window.scrollY * 0.08, 36);
      heroRef.current.style.setProperty('--hero-shift', `${shift}px`);
      heroRef.current.style.setProperty('--hero-fade', `${Math.min(window.scrollY / 700, 0.45)}`);
      heroRef.current.style.setProperty('--hero-blur', `${Math.min(window.scrollY / 180, 5)}px`);
      heroRef.current.style.setProperty('--hero-content-opacity', `${Math.max(0.1, 1 - window.scrollY / 420)}`);
      heroRef.current.style.setProperty('--hero-content-shift', `${Math.min(window.scrollY * -0.12, -42)}px`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} id="top" className="hero-section relative pt-28 sm:pt-36 pb-20 lg:pb-32 overflow-hidden">
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
              <span className="font-semibold text-zinc-200">AC: Apex of Champions</span>
              <span>·</span>
              <span>Full Stack Development Team</span>
              <span>·</span>
              <span className="flex items-center gap-1 text-zinc-300">
                <MapPin size={13} className="text-emerald-400" />
                Isulan, Sultan Kudarat
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

  return (
    <section id="projects" className="py-20 lg:py-28 relative overflow-hidden">
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
        <div className={`coverflow-track ${isPaused ? 'is-paused' : ''}`}>
          {carouselProjects.map((project, index) => {
            return (
              <div
                key={`${project.id}-${index}`}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onFocus={() => setIsPaused(true)}
                onBlur={() => setIsPaused(false)}
                onClick={() => onSelectProject(project)}
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
          <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl p-2 flex flex-col justify-end">
            
            {/* Lead Image */}
            <img
              src="/images/ken.png"
              alt="Lead Tech"
              className="absolute inset-0 w-full h-full object-cover object-top filter grayscale contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

            {/* Floating Orbit Badges */}
            <div className="orbit-badge-1 absolute top-6 left-4 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-[11px] text-zinc-300 flex items-center gap-1.5 shadow-lg">
              <Monitor size={12} className="text-emerald-400" /> Web
            </div>
            <div className="orbit-badge-2 absolute top-16 right-4 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-[11px] text-zinc-300 flex items-center gap-1.5 shadow-lg">
              <Smartphone size={12} className="text-emerald-400" /> Mobile
            </div>
            <div className="orbit-badge-3 absolute bottom-28 left-4 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-[11px] text-zinc-300 flex items-center gap-1.5 shadow-lg">
              <Gamepad2 size={12} className="text-emerald-400" /> Game
            </div>
            <div className="orbit-badge-4 absolute bottom-24 right-4 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-[11px] text-zinc-300 flex items-center gap-1.5 shadow-lg">
              <Sparkles size={12} className="text-emerald-400" /> AI Systems
            </div>

            {/* Bottom Mini Stats Inside Frame */}
            <div className="relative z-10 grid grid-cols-4 gap-1 pt-3 border-t border-white/10 text-center bg-black/60 backdrop-blur-md rounded-xl p-2">
              <div>
                <p className="text-base font-bold text-white font-display">30+</p>
                <p className="text-[9px] text-zinc-400 leading-tight">Projects Completed</p>
              </div>
              <div>
                <p className="text-base font-bold text-white font-display">30</p>
                <p className="text-[9px] text-zinc-400 leading-tight">Total Reviews</p>
              </div>
              <div>
                <p className="text-base font-bold text-white font-display">4+</p>
                <p className="text-[9px] text-zinc-400 leading-tight">Years Experience</p>
              </div>
              <div>
                <p className="text-base font-bold text-emerald-400 font-display">99%</p>
                <p className="text-[9px] text-zinc-400 leading-tight">Client Satisfaction</p>
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
  return (
    <section id="roadmap" className="py-24 bg-zinc-950/50 border-t border-zinc-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">Process</p>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            How We'll Work Together.
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Central Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-zinc-700 to-emerald-500 -translate-x-1/2" />

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
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-zinc-950 border-2 border-emerald-400 flex items-center justify-center text-xs font-bold text-emerald-400 z-10 shadow-lg font-mono-code">
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
                    <div className="dark-card p-6 border-zinc-800/90 hover:border-emerald-500/40">
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
  const [scrollPos, setScrollPos] = useState(0);
  const railRef = useRef(null);

  const scroll = (direction) => {
    if (!railRef.current) return;
    const distance = 300;
    railRef.current.scrollBy({
      left: direction === 'next' ? distance : -distance,
      behavior: 'smooth',
    });
  };

  return (
    <section id="team" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">Talent</p>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            Meet Our Team
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scroll('prev')}
            className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Previous Member"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scroll('next')}
            className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Next Member"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Team Slider Track */}
      <div
        ref={railRef}
        className="flex gap-5 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className="flex-none w-[240px] sm:w-[260px] dark-card rounded-2xl overflow-hidden group snap-start border-zinc-800/90"
          >
            {/* Grayscale Portrait Frame */}
            <div className="aspect-[4/5] bg-zinc-900 overflow-hidden relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
            </div>

            {/* Member Details */}
            <div className="p-4 bg-zinc-950">
              <div className="flex items-center gap-1.5 mb-1">
                <h3 className="text-sm font-bold text-white tracking-tight truncate">
                  {member.name}
                </h3>
                <span className="text-sky-400 shrink-0" title="Verified Member">
                  <CheckCircle2 size={14} className="fill-sky-400 text-zinc-950" />
                </span>
              </div>
              <p className="text-xs text-zinc-400 truncate">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- SERVICE PACKAGES (PRICING TIERS) ---
function ServicePackages({ onOpenChat }) {
  return (
    <section id="pricing" className="py-24 bg-zinc-950/60 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">PRICING</p>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight mb-3">
            Service Packages
          </h2>
          <p className="text-sm text-zinc-400">
            Choose the package that fits your project and budget.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {pricingPlans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-7 flex flex-col justify-between relative transition-all duration-300 ${
                plan.highlight
                  ? 'bg-zinc-900/90 border-2 border-emerald-500 shadow-2xl shadow-emerald-950/40 md:-translate-y-2'
                  : 'bg-zinc-950 border border-zinc-800/90 hover:border-zinc-700'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-500 text-zinc-950 text-[11px] font-bold tracking-wider">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white tracking-tight">{plan.name}</h3>
                  <p className="text-xs text-zinc-400">{plan.subtitle}</p>
                </div>

                {/* Price Display */}
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                    {plan.price}
                  </span>
                  <span className="text-sm text-zinc-400 font-medium">
                    {plan.priceRange}
                  </span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed mb-6">
                  {plan.desc}
                </p>

                {/* Features List */}
                <div className="space-y-3 pt-4 border-t border-zinc-800 text-xs">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-zinc-300">
                      <Check size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Button */}
              <div className="pt-8">
                <button
                  type="button"
                  onClick={onOpenChat}
                  className={`w-full py-2.5 rounded-full text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                    plan.highlight
                      ? 'bg-white text-zinc-950 hover:bg-zinc-100 hover:scale-[1.02]'
                      : 'bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800'
                  }`}
                >
                  {plan.cta} <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
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
              <div className="w-8 h-8 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-bold flex items-center justify-center">
                {rev.avatar}
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
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400 font-display text-sm">
                AC
              </div>
              <span className="text-lg font-bold tracking-tight text-white font-display">
                AC<span className="text-emerald-400">desk</span>
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
          <div className="space-y-3">
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
          <span className="chat-avatar-mark">AC</span>
          <span className="chat-online-dot" aria-label="Online" />
        </button>
      </div>

      {/* Floating Chat Drawer */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-[320px] rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl p-5 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <strong className="text-sm font-bold text-white">AC Inquiry Desk</strong>
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

// --- MAIN APP ROOT ---
export default function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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
      <Navbar onOpenChat={() => setChatOpen(true)} />
      
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
        <WhatWeCanBuild
          onOpenChat={() => setChatOpen(true)}
        />
        <WorkRoadmap />
        <TeamSection />
        <ServicePackages
          onOpenChat={() => setChatOpen(true)}
        />
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
      <ChatAssistant
        isOpen={chatOpen}
        setIsOpen={setChatOpen}
      />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
