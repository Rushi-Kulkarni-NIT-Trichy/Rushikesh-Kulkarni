
import { WorkExperience, ImpactProject, Award, Education } from './types';

export const PROFILE = {
  name: "Rushikesh Kulkarni",
  role: "Associate Product Manager",
  location: "Mumbai, India",
  email: "nittrichy.rushi@gmail.com",
  phone: "9488177320",
  bio: "I own Browse & Discovery at Purplle, driving engagement, conversion, and monetization at scale — from Homepage & PDP revamps to AdTech and agentic AI automation.",
};

export const PROJECTS: ImpactProject[] = [
  {
    title: "Homepage Revamp",
    description: "Redesigned Purplle’s homepage from a brand-led banner stack into an intent-driven discovery engine — aligning entry points with real user needs and driving meaningful business impact.",
    metrics: ["+9.1% Revenue/MAU", "-25% Exit Rate", "+12% Multi-Category Visits"],
    tags: ["Product Strategy", "UX", "A/B Testing"],
    caseStudy: {
      goalTitle: "Reimagining the First Impression",
      goalDescription: "The homepage is the highest-traffic surface on the app and the first touchpoint for millions of users. The goal was to transform it from a static marketing canvas into a high-intent discovery layer that accelerates users toward relevant products — faster and with less friction.",
      problemTitle: "Generic Brand Banners → Cognitive Friction",
      problemDescription: "User Research and search ( Google & Internal ) analysis revealed a clear mismatch: Shoppers think in concerns, use-cases, and goals, but the homepage surfaced brand-first, generic banners. This gap increased cognitive load, slowed decision-making, and resulted in high exit rates from the first fold and low downstream category exploration.",
      problemImpact: "High Exit Rates & Low Exploration",
      redesignTitle: "Intent-Led Homepage Architecture",
      legacyImage: "https://i.postimg.cc/K8mYZghS/Whats-App-Image-2026-01-17-at-4-37-58-PM.jpg",
      newImages: [
        "https://i.postimg.cc/4xX3JhkD/Whats-App-Image-2026-01-17-at-4-37-57-PM.jpg",
        "https://i.postimg.cc/VkrB96kp/Whats-App-Image-2026-01-17-at-5-59-21-PM.jpg"
      ],
      takeaways: [
        { 
          title: "Problem-Centric Navigation Wins", 
          desc: "Aligning navigation with user intent simplifies decisions and directly improves revenue efficiency." 
        },
        { 
          title: "Experimentation Enables Confidence", 
          desc: "Strong experimentation frameworks are critical when changing core surfaces with millions of users. Data-backed rollouts ensure stability at scale." 
        },
        { 
          title: "Discovery Must Stay Dynamic", 
          desc: "Refreshing homepage content based on real-time trends and seasonal intent is key to sustaining long-term engagement." 
        }
      ]
    }
  },
  {
    title: "Agentic AI Workflows",
    description: "Designed and deployed a self-optimizing creative engine powered by n8n and Gemini, enabling autonomous creative production and optimization for high-intent discovery at scale.",
    metrics: ["~90% effort reduction", "10x production scale", "+13% ATC lift"],
    tags: ["GenAI", "n8n", "Automation"],
    caseStudy: {
      goalTitle: "Scaling Creative Velocity",
      goalDescription: "The primary objective was to exponentially scale creative asset production without increasing operational costs. Merchandising demand for fresh content consistently exceeded design capacity, creating a growth bottleneck.",
      problemTitle: "Operational Bottlenecks",
      problemDescription: "Design turnaround times of 3-5 days per banner set meant missing critical campaign windows. Additionally, visual inconsistencies across thousands of PDP SKUs negatively impacted user confidence and purchase intent.",
      problemImpact: "Supply Chain Constraints",
      redesignTitle: "Closed-Loop Agentic Architecture",
      legacyImage: "https://i.postimg.cc/W3r74kLH/portfolio.png",
      newImages: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
      ],
      takeaways: [
        { title: "Speed as a Competitive Edge", desc: "Faster asset refresh cycles maintain visual interest, resulting in a measurable 13% increase in Add-to-Cart (ATC) rates." },
        { title: "Strategic Automation", desc: "Integrating n8n with Gemini Pro Vision bridged the gap between legacy APIs and modern AI, delivering value without a complete stack rebuild." },
        { title: "Quality Assurance", desc: "Automating production while maintaining a 'Human-in-the-Loop' governance layer ensured brand consistency and creative excellence." },
        { title: "Self-Optimizing Loops", desc: "Continuous performance analysis allows the engine to automatically prioritize high-performing creative variants every 4 hours." }
      ]
    }
  },
  {
    title: "Purplle Display Ads (PDP)",
    description: "Responsible Monetization on Conversion-Critical Surfaces. Launched premium placements unlocking ₹2 Cr/month while protecting core conversion metrics.",
    metrics: ["₹2 Cr/month potential", "Context-aware logic", "Conversion-safe"],
    tags: ["Monetization", "AdTech", "UX Safeguards"],
    caseStudy: {
      goalTitle: "Monetizing PDPs Without Compromising Trust",
      goalDescription: "PDPs are the most conversion-sensitive surface in the funnel. The goal was to introduce brand visibility through advertising without degrading decision confidence, purchase intent, or house-brand performance.",
      problemTitle: "UX & Revenue Cannibalization Risk",
      problemDescription: "PDPs represent the final stage of user decision-making. Poorly governed ad exposure risked eroding user trust through irrelevant placements, cannibalizing sales of high-margin products, and creating long-term damage in exchange for short-term ad revenue.",
      problemImpact: "Protecting Conversion Integrity",
      redesignTitle: "Context-Aware, Guardrailed Ad Architecture",
      legacyImage: "https://i.postimg.cc/FzpKsZ9G/Whats-App-Image-2026-01-18-at-1-25-03-AM.jpg",
      newImages: [
        "https://i.postimg.cc/prJm5vZM/Whats-App-Image-2026-01-18-at-1-25-03-AM-(1).jpg"
      ],
      takeaways: [
        { 
          title: "Conversion Guardrails Are Non-Negotiable", 
          desc: "PDP monetization must be governed by strict controls to ensure secondary revenue streams do not compromise the core purchase funnel." 
        },
        { 
          title: "Relevance Drives Acceptance", 
          desc: "Limiting ad inventory to contextually aligned categories prevents cannibalization and maintains a high-quality user experience." 
        },
        { 
          title: "Scalable Governance Enables Growth", 
          desc: "Clearly defined eligibility rules allowed monetization to scale responsibly while protecting long-term business health." 
        }
      ]
    }
  },
  {
    title: "GenAI Visual Filters",
    description: "Intent-Led Discovery Through Semantic Navigation. Launched visual filters across high-traffic listing pages enabling faster product discovery and uplift in conversion.",
    metrics: ["+5.3% Conversion Uplift", "-20% Exit Rate", "10% Buyer Adoption"],
    tags: ["Discovery", "GenAI", "Data Enrichment"],
    caseStudy: {
      goalTitle: "Streamlining Product Selection",
      goalDescription: "The objective was to reduce friction in product discovery by aligning navigation with how shoppers actually think and decide. By surfacing intent-led shortcuts, we aimed to lower cognitive load and accelerate decision-making.",
      problemTitle: "Unstructured, Attribute-Heavy Discovery",
      problemDescription: "Discovery was previously limited to generic catalog attributes. Beauty journeys are category-specific (e.g., skin type, finish), but these nuanced signals were not structurally available due to missing semantic tagging, resulting in high friction and slow discovery loops.",
      problemImpact: "Discovery Is Category-Specific, Not Universal",
      redesignTitle: "Semantic Tagging + Visual Navigation",
      legacyImage: "https://i.postimg.cc/52VSY97T/Whats-App-Image-2026-01-18-at-2-02-10-AM-(1).jpg",
      newImages: [
        "https://i.postimg.cc/4xgQ74bS/Whats-App-Image-2026-01-18-at-2-02-09-AM.jpg",
        "https://i.postimg.cc/vZstg8Lj/Whats-App-Image-2026-01-18-at-2-02-10-AM.jpg"
      ],
      takeaways: [
        { 
          title: "Category-Led Mental Models Matter", 
          desc: "Discovery experiences must adapt to category-specific intent. Surfacing the right shortcuts dramatically improves navigational speed and confidence." 
        },
        { 
          title: "Scalable Data Enrichment", 
          desc: "Leveraging LLMs for semantic tagging provided a low-cost, high-scale solution to a historically complex data organization problem." 
        },
        { 
          title: "Visual Hierarchy Drives Adoption", 
          desc: "Smart ordering and placement of filters ensured high visibility and consistent usage where they delivered the most impact." 
        }
      ]
    }
  }
];

export const EXPERIENCE: WorkExperience[] = [
  {
    company: "Purplle",
    role: "Associate Product Manager",
    period: "Aug 2024 - Present",
    highlights: [
      "Directed the Homepage first-fold redesign, driving a 9.1% lift in Revenue/MAU and a 25% reduction in exit rates.",
      "Automated merchandising production through Agentic AI workflows, reducing manual effort by ~90%.",
      "Engineered the 'Purplle Display Ads' (PDA) monetization suite, unlocking ₹2 Cr/month in revenue potential.",
      "Optimized PDP conversion by 15% through the launch of high-intent widgets and real-time shipping (Flash ETA).",
      "Pioneered semantic visual filters and GenAI-powered review summaries to improve shopping trust and relevance."
    ]
  },
  {
    company: "Purplle",
    role: "Revenue Analytics Manager",
    period: "Jan 2023 - Aug 2024",
    highlights: [
      "Developed a robust SKU-level RFID distribution model for 2,000+ items to optimize supply chain efficiency.",
      "Spearheaded analytics and merchandising strategies that contributed to 38% YoY revenue growth.",
      "Created a centralized merchandise scorecard that reduced impression wastage by 7%."
    ]
  },
  {
    company: "ZS Associates",
    role: "Decision Analytics Associate",
    period: "Feb 2022 - Jan 2023",
    highlights: [
      "Provided strategic recommendations for a $2B US pharmaceutical portfolio based on advanced market analysis.",
      "Facilitated a 15% performance improvement through data-driven strategic resource allocation.",
      "Automated critical performance reporting workflows, reducing manual turnaround time by 40%."
    ]
  },
  {
    company: "Collins Aerospace",
    role: "Associate Engineer",
    period: "Oct 2020 - Feb 2022",
    highlights: [
      "Architected Python automation tools and VBA dashboards for mission-critical aerospace systems.",
      "Reduced engineering reporting cycles by 60% through custom automation and data visualization."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "NIT Trichy",
    degree: "B. Tech: Mechanical Engineering",
    period: "2016 - 2020",
    grade: "8.63 CGPA"
  }
];

export const AWARDS: Award[] = [
  {
    title: "Mountain Mover Award",
    description: "Recognized for driving 38% YoY revenue growth at Purplle through analytical leadership.",
    year: "2024"
  },
  {
    title: "Shining Star Award",
    description: "Awarded for the architectural development and impact of the SKU-level distribution model.",
    year: "2024"
  },
  {
    title: "Winner, Avithon Hackathon",
    description: "Secured first place in a competitive company-wide innovation challenge.",
    year: "2021"
  }
];

export const SKILLS = [
  "Product Strategy & Roadmapping",
  "Growth & CRO",
  "A/B Testing & Experimentation",
  "SQL · Python",
  "GenAI & Agentic Workflows",
  "n8n Automation",
  "Tableau & Analytics",
  "Stakeholder Management"
];
