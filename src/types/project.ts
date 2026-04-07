export interface Project {
  slug: string;
  title: string;
  description: string;
  image_url: string;
  github_url?: string;
  link_url?: string;
  tech: Tech[];
  game?: boolean;
  content: string;
  [key: string]: any;
}

export interface Tech {
  icon: string;
  name: string;
  priority?: boolean;
}