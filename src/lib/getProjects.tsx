import fm from 'front-matter';
import type { Project } from '../types/project';

export async function getProjects(): Promise<Project[]> {
  const modules = import.meta.glob('/src/content/projects/*.md', {
    query: '?raw', 
    import: 'default',
    eager: true,
  });

  return Object.entries(modules).map(([path, raw]) => {
    const { attributes, body: content } = fm<Partial<Project>>(raw as string);
    return {
      slug: path.split('/').pop()?.replace('.md', ''),
      ...attributes,
      content,
    } as Project;
  });
}