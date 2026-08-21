import contactData from './contact.json';
import experiencesData from './experiences.json';
import personalData from './personal.json';
import projectsData from './projects.json';
import skillsData from './skills.json';
import type { ContactInfo, Experience, PersonalInfo, Project, SkillCategory } from '../types';

export const personal: PersonalInfo = personalData;
export const contact: ContactInfo = contactData;
export const experiences: Experience[] = experiencesData;
export const projects: Project[] = projectsData;

export const skillCategories: SkillCategory[] = skillsData.map(({ title, skills }) => ({
  title,
  skills: [...new Set(skills)],
}));
