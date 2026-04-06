import matter from 'gray-matter';
import type { Project } from '../types/project';

export async function getProjects(): Promise<Project[]> {
  const modules = import.meta.glob('/src/content/projects/*.md', {
    query: '?raw', 
    import: 'default',
    eager: true,
  });

  return Object.entries(modules).map(([path, raw]) => {
    const { data, content } = matter(raw as string);

    return {
      slug: path.split('/').pop()?.replace('.md', ''),
      ...data,
      content,
    } as Project;
  });
}