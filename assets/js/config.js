/**
 * Centralized Content & Configuration Layer
 * Abdul Kadir Mohiuddin — Personal Identity & NFC Platform
 * 
 * Single source of truth for all profile details, contact actions,
 * social links, navigation items, capabilities, experience, and projects.
 */

export const siteData = {
  // =========================================================================
  // 1. Profile Information
  // =========================================================================
  profile: {
    fullName: "Abdul Kadir Mohiuddin",
    preferredName: "Abdul Kadir",
    title: "Creative Visualizer & Strategist",
    location: "DOHA, QATAR",
    statusBadge: "Available for Projects",
    positioningStatement: "Turning complex business problems into clear, memorable visual systems.",
    bio: "Abdul Kadir Mohiuddin is a Creative Visualizer & Strategist based in Doha, Qatar. He specializes in turning complex business problems into clear, memorable visual systems, strategic identity architectures, and digital design experiences.",
    avatar: "./assets/images/profile-opt.jpg",
    avatarHighRes: "./assets/images/profile.jpg"
  },

  // =========================================================================
  // 2. Direct Contact Channels
  // =========================================================================
  contact: {
    eyebrow: "05 — CONTACT",
    headline: "Let's make something meaningful.",
    supportingCopy: "Have an idea, a challenge, or a business problem worth solving? Let's talk.",

    whatsapp: "+97477008536",
    whatsappFormatted: "+974 7700 8536",
    whatsappUrl: "https://wa.me/97477008536",
    whatsappCtaLabel: "Start a conversation",
    
    call: "+97477008536",
    callFormatted: "+974 7700 8536",
    callUrl: "tel:+97477008536",
    
    email: "akmahin@gmail.com",
    emailUrl: "mailto:akmahin@gmail.com",

    footerIdentity: {
      name: "ABDUL KADIR MOHIUDDIN",
      title: "CREATIVE VISUALIZER & STRATEGIST",
      location: "DOHA, QATAR"
    }
  },

  // =========================================================================
  // 3. Social Presence
  // =========================================================================
  social: [
    {
      id: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/akmahim",
      username: "@akmahim"
    },
    {
      id: "facebook",
      label: "Facebook",
      url: "https://www.facebook.com/akmahim",
      username: "akmahim"
    },
    {
      id: "behance",
      label: "Behance",
      url: "https://www.behance.net/akmahim",
      username: "akmahim"
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/akmahim/",
      username: "akmahim"
    }
  ],

  // =========================================================================
  // 4. Primary Navigation Structure
  // =========================================================================
  navigation: [
    {
      id: "about",
      label: "ABOUT",
      index: "01",
      href: "#about"
    },
    {
      id: "work",
      label: "WORK",
      index: "02",
      href: "#work"
    },
    {
      id: "capabilities",
      label: "CAPABILITIES",
      index: "03",
      href: "#capabilities"
    },
    {
      id: "experience",
      label: "EXPERIENCE",
      index: "04",
      href: "#experience"
    },
    {
      id: "contact",
      label: "CONTACT",
      index: "05",
      href: "#contact"
    }
  ],

  // =========================================================================
  // 5. Capabilities & Strategic Offerings
  capabilities: {
    eyebrow: "03 — CAPABILITIES",
    headline: "Capabilities",
    items: [
      {
        index: "01",
        title: "CREATIVE DIRECTION",
        description: "Turning business goals into a clear visual direction."
      },
      {
        index: "02",
        title: "BRAND & VISUAL IDENTITY",
        description: "Building recognizable and consistent visual systems."
      },
      {
        index: "03",
        title: "MOTION & DIGITAL CONTENT",
        description: "Bringing ideas to life through motion, campaigns, and digital visuals."
      }
    ]
  },

  // =========================================================================
  // 6. Professional Experience
  // =========================================================================
  experience: {
    eyebrow: "04 — EXPERIENCE",
    headline: "Where experience meets perspective.",
    items: [
      {
        id: "al-wafa-travel-tourism",
        organization: "Al Wafa Travel & Tourism",
        location: "Qatar",
        period: "2019 — Present",
        isCurrent: true,
        roles: [
          "Travel Operations",
          "Creative Director · 2023 — Present"
        ],
        description: "Working across travel operations and creative direction, connecting customer needs, business context, and visual communication."
      },
      {
        id: "brothers-travel-tourism",
        organization: "Brothers Travel & Tourism",
        location: "Qatar · Remote",
        period: "2023 — Present",
        isCurrent: true,
        roles: [
          "Creative & Travel Support"
        ],
        description: "Supporting both travel operations and creative communication across campaigns, promotions, and customer-facing content."
      },
      {
        id: "ayans-storio",
        organization: "Ayan's Storio",
        location: "Bangladesh · Remote",
        period: "2025 — November 2025",
        isCurrent: false,
        roles: [
          "Creative Visualizer"
        ],
        description: "Creating product promotions, motion content, and visual communication for digital campaigns."
      }
    ]
  },

  // =========================================================================
  // 7. Selected Projects & Works
  // =========================================================================
  projects: [
    {
      id: "visual-identity-architecture",
      title: "Visual Identity & Strategic Framework",
      category: "Identity Systems",
      year: "2025",
      shortDescription: "A comprehensive brand identity framework built to unify visual communication across digital and physical touchpoints.",
      image: "./assets/images/profile-opt.jpg",
      projectUrl: "https://www.behance.net/akmahim",
      tags: ["Brand Identity", "Visual Architecture", "Design System"]
    }
  ],

  // =========================================================================
  // 8. About Section Narrative & Methodology
  // =========================================================================
  about: {
    intro: {
      eyebrow: "01 — ABOUT",
      headline: "More than making things look good.",
      paragraphs: [
        "I’m a Creative Visualizer & Strategist working at the intersection of business, communication, and visual design.",
        "My approach starts before the design itself. I try to understand what a business is trying to achieve, who it needs to communicate with, and what makes the message meaningful to its audience.",
        "From brand identity and campaign visuals to motion and digital content, I translate those ideas into visual systems that are clear, consistent, and memorable.",
        "My experience across travel operations and creative direction has also shaped the way I think. Working close to customers, business operations, and marketing has taught me to look beyond the surface of a brief and understand the problem behind it."
      ],
      closingStatement: [
        "For me, design is not decoration.",
        "It is a way of making ideas understood."
      ]
    },
    howIThink: {
      eyebrow: "02 — HOW I THINK",
      headline: "A deliberate progression.",
      steps: [
        {
          id: "business",
          step: "01",
          name: "BUSINESS",
          description: "Understanding commercial intent, operational realities, and core objectives."
        },
        {
          id: "audience",
          step: "02",
          name: "AUDIENCE",
          description: "Mapping customer perceptions, mental models, and emotional relevance."
        },
        {
          id: "problem",
          step: "03",
          name: "PROBLEM",
          description: "Diagnosing the underlying communication bottleneck beneath the surface brief."
        },
        {
          id: "direction",
          step: "04",
          name: "DIRECTION",
          description: "Defining a sharp, focused strategic thesis before a single pixel is drawn."
        },
        {
          id: "visual-system",
          step: "05",
          name: "VISUAL SYSTEM",
          description: "Constructing an enduring, cohesive visual language that scales across all touchpoints."
        }
      ]
    },
    philosophy: {
      eyebrow: "03 — STRATEGIC PHILOSOPHY",
      headline: "Think first. Make with purpose.",
      note: "These are not isolated design choices. Together they form a visual language.",
      principles: [
        {
          id: "color",
          name: "COLOR",
          quote: "Create the right perception."
        },
        {
          id: "typography",
          name: "TYPOGRAPHY",
          quote: "Shape how a message is understood."
        },
        {
          id: "composition",
          name: "COMPOSITION",
          quote: "Guide attention."
        },
        {
          id: "motion",
          name: "MOTION",
          quote: "Give an idea rhythm and meaning."
        }
      ]
    },
    closing: {
      eyebrow: "04 — STATEMENT",
      lines: [
        "Understand the problem.",
        "Find the direction.",
        "Give it form."
      ]
    }
  }
};

// Backward-compatible export alias for any legacy modules
export const profileConfig = {
  identity: siteData.profile,
  contact: siteData.contact,
  socials: siteData.social,
  navigation: siteData.navigation
};
