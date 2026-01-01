
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
