export interface Project {
  slug: string;
  title: string;
  description: string;
  image_url: string;
  github_url?: string;
  link_url?: string;
  tech: Tech[];
  play: Play;
  type?: string;
  images: Image[];
  content: string;
  [key: string]: any;
}

export interface Tech {
  icon: string;
  name: string;
  priority?: boolean;
}

export interface Play {
  src: string;
  link: string;
  text: string;
}

export interface Image {
  path: string;
  alt: string;
  desc: string;
}