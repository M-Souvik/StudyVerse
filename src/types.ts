interface Modules{
  id:string;
  video_link:string;
  module_name:string
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  imageUrl: string;
  tags: string[];
  modules:Modules[]
}

export type Category = 'Programming' | 'Design' | 'Business' | 'Marketing' | 'Data Science' | 'Engineering' | 'Medical' | 'Civil Services';