
export interface CaseStudyContent {
  goalTitle: string;
  goalDescription: string;
  problemTitle: string;
  problemDescription: string;
  problemImpact: string;
  redesignTitle: string;
  legacyImage: string;
  newImages: string[];
  takeaways: {
    title: string;
    desc: string;
  }[];
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
}

export interface ImpactProject {
  title: string;
  description: string;
  metrics: string[];
  tags: string[];
  caseStudy?: CaseStudyContent;
}

export interface Award {
  title: string;
  description: string;
  year: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade: string;
}
