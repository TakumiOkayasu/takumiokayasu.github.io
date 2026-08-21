export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  about: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  id: number;
  title: string;
  position: string;
  company: string;
  period: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
}

export interface ContactInfo {
  email: string;
  github: string;
}
