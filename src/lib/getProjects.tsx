import matter from 'gray-matter';

export interface Project {
  slug: string;
  title: string;
  description: string;
  image_url: string;
  github_url?: string;
  link_url?: string;
  tech: { icon: string; name: string; priority?: boolean }[];
  game?: boolean;
  content: string;
  [key: string]: any;
}

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