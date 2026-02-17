export interface InfoItem {
  label: string;
  value: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  image: string;
  tags: string[];
  size: 'large' | 'medium' | 'small';
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface Client {
  name: string;
  year: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Award {
  name: string;
  count: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
