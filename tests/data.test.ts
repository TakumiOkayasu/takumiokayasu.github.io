import { describe, expect, it } from 'vite-plus/test';
import { contact, experiences, personal, projects, skillCategories } from '../src/data';

const hasUniqueValues = <T>(values: T[]): boolean => new Set(values).size === values.length;

describe('portfolio data contract', () => {
  it('provides the required personal and contact fields', () => {
    expect(personal.name.trim()).not.toBe('');
    expect(personal.title.trim()).not.toBe('');
    expect(personal.description.trim()).not.toBe('');
    expect(personal.about.trim()).not.toBe('');
    expect(contact.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    expect(new URL(contact.github).protocol).toBe('https:');
  });

  it('keeps experience and project identifiers unique', () => {
    expect(experiences.length).toBeGreaterThan(0);
    expect(projects.length).toBeGreaterThan(0);
    expect(hasUniqueValues(experiences.map((experience) => experience.id))).toBe(true);
    expect(hasUniqueValues(projects.map((project) => project.id))).toBe(true);
  });

  it('provides displayable skills and project technologies', () => {
    expect(skillCategories.length).toBeGreaterThan(0);

    for (const category of skillCategories) {
      expect(category.title.trim()).not.toBe('');
      expect(category.skills.length).toBeGreaterThan(0);
      expect(hasUniqueValues(category.skills)).toBe(true);
    }

    for (const project of projects) {
      expect(project.title.trim()).not.toBe('');
      expect(project.description.trim()).not.toBe('');
      expect(project.technologies.length).toBeGreaterThan(0);
    }
  });
});
