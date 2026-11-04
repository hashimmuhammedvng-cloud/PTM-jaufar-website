export interface MetricItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  topics: string[];
}

export interface AudienceItem {
  number: string;
  target: string;
  description: string;
  badge: string;
  image: string;
}

export interface WhatYouDoSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  image: string;
}

export const siteConfig = {
  name: "PTM Jaufar Swadiq",
  title: "Human Excellence Strategist",
  pillars: "Leadership | Emotional Intelligence | Training",
  primaryTagline: "Unlock Human Potential. Inspire Leadership. Transform Lives.",
  secondaryTagline: "Develop Yourself. Elevate Others. Lead with Purpose.",
  corePhilosophy: "Excellence Begins Within.",

  // Exact Hero Copy
  heroParagraphs: [
    "I empower individuals, leaders, and organizations to achieve excellence through leadership development, emotional intelligence, and transformative training.",
    "I believe that exceptional leadership begins with self-awareness, thrives on emotional intelligence, and creates lasting impact through purposeful action.",
    "My mission is to develop people who lead with confidence, connect with empathy, and inspire meaningful change.",
  ],

  // 1. Powerful Hook
  powerfulHook: {
    headline: "Unlock Human Potential. Inspire Leadership. Transform Lives.",
    body: "Great leadership begins with self-awareness, grows through emotional intelligence, and creates a lasting impact through purposeful action. The journey to excellence starts within.",
  },

  // 3. Who You Are (About Page Section)
  whoYouAre: {
    title: "Meet PTM Jaufar Swadiq",
    paragraphs: [
      "I am PTM Jaufar Swadiq, a Human Excellence Strategist passionate about developing leadership potential, strengthening emotional intelligence, and empowering individuals to achieve personal and professional excellence.",
      "My approach combines practical learning, human-centered development, and purposeful training to help people discover their strengths, overcome limitations, and lead with confidence, clarity, and compassion.",
    ],
    highlights: [
      "Leadership Development & Executive Mentoring",
      "Emotional Intelligence & Interpersonal Mastery",
      "Transformational Campus & Corporate Workshops",
    ],
  },

  // 4. What You Do (Interactive Slide Section)
  whatYouDo: {
    title: "Developing People. Strengthening Leaders. Creating Impact.",
    description:
      "Through leadership development, emotional intelligence programs, and transformative training, I help individuals and organizations build the mindset, skills, and behaviours needed for sustainable growth. My work focuses on turning awareness into action, potential into performance, and leadership into a meaningful influence.",
    slides: [
      {
        id: "developing-people",
        title: "Developing People",
        subtitle: "Human Potential & Emotional Intelligence",
        description:
          "Nurturing self-awareness, emotional resilience, and breakthrough mindsets to help individuals overcome limiting beliefs and reach their fullest personal capability.",
        points: [
          "Cultivating deep emotional self-regulation",
          "Dismantling imposter syndrome and self-doubt",
          "Building unshakeable personal confidence",
        ],
        image: "/images/teamwork-fistbump.png",
      },
      {
        id: "strengthening-leaders",
        title: "Strengthening Leaders",
        subtitle: "Values-Based & Servant Leadership",
        description:
          "Transforming managers into visionary leaders who inspire high-trust cultures, navigate high-stakes ambiguity, and lead with empathy and moral clarity.",
        points: [
          "Strategic decision-making under stress",
          "Leading high-performance, cohesive teams",
          "High-trust communication and authentic influence",
        ],
        image: "/images/strengthening-leaders.png",
      },
      {
        id: "creating-impact",
        title: "Creating Impact",
        subtitle: "Sustainable Organizational Transformation",
        description:
          "Moving beyond fleeting motivation to embed lasting behavioural elevation across teams, educational institutions, and entire communities.",
        points: [
          "Translating classroom realizations into daily habits",
          "Fostering psychological safety and collaboration",
          "Inspiring multi-generational positive change",
        ],
        image: "/images/creating-impact.jpg",
      },
    ],
  },

  // 5. Who You Help (Interactive 3D Coverflow Carousel)
  whoYouHelp: {
    badge: "WHO YOU HELP",
    title: "Empowering People Who Aspire to Grow",
    subtitle: "Tailored human excellence interventions across every stage of personal & organizational growth.",
    audiences: [
      {
        number: "01",
        target: "Leaders and Aspiring Leaders",
        description: "Enhancing leadership effectiveness, ethical vision, strategic decision-making, and leading teams with empathy.",
        badge: "Leadership",
        image: "/images/who-leaders.png",
      },
      {
        number: "02",
        target: "Students and Young Professionals",
        description: "Preparing the next generation to lead with confidence, emotional maturity, life clarity, and moral purpose.",
        badge: "Next-Gen",
        image: "/images/who-students.png",
      },
      {
        number: "03",
        target: "Educators and Facilitators",
        description: "Empowering educators, teachers, and trainers to inspire, influence, and connect through room mastery.",
        badge: "Facilitators",
        image: "/images/who-educators.png",
      },
      {
        number: "04",
        target: "Teams and Organizations",
        description: "Strengthening interpersonal trust, psychological safety, cohesive collaboration, and sustainable high performance.",
        badge: "Enterprises",
        image: "/images/who-teams.png",
      },
      {
        number: "05",
        target: "Individuals & Growth Seekers",
        description: "Committed to personal transformation, overcoming self-doubt, building emotional intelligence, and human excellence.",
        badge: "Growth Seekers",
        image: "/images/who-individuals.png",
      },
    ],
  },

  // 6. Transformation
  transformation: {
    title: "From Potential to Purposeful Performance",
    paragraphs: [
      "My mission is to help people move from self-doubt to self-confidence, from emotional reactions to emotional intelligence, and from managing people to inspiring them.",
      "Through practical insights and meaningful learning experiences, individuals can develop greater self-awareness, communicate more effectively, build stronger relationships, make better decisions, and become leaders who create positive and lasting change.",
    ],
    closingMotto:
      "The ultimate goal is simple: to help people become better versions of themselves and bring out the best in others.",
  },

  // 7. Topics / Expertise
  expertiseList: [
    {
      id: "leadership-development",
      title: "Leadership Development",
      topics: [
        "Self-leadership and personal effectiveness",
        "Leadership mindset and decision-making",
        "Communication, influence, and team leadership",
        "Servant leadership and values-based leadership",
      ],
    },
    {
      id: "emotional-intelligence",
      title: "Emotional Intelligence",
      topics: [
        "Self-awareness and emotional regulation",
        "Empathy and interpersonal understanding",
        "Relationship management and conflict resolution",
        "Emotional intelligence in leadership and teamwork",
      ],
    },
    {
      id: "training-human-development",
      title: "Training and Human Development",
      topics: [
        "Personal and professional excellence",
        "Mindset development and confidence building",
        "Communication and interpersonal skills",
        "Experiential learning and behavioural development",
      ],
    },
  ],

  // 8. Call to Action
  callToAction: {
    title: "Are You Ready to Unlock Human Excellence?",
    paragraph:
      "Whether you want to develop confident leaders, build emotionally intelligent teams, or inspire individuals to reach their full potential, let us create a meaningful journey of growth and transformation together.",
    motto: "Let's develop people, elevate leadership, and create a lasting impact.",
    invitation:
      "Connect with PTM Jaufar Swadiq to explore leadership programs, emotional intelligence workshops, and customized training opportunities.",
  },

  contact: {
    email: "contact@ptmjaufarswadiq.com",
    whatsapp: "", // Configurable: Add your final WhatsApp phone number here (e.g. "+919876543210")
    location: "Kerala, India & International",
  },

  // Learning & Course Platform Subdomain (Configurable: e.g. https://learn.hujixglobal.com)
  coursesUrl: "https://learn.hujixglobal.com",

  socialLinks: {
    instagram: "https://www.instagram.com/ptmjaufarsadiq?mdxt=dHY4MDJrNmJkaGh4",
    facebook: "https://www.facebook.com/share/1bQdvcFBfz/",
    linkedin: "https://linkedin.com",
    youtube: "https://www.youtube.com/@PTMJaufarSadiq",
  },

  // Foundation Pillars (About Page)
  foundation: [
    {
      id: "vision",
      title: "Vision",
      description:
        "Empowering individuals and organizations by unlocking human excellence, emotional agility, and transformative leadership.",
      icon: "Eye",
    },
    {
      id: "mission",
      title: "Mission",
      description:
        "Catalyzing sustainable personal and professional growth through practical learning, high-trust cultures, and values-based action.",
      icon: "Target",
    },
    {
      id: "purpose",
      title: "Purpose",
      description:
        "Cultivating emotional maturity, deep empathy, and authentic influence to inspire positive, multi-generational change.",
      icon: "Star",
    },
    {
      id: "values",
      title: "Values",
      description:
        "Rooted in Integrity, Servant Leadership, Empathy, Relentless Growth, and Moral Accountability.",
      icon: "Diamond",
    },
  ],

  images: {
    hero: "/images/hero-portrait.jpg",
    stageHero: "/images/jaufar-stage-hero.png",
    wavingMic: "/images/jaufar-cutout.png",
    armsCrossed: "/images/jaufar-arms-crossed.png",
    cutout: "/images/jaufar-arms-crossed.png",
    frontPose: "/images/jaufar-front-pose-clean.png",
    suitCutout: "/images/jaufar-front-pose-clean.png",
    auditorium: "/images/auditorium-packed.png",
    about: "/images/jaufar-front-pose-clean.png",
    action1: "/images/speaking-session-1.jpg",
    action2: "/images/workshop-session-1.jpg",
    action3: "/images/training-session-1.jpg",
  },
};

// Minimalist, Clean, Animatic Numbers
export const minimalistMetrics: MetricItem[] = [
  {
    id: "m1",
    value: 25000,
    suffix: "+",
    label: "Individuals Reached",
    sublabel: "Mentored & Empowered",
  },
  {
    id: "m2",
    value: 650,
    suffix: "+",
    label: "Sessions Facilitated",
    sublabel: "Masterclasses & Workshops",
  },
  {
    id: "m3",
    value: 200,
    suffix: "+",
    label: "Keynotes & Events",
    sublabel: "Stages & Conferences",
  },
  {
    id: "m4",
    value: 85,
    suffix: "+",
    label: "Programs Delivered",
    sublabel: "Leadership & EQ Curricula",
  },
];
