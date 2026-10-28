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
  target: string;
  description: string;
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

  // 2. Your Philosophy
  philosophy: {
    title: "Excellence Begins Within.",
    paragraphs: [
      "I believe that every individual has the potential to grow, lead, and create meaningful change. True excellence is not merely about achieving success; it is about developing character, mastering emotions, building meaningful relationships, and inspiring others to become their best selves.",
      "When people understand themselves, lead with empathy, and act with purpose, they can transform not only their own lives but also the people and communities around them.",
    ],
  },

  // 3. Who You Are
  whoYouAre: {
    title: "Meet PTM Jaufar Swadiq",
    paragraphs: [
      "I am PTM Jaufar Swadiq, a Human Excellence Strategist passionate about developing leadership potential, strengthening emotional intelligence, and empowering individuals to achieve personal and professional excellence.",
      "My approach combines practical learning, human-centered development, and purposeful training to help people discover their strengths, overcome limitations, and lead with confidence, clarity, and compassion.",
    ],
  },

  // 4. What You Do
  whatYouDo: {
    title: "Developing People. Strengthening Leaders. Creating Impact.",
    paragraphs: [
      "Through leadership development, emotional intelligence programs, and transformative training, I help individuals and organizations build the mindset, skills, and behaviours needed for sustainable growth.",
      "My work focuses on turning awareness into action, potential into performance, and leadership into a meaningful influence.",
    ],
  },

  // 5. Who You Help
  whoYouHelp: {
    title: "Empowering People Who Aspire to Grow",
    audiences: [
      {
        target: "Leaders and aspiring leaders",
        description: "Seeking to enhance their leadership effectiveness.",
      },
      {
        target: "Students and young professionals",
        description: "Preparing to lead with confidence and purpose.",
      },
      {
        target: "Educators and trainers",
        description: "Who want to inspire, influence, and empower others.",
      },
      {
        target: "Teams and organizations",
        description: "Aiming to strengthen collaboration, communication, and performance.",
      },
      {
        target: "Individuals",
        description: "Committed to personal growth, emotional maturity, and human excellence.",
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
    location: "Kerala, India & International",
  },

  images: {
    hero: "/images/hero-portrait.jpg",
    about: "/images/about-portrait.jpg",
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
