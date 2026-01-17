
import { WorkExperience, ImpactProject, Award, Education } from './types';

export const PROFILE = {
  name: "Rushikesh Kulkarni",
  role: "Associate Product Manager",
  location: "Mumbai, India",
  email: "nittrichy.rushi@gmail.com",
  phone: "9488177320",
  bio: "I build data-driven B2C products at scale — owning Browse & Discovery at Purplle.\nNIT Trichy alum, focused on growth, monetization, experimentation, and agentic AI workflows.\nCurrently also building a 0→1 habit-formation app.",
};

export const PROJECTS: ImpactProject[] = [
  {
    title: "Homepage Revamp",
    description: "Led a homepage revamp by shifting the app’s first fold from brand-led banners to category- and use-case-led discovery, driving a 9.1% lift in revenue per MAU, 12% increase in IV/MAU, and a 25% drop in exit rate.",
    metrics: ["9.1% lift in Revenue/MAU", "25% drop in exit rate", "12% increase in multi-category visits"],
    tags: ["Product Strategy", "A/B Testing", "UX"],
    caseStudy: {
      goalTitle: "Transforming Discovery",
      goalDescription: "Users landing on the homepage were primarily exposed to generic brand banners that failed to address their specific buying needs. Shoppers preferred to browse through use-case- and concern-led entry points. In contrast, brand-first discovery introduced cognitive friction.",
      problemTitle: "Generic & Noisy",
      problemDescription: "User research and data analysis revealed that users want to shop basis through use case led or concern led angle vs having brand banner increased cognitive friction, leading to high bounce rates and low conversion.",
      problemImpact: "High Abandonment",
      redesignTitle: "Use Case & Category Led Journeys",
      legacyImage: "https://i.postimg.cc/K8mYZghS/Whats-App-Image-2026-01-17-at-4-37-58-PM.jpg",
      newImages: [
        "https://i.postimg.cc/4xX3JhkD/Whats-App-Image-2026-01-17-at-4-37-57-PM.jpg",
        "https://i.postimg.cc/VkrB96kp/Whats-App-Image-2026-01-17-at-5-59-21-PM.jpg"
      ],
      takeaways: [
        { title: "Problem-First Navigation", desc: "Moving from brand-led to concern-led routing simplified decision-making for users and drove higher revenue per user." },
        { title: "A/B Validation is Crucial", desc: "A/B experimentation helped refine recommendations and built stakeholder confidence to transition the app’s first fold." },
        { title: "Content Is King", desc: "Regularly refreshing content guided by search trends was essential to sustaining engagement for repeat users." }
      ]
    }
  },
  {
    title: "Agentic AI Workflows",
    description: "Architected parallel agentic GenAI workflows using n8n and Gemini Pro Vision to eliminate creative production bottlenecks in merchandising operations, scaling output by 10x.",
    metrics: ["~90% effort reduction", "13% ATC lift", "4% CTR uplift"],
    tags: ["GenAI", "n8n", "LLM Ops"],
    caseStudy: {
      goalTitle: "Scale Creative Production",
      goalDescription: "The objective was to scale high-quality creative production exponentially without increasing headcount. Merchandising demand for fresh assets far exceeded design capacity, creating a critical bottleneck for growth.",
      problemTitle: "The Velocity Gap",
      problemDescription: "Design turnaround times of 3-5 days per banner set meant missing critical campaign windows. Furthermore, visual inconsistency across thousands of SKUs in the PDP catalog directly impacted user confidence and conversion.",
      problemImpact: "Inhibited Growth",
      redesignTitle: "Two-Stage Agentic Architecture",
      legacyImage: "https://i.postimg.cc/W3r74kLH/portfolio.png",
      newImages: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
      ],
      takeaways: [
        { title: "Speed as a Conversion Driver", desc: "Faster refresh cycles drove a measurable 13% increase in ATC rates by maintaining visual freshness." },
        { title: "Legacy + AI Advantage", desc: "Using n8n to bridge legacy internal APIs with Gemini Pro Vision unlocked massive value without a full stack rebuild." },
        { title: "Human-in-the-Loop", desc: "Automating labor-intensive generation while maintaining a human approval layer ensured brand safety and creative quality." },
        { title: "Data-Driven Reranking", desc: "Continuous performance analysis every 4 hours automatically promoted high-performing creative variants." }
      ]
    }
  },
  {
    title: "Purplle Display Ads (PDP)",
    description: "Introduced a controlled premium ad placement on PDPs, unlocking ₹2 Cr/month monetization potential",
    metrics: ["₹2 Cr/month potential", "Selective Eligibility Logic"],
    tags: ["Monetization", "AdTech", "UX Safeguards"],
    caseStudy: {
      goalTitle: "Monetize High-Intent PDP Traffic Responsibly",
      goalDescription: "PDPs are the most conversion-critical surfaces on the app. The goal was to enable brand visibility on PDPs only when it was contextually relevant, without disrupting user trust, discovery, or purchase intent.",
      problemTitle: "High Risk of UX & Business Impact",
      problemDescription: "PDPs sit at the final decision-making stage of the funnel. Showing irrelevant ads could hurt trust and conversion. Broad ad exposure risked cannibalisation of high gross-margin products.",
      problemImpact: "Revenue Leakage & UX Risk",
      redesignTitle: "Selective PDA Placement on PDP",
      legacyImage: "https://i.postimg.cc/FzpKsZ9G/Whats-App-Image-2026-01-18-at-1-25-03-AM.jpg",
      newImages: [
        "https://i.postimg.cc/prJm5vZM/Whats-App-Image-2026-01-18-at-1-25-03-AM-(1).jpg"
      ],
      takeaways: [
        { title: "Guardrails Are Essential", desc: "PDP monetization needs strict controls to protect trust and conversion on high-intent surfaces." },
        { title: "Selective > Broad", desc: "Limiting ads to contextually relevant products helped reduce cannibalisation while enabling sustainable revenue." },
        { title: "Product Logic Enables Scale", desc: "Clear eligibility rules balanced revenue goals with long-term business health, allowing responsible growth." }
      ]
    }
  },
  {
    title: "GenAI Visual Filters",
    description: "Launched visual filters across high-traffic listing pages and search results to reflect how users actually shop, driving a 10% buyer adoption and 5.3% conversion uplift.",
    metrics: ["+5.3% Conversion Uplift", "-25% Exit Rate", "10% Buyer Adoption"],
    tags: ["Visual Filters", "Discovery", "GenAI Tagging"],
    caseStudy: {
      goalTitle: "Faster, Smarter Product Discovery",
      goalDescription: "Enhance product discovery on high-traffic listing and search pages by aligning filters with real buying intent and reducing cognitive load for millions of users.",
      problemTitle: "Flat Discovery & Lack of Tagging",
      problemDescription: "Product discovery was limited to unstructured lists. Beauty journeys are category-specific (e.g., skin type for face wash, color for lipstick), but product-level tagging for these nuances did not exist in the catalog.",
      problemImpact: "High Cognitive Load & Exit Rate",
      redesignTitle: "AI-Driven Semantic Tagging & Visual Filters",
      legacyImage: "https://i.postimg.cc/52VSY9qT/Whats-App-Image-2026-01-18-at-2-02-10-AM-(1).jpg",
      newImages: [
        "https://i.postimg.cc/4xgQ74bS/Whats-App-Image-2026-01-18-at-2-02-09-AM.jpg",
        "https://i.postimg.cc/vZstg8Lj/Whats-App-Image-2026-01-18-at-2-02-10-AM.jpg"
      ],
      takeaways: [
        { title: "Category-Specific Logic", desc: "Discovery is not generic — every category has its own mental model. Surfacing intent-led shortcuts early dramatically reduces load." },
        { title: "AI-Driven Semantic Tagging", desc: "Scalable LLM-driven tagging unlocked powerful UX improvements without the heavy operational overhead of manual tagging." },
        { title: "Visual Hierarchy & Ranking", desc: "Smart shuffle logic and relevance-based ranking are critical for driving high user adoption of navigational tools." }
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
      "Led Homepage First Fold revamp leading to a 9.1% lift in Revenue/MAU and 25% exit rate reduction.",
      "Automated merchandising creative workflows using Agentic AI (n8n), saving ~90% manual effort.",
      "Engineered 'Purplle Display Ads' (PDA) control panel unlocking ₹2 Cr/month revenue potential.",
      "Improved PDP conversion by 15% through high-intent widgets and Flash ETA launches.",
      "Pioneered AI Visual Filters and GenAI review summaries to enhance trust and relevance."
    ]
  },
  {
    company: "Purplle",
    role: "Revenue Analytics Manager",
    period: "Jan 2023 - Aug 2024",
    highlights: [
      "Built a robust RFID model for 2,000+ SKUs to improve distribution efficiency.",
      "Led analytics and merchandising strategy driving 38% YoY revenue growth.",
      "Developed a merchandise scorecard that reduced impression wastage by 7%."
    ]
  },
  {
    company: "ZS Associates",
    role: "Decision Analytics Associate",
    period: "Feb 2022 - Jan 2023",
    highlights: [
      "Influenced key decisions for a $2B US pharma portfolio via market and competitor analysis.",
      "Achieved a 15% performance improvement through data-driven strategic planning.",
      "Automated monthly performance reporting, reducing turnaround time by 40%."
    ]
  },
  {
    company: "Collins Aerospace",
    role: "Associate Engineer",
    period: "Oct 2020 - Feb 2022",
    highlights: [
      "Developed Python automation tools and VBA dashboards for aerospace systems.",
      "Reduced engineering reporting time by 60% through custom automation solutions."
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
    description: "Recognized for delivering 38% YoY revenue growth at Purplle.",
    year: "2024"
  },
  {
    title: "Shining Star Award",
    description: "Awarded for the development and impact of the RFID user model.",
    year: "2024"
  },
  {
    title: "Winner, Avithon Hackathon",
    description: "Secured 1st place in the company-wide innovation challenge.",
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
