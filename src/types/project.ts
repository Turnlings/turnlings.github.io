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