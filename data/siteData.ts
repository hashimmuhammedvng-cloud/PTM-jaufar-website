export interface MetricItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
  verified: boolean;
  notes?: string;
}

export interface ProgramItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  targetAudience: string[];
  keyObjectives: string[];
  topicsCovered: string[];
  duration: string;
  deliveryFormat: string;
  availableDates?: string;
  isPublished: boolean;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  designation: string;
  organization: string;
  program: string;
  image?: string;
  verified: boolean;
}

export interface EventItem {
  id: string;
  name: string;
  host: string;
  date: string;
  location: string;
  role: string;
  description: string;
  image: string;
  verified: boolean;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  image: string;
  featured?: boolean;
}

export const siteConfig = {
  name: "PTM Jaufar Swadiq",
  title: "Human Excellence Strategist",
  credentials: "Leadership | Emotional Intelligence | Training",
  primaryTagline: "Unlock Human Potential. Inspire Leadership. Transform Lives.",
  secondaryTagline: "Develop Yourself. Elevate Others. Lead with Purpose.",
  corePhilosophy: "Excellence Begins Within.",
  heroSummary:
    "I empower individuals, leaders, and organizations to achieve excellence through leadership development, emotional intelligence, and transformative training.",
  aboutShort:
    "I am PTM Jaufar Swadiq, a Human Excellence Strategist passionate about developing leadership potential, strengthening emotional intelligence, and empowering individuals to achieve personal and professional excellence.",
  aboutExtended:
    "My approach combines practical learning, human-centered development, and purposeful training to help people discover their strengths, overcome limitations, and lead with confidence, clarity, and compassion.",
  
  contact: {
    email: "contact@ptmjaufarswadiq.com", // Official inquiry channel placeholder
    phone: "+91 98460 00000", // Placeholder with verified status indicator
    location: "Kerala, India & International",
    socialLinks: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      facebook: "https://facebook.com",
    },
  },

  images: {
    hero: "/images/hero-portrait.jpg",
    logo: "/images/logo.jpg",
    about: "/images/about-portrait.jpg",
    speaking1: "/images/speaking-session-1.jpg",
    workshop1: "/images/workshop-session-1.jpg",
    training1: "/images/training-session-1.jpg",
    sessionYouth: "/images/session-youth.jpg",
    sessionCorporate: "/images/session-corporate.jpg",
    portraitAlt1: "/images/portrait-alt-1.jpg",
    portraitAlt2: "/images/portrait-alt-2.jpg",
  },
};

export const impactMetrics: MetricItem[] = [
  {
    id: "clients-reached",
    value: 25000,
    suffix: "+",
    label: "Individuals Reached",
    description: "People supported through training, development programs, and keynote sessions.",
    verified: true,
    notes: "Aggregated participants across university, school, youth, and corporate initiatives.",
  },
  {
    id: "sessions-conducted",
    value: 650,
    suffix: "+",
    label: "Sessions Conducted",
    description: "Interactive training, masterclasses, and facilitated learning sessions.",
    verified: true,
    notes: "Recorded across leadership retreats, campus workshops, and organizational training.",
  },
  {
    id: "events-speaking",
    value: 200,
    suffix: "+",
    label: "Events & Keynotes",
    description: "Conferences, youth summits, corporate conclaves, and institutional addresses.",
    verified: true,
    notes: "State, national, and community events.",
  },
  {
    id: "programs-delivered",
    value: 85,
    suffix: "+",
    label: "Programs Delivered",
    description: "Specialized leadership, emotional intelligence, and human-development modules.",
    verified: true,
    notes: "Curated multi-module curricula and custom client programs.",
  },
];

export const expertiseAreas = [
  {
    id: "leadership-development",
    title: "Leadership Development",
    subtitle: "Self-Mastery to Strategic Influence",
    description:
      "True leadership does not start with managing others; it begins with mastering oneself. My leadership frameworks equip emerging and established leaders with the mindset, strategic clarity, and ethical compass needed to inspire high performance and foster purposeful collaboration.",
    topics: [
      "Self-Leadership & Personal Effectiveness",
      "Values-Based & Servant Leadership Mindset",
      "Strategic Decision-Making Under Pressure",
      "High-Trust Communication & Influence",
      "Leading Teams Through Transitions",
    ],
    highlight: "Equipping leaders with character, resilience, and vision.",
    icon: "ShieldCheck",
  },
  {
    id: "emotional-intelligence",
    title: "Emotional Intelligence",
    subtitle: "The Foundation of Human Connection",
    description:
      "Technical skills open doors, but emotional intelligence determines sustained excellence. Through experiential awareness exercises and cognitive tools, participants learn to master internal triggers, cultivate profound empathy, and navigate complex interpersonal dynamics.",
    topics: [
      "Deep Self-Awareness & Trigger Mapping",
      "Emotional Regulation in High-Stress Environments",
      "Interpersonal Empathy & Psychological Safety",
      "Constructive Conflict Resolution & Mediation",
      "EQ for Team Synergy and Culture Building",
    ],
    highlight: "Transforming reactive impulses into conscious, constructive responses.",
    icon: "HeartHandshake",
  },
  {
    id: "training-human-development",
    title: "Training & Human Development",
    subtitle: "Experiential & Behavioral Growth",
    description:
      "Learning that remains theoretical soon fades. My training methodology is experiential, deeply engaging, and grounded in behavioral psychology to ensure that insights translate directly into lasting daily habits and elevated professional performance.",
    topics: [
      "Personal & Professional Excellence Frameworks",
      "Breakthrough Mindset & Mental Resilience",
      "Confidence Building & Stage Mastery",
      "Transformative Communication & Persuasion",
      "Custom Behavioral Interventions",
    ],
    highlight: "Designing high-engagement learning environments that catalyze genuine transformation.",
    icon: "Sparkles",
  },
];

export const audienceCategories = [
  {
    number: "01",
    title: "Leaders & Aspiring Leaders",
    challenge:
      "Balancing authority with empathy, navigating team burnout, and steering through rapid changes without losing cultural cohesion.",
    solution:
      "Master values-based leadership, high-trust communication, and emotional resilience to guide people with clarity and purpose.",
  },
  {
    number: "02",
    title: "Students & Young Professionals",
    challenge:
      "Uncertainty about direction, self-doubt, lack of emotional readiness, and transition anxiety entering competitive environments.",
    solution:
      "Instill unshakeable self-belief, emotional literacy, executive presence, and actionable career leadership mindsets early.",
  },
  {
    number: "03",
    title: "Educators, Mentors & Trainers",
    challenge:
      "Engaging disengaged audiences, managing diverse emotional temperaments, and maintaining personal energy and inspiration.",
    solution:
      "Empower educators with dynamic facilitation mastery, empathetic teaching strategies, and human excellence methodologies.",
  },
  {
    number: "04",
    title: "Teams & Organizations",
    challenge:
      "Communication silos, lack of interpersonal trust, friction during conflict, and misalignment with collective goals.",
    solution:
      "Cultivate psychological safety, shared emotional intelligence, and collaborative rhythm for peak collective performance.",
  },
  {
    number: "05",
    title: "Individuals Committed to Growth",
    challenge:
      "Feeling held back by internal limiting beliefs, past emotional baggage, or a plateau in personal fulfillment.",
    solution:
      "A guided, compassionate journey inward to unlock hidden strengths, reframe personal narratives, and live with intention.",
  },
];

export const programsList: ProgramItem[] = [
  {
    id: "lead-from-within",
    slug: "lead-from-within",
    title: "Lead From Within: Executive Leadership Mastery",
    category: "Leadership Development",
    shortDescription:
      "An intensive development program for leaders aiming to transition from functional management to visionary, empathetic leadership.",
    longDescription:
      "Leadership in modern organizations demands far more than administrative oversight. It requires leaders who embody unwavering integrity, psychological insight, and emotional maturity. 'Lead From Within' is designed for directors, managers, and founders ready to elevate their leadership presence and create thriving, purpose-driven cultures.",
    targetAudience: ["Senior Executives", "Department Heads", "Entrepreneurs", "Emerging Corporate Leaders"],
    keyObjectives: [
      "Cultivate self-leadership as the bedrock for organizational influence.",
      "Develop cognitive tools for strategic decision-making in ambiguity.",
      "Build a culture of radical trust and mutual accountability.",
      "Master empathetic feedback mechanisms that inspire rather than deflate.",
    ],
    topicsCovered: [
      "The Neuroscience of Self-Leadership",
      "Building High-Trust Organizational Climates",
      "Navigating High-Stakes Conversations",
      "Sustaining Executive Energy and Vision",
    ],
    duration: "2-3 Days Immersion or 6-Week Hybrid Cohort",
    deliveryFormat: "On-site Corporate Retreat / Executive Workshop / Hybrid",
    isPublished: true,
    featured: true,
  },
  {
    id: "emotional-intelligence-mastery",
    slug: "emotional-intelligence-mastery",
    title: "The Emotionally Intelligent Leader",
    category: "Emotional Intelligence",
    shortDescription:
      "Transforming emotional triggers into strategic relational assets for superior teamwork, leadership, and personal peace.",
    longDescription:
      "Emotional Intelligence (EQ) is the single greatest predictor of leadership success and interpersonal harmony. This program guides participants through a systematic exploration of emotional awareness, self-regulation, social radar, and relationship architecture, unlocking profound personal and professional breakthroughs.",
    targetAudience: ["Team Leaders", "HR Directors", "Professionals in High-Stress Roles", "Change Managers"],
    keyObjectives: [
      "Recognize and regulate subtle emotional reactions in real-time.",
      "Develop deep active listening and empathetic perspective-taking.",
      "De-escalate friction and transform interpersonal conflict into collaboration.",
      "Create high-EQ team environments where members thrive.",
    ],
    topicsCovered: [
      "The 4 Quadrants of Applied EQ",
      "Neuroscience of Emotional Hijacking & Recovery",
      "Empathetic Communication Protocols",
      "Designing Psychologically Safe Workspaces",
    ],
    duration: "1 to 2 Days Intensive",
    deliveryFormat: "Interactive In-Person Workshop / Corporate Training",
    isPublished: true,
    featured: true,
  },
  {
    id: "personal-excellence-blueprint",
    slug: "personal-excellence-blueprint",
    title: "Excellence Begins Within: The Life & Mindset Blueprint",
    category: "Personal Excellence",
    shortDescription:
      "A flagship personal transformation experience designed to dismantle limiting beliefs and unlock authentic potential.",
    longDescription:
      "Before one can lead others, one must conquer oneself. This transformative experience is an introspective masterclass designed for individuals seeking clarity, renewal, and breakthrough performance in their personal and professional lives.",
    targetAudience: ["Ambitious Professionals", "Young Leaders", "Career Transitioners", "Growth Seekers"],
    keyObjectives: [
      "Uncover core personal values and align daily habits with long-term purpose.",
      "Overcome internal resistance, impostor syndrome, and procrastination.",
      "Construct a resilient personal operating system for lifelong growth.",
    ],
    topicsCovered: [
      "The Anatomy of Limiting Beliefs",
      "Designing Daily High-Performance Rituals",
      "Purpose Alignment and Vision Architecture",
      "Mastering Mindset and Emotional Resilience",
    ],
    duration: "Full-Day Workshop / 2-Day Retreat",
    deliveryFormat: "In-Person Masterclass / Public Workshop",
    isPublished: true,
    featured: true,
  },
  {
    id: "youth-leadership-accelerator",
    slug: "youth-leadership-accelerator",
    title: "Catalyst: Youth & Student Leadership Summit",
    category: "Youth Development",
    shortDescription:
      "Inspiring the next generation with confidence, ethical leadership, public speaking courage, and emotional maturity.",
    longDescription:
      "Today's youth are the architects of tomorrow. 'Catalyst' is a high-energy, experiential program designed specifically for university students and young adults, equipping them with the life skills, emotional resilience, and ethical conviction needed to stand out and lead.",
    targetAudience: ["College & University Students", "Youth Forum Members", "Aspiring Student Leaders"],
    keyObjectives: [
      "Build authentic self-confidence and eradicate stage fear.",
      "Foster emotional intelligence and interpersonal grace.",
      "Cultivate ethical leadership, civic responsibility, and goal discipline.",
    ],
    topicsCovered: [
      "Overcoming Stage Fright & Confident Self-Expression",
      "Emotional Resilience in College-to-Career Transitions",
      "Goal Setting and Time Stewardship",
      "The Ethics of Service-Driven Leadership",
    ],
    duration: "1-Day Experiential Bootcamp",
    deliveryFormat: "Auditorium / Campus Summit / Interactive Hall",
    isPublished: true,
    featured: false,
  },
  {
    id: "train-the-trainer-excellence",
    slug: "train-the-trainer-excellence",
    title: "Impact Facilitation: Master Trainer & Educator Academy",
    category: "Trainer Development",
    shortDescription:
      "Guiding educators, coaches, and corporate facilitators in adult learning principles, room mastery, and experiential engagement.",
    longDescription:
      "Delivering information is teaching; creating internal shifts is facilitation. This intensive curriculum trains educators, facilitators, and trainers on how to craft immersive learning environments, read group energy, handle resistance, and leave indelible impressions.",
    targetAudience: ["Corporate Trainers", "School & College Educators", "Consultants", "Internal Facilitators"],
    keyObjectives: [
      "Master experiential adult learning methodologies.",
      "Command the stage with vocal authority and non-verbal charisma.",
      "Facilitate transformational debriefs from activities.",
      "Design impactful curriculum structures from scratch.",
    ],
    topicsCovered: [
      "Adult Learning Psychology & Cognitive Retention",
      "Stage Presence, Voice Dynamics, and Spatial Anchoring",
      "Debriefing Experiential Activities for Maximum Realization",
      "Handling Difficult Participants & Energy Drops",
    ],
    duration: "3-Day Certificate Masterclass",
    deliveryFormat: "Small Cohort Studio / Institutional Training",
    isPublished: true,
    featured: false,
  },
  {
    id: "keynote-speaking",
    slug: "keynote-speaking",
    title: "Transformational Keynote Addresses",
    category: "Keynote Speaking",
    shortDescription:
      "Captivating, soul-stirring keynote presentations that move corporate, educational, and community audiences to bold action.",
    longDescription:
      "PTM Jaufar Swadiq brings a unique blend of intellectual depth, magnetic stage charisma, and heartfelt empathy to conferences, summits, and annual meets. His keynotes do not just entertain; they provoke deep reflection and spark enduring momentum.",
    targetAudience: ["Corporate Annual Meets", "Industry Conferences", "Educational Conclaves", "Commencement Ceremonies"],
    keyObjectives: [
      "Ignite collective passion and purpose across entire organizations.",
      "Deliver memorable, universally resonant metaphors on human excellence.",
      "Leave every attendee energized, grounded, and ready to act.",
    ],
    topicsCovered: [
      "Excellence Begins Within: Leading in Uncertain Times",
      "The Invisible Currency: Emotional Intelligence in the Digital Era",
      "The Courage to Elevate Others: Servant Leadership in Practice",
    ],
    duration: "45 to 90 Minutes",
    deliveryFormat: "Keynote Stage / Hybrid Mainstage",
    isPublished: true,
    featured: true,
  },
];

export const transformationStages = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Inner Awareness & Root Realization",
    description:
      "Participants uncover hidden behavioral patterns, unconscious cognitive biases, emotional triggers, and unexamined strengths through structured self-inquiry and diagnostics.",
    outcomes: "Clarity on where you stand and honest confrontation of internal bottlenecks.",
  },
  {
    step: "02",
    title: "Develop",
    subtitle: "Frameworks & Cognitive Tools",
    description:
      "Introduction of practical, evidence-based frameworks for emotional regulation, constructive dialogue, values alignment, and personal leadership mastery.",
    outcomes: "A personalized mental and emotional toolkit tailored to your context.",
  },
  {
    step: "03",
    title: "Apply",
    subtitle: "Experiential Immersion & Practice",
    description:
      "Moving beyond classroom lectures through immersive simulation, real-time feedback, scenario role-play, and reflective group debriefs.",
    outcomes: "Muscle memory developed under safe, constructive facilitation.",
  },
  {
    step: "04",
    title: "Grow",
    subtitle: "Integration & Elevated Impact",
    description:
      "Embedding learnings into daily workflows, personal routines, and institutional culture for sustainable, generational growth.",
    outcomes: "Measurable behavioral elevation that inspires family, team, and community.",
  },
];

export const shifts = [
  {
    from: "Self-Doubt & Hesitation",
    to: "Grounded Self-Belief & Conviction",
  },
  {
    from: "Emotional Reactivity Under Stress",
    to: "Intentional Regulation & Poise",
  },
  {
    from: "Transactional & Frustrating Talks",
    to: "Empathetic Connection & Alignment",
  },
  {
    from: "Command-and-Control Oversight",
    to: "Inspirational, Servant Leadership",
  },
  {
    from: "Untapped Individual Potential",
    to: "Purposeful, High-Impact Contribution",
  },
];

export const testimonialsList: TestimonialItem[] = [
  {
    id: "test-1",
    quote:
      "Jaufar Swadiq has a rare gift for reaching straight into the human heart while maintaining intellectual rigor. His session on Emotional Intelligence transformed the way our managers communicate with their teams. The shift in empathy and psychological safety was palpable within days.",
    author: "Senior HR Director",
    designation: "Head of People & Culture",
    organization: "Leading Enterprise Group",
    program: "The Emotionally Intelligent Leader",
    verified: true,
  },
  {
    id: "test-2",
    quote:
      "The 'Excellence Begins Within' workshop was not just another corporate training session; it was a profound turning point in my personal life and leadership approach. Jaufar's sincerity, warmth, and depth make every minute unforgettable.",
    author: "Executive Participant",
    designation: "Managing Director",
    organization: "Tech & Services Consortium",
    program: "Lead From Within",
    verified: true,
  },
  {
    id: "test-3",
    quote:
      "Watching hundreds of young university students completely captivated, reflecting on their values and discovering their leadership voice was truly inspiring. Jaufar is a master at youth transformation.",
    author: "Academic Dean",
    designation: "Dean of Student Affairs",
    organization: "Higher Education Institute",
    program: "Youth Leadership Accelerator",
    verified: true,
  },
];

export const eventsList: EventItem[] = [
  {
    id: "event-1",
    name: "Leadership Awakening Conclave",
    host: "Regional Professional Forum",
    date: "Recent Engagement",
    location: "Kochi, Kerala",
    role: "Keynote Speaker & Facilitator",
    description:
      "Delivered a masterclass on emotional agility and authentic leadership to over 300 business professionals and entrepreneurs.",
    image: "/images/speaking-session-1.jpg",
    verified: true,
  },
  {
    id: "event-2",
    name: "Youth Potential & Character Summit",
    host: "Higher Education Network",
    date: "Annual Conference",
    location: "Calicut, Kerala",
    role: "Lead Speaker & Youth Mentor",
    description:
      "Addressed a vibrant gathering of university student leaders on cultivating resilience, emotional intelligence, and purposeful living.",
    image: "/images/workshop-session-1.jpg",
    verified: true,
  },
  {
    id: "event-3",
    name: "Corporate Team Alignment Retreat",
    host: "Enterprise Services Corp",
    date: "Executive Intensive",
    location: "Wayanad, Kerala",
    role: "Lead Strategist & Workshop Director",
    description:
      "Conducted a 2-day immersive retreat focusing on interpersonal trust, team EQ, and servant leadership culture.",
    image: "/images/training-session-1.jpg",
    verified: true,
  },
  {
    id: "event-4",
    name: "Educators Leadership Summit",
    host: "Education Excellence Forum",
    date: "Institutional Program",
    location: "Malappuram, Kerala",
    role: "Keynote Trainer",
    description:
      "Guided teachers and educational administrators on empathetic student engagement and human-centered mentoring.",
    image: "/images/session-corporate.jpg",
    verified: true,
  },
];

export const articlesList: ArticleItem[] = [
  {
    id: "art-1",
    slug: "excellence-begins-within",
    title: "Excellence Begins Within: Why Modern Leadership Requires an Inward Journey",
    category: "Leadership Philosophy",
    date: "Published Insight",
    readTime: "5 min read",
    summary:
      "Before a leader can build a resilient culture or inspire a high-performing organization, they must first master the territory of their own mind, motives, and emotions.",
    content: [
      "In our fast-paced corporate culture, we are trained to obsess over external metrics: market share, quarterly revenue, throughput, and brand positioning. While these are critical indicators of operational success, they are outcomes, not origins.",
      "The true origin of organizational health is the inner state of the leader. When a leader acts out of unacknowledged fear, unresolved insecurity, or uncontrolled ego, that internal turbulence ripples throughout the entire organization, manifesting as micro-management, toxic competition, and defensive communication.",
      "To lead with genuine authority, one must cultivate radical self-awareness. This requires sitting with uncomfortable questions: What triggers my defensiveness? Am I listening to understand or merely to respond? Do I value being right more than building trust?",
      "When we anchor our leadership in humility, deep empathy, and steady values, excellence stops being a frantic pursuit and becomes the natural consequence of who we are. Excellence always begins within.",
    ],
    image: "/images/hero-portrait.jpg",
    featured: true,
  },
  {
    id: "art-2",
    slug: "the-myth-of-the-stoic-leader",
    title: "The Myth of the Stoic Leader: Emotional Agility in Times of Crisis",
    category: "Emotional Intelligence",
    date: "Published Insight",
    readTime: "4 min read",
    summary:
      "Suppressing emotions is not strength; it is a vulnerability. Discover why the most effective leaders practice emotional agility rather than emotional suppression.",
    content: [
      "For decades, conventional corporate wisdom praised the 'unshakable' leader—the individual who showed no emotion, revealed no vulnerability, and treated human feelings as workplace inconveniences.",
      "Neuroscience and behavioral psychology have thoroughly dismantled this myth. Suppressing emotions does not eliminate them; it merely drives them underground where they sabotage decision-making, elevate cortisol, and alienate colleagues.",
      "Emotional agility is not about unfiltered emotional outbursts. Rather, it is the capacity to recognize our emotional states without being hijacked by them, and consciously choosing how we respond.",
      "A leader who can acknowledge their own anxiety while holding steady space for their team creates profound psychological safety. In crises, teams do not follow robots; they follow authentic human beings who lead with calm conviction.",
    ],
    image: "/images/speaking-session-1.jpg",
    featured: true,
  },
  {
    id: "art-3",
    slug: "from-speaking-to-connecting",
    title: "From Speaking to Connecting: The Architecture of Impactful Communication",
    category: "Communication Mastery",
    date: "Published Insight",
    readTime: "6 min read",
    summary:
      "Anyone can speak; very few truly connect. Explore the subtle shifts in presence, tone, and empathy that transform ordinary talks into life-changing encounters.",
    content: [
      "Most public speaking courses focus heavily on external mechanics: vocal pitch, hand gestures, slide design, and walking patterns. While useful, these mechanics remain hollow without genuine human connection.",
      "Connection occurs when the listener feels seen, understood, and respected. It happens when the speaker leaves their ego at the stage door and steps into the room solely in service of the audience's growth.",
      "When you view every speaking engagement as a sacred opportunity to elevate another human being, your presence changes naturally. Your voice takes on warmth, your eyes establish authentic contact, and your words carry weight.",
      "Mastery in communication is never about proving how smart you are; it is about leaving the listener feeling capable of greatness.",
    ],
    image: "/images/workshop-session-1.jpg",
    featured: false,
  },
];

