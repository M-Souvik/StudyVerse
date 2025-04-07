import { Course } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Python Programming',
    description: 'Learn the basics of Python programming language with hands-on exercises.',
    category: 'Programming',
    level: 'Beginner',
    duration: '6 weeks',
    imageUrl: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=600',
    tags: ['Python', 'Programming', 'Basics'],
    modules: [
      {
        id: '1',
        video_link: 'https://www.youtube.com/embed/t2_Q2BRzeEE?si=4R0_dSOfWriuP0VC',
        module_name: 'Basics of Python'
      },
      {
        id: '2',
        video_link: 'https://www.youtube.com/embed/lIId8IDP6TU?si=OHeGmephisKsqOij',
        module_name: 'Strings & Variables'
      },
    ]
  },
  {
    id: '2',
    title: 'UI/UX Design Fundamentals',
    description: 'Master the principles of user interface and user experience design.',
    category: 'Design',
    level: 'Beginner',
    duration: '8 weeks',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600',
    tags: ['Design', 'UI', 'UX'],
    modules: [
      {
        id: '1',
        video_link: 'https://www.youtube.com/embed/O5IXf8qB9U4?si=04qNS3sCyMYeFBty',
        module_name: 'Introduction to UI/UX'
      },
      {
        id: '2',
        video_link: 'https://www.youtube.com/embed/FlwYtS4mIQw?si=DIkuzRTe2typWbul',
        module_name: 'Figma in UI/UX'
      },
    ]
  },
  {
    id: '3',
    title: 'Data Science with Python',
    description: 'Learn data analysis and visualization using Python.',
    category: 'Data Science',
    level: 'Intermediate',
    duration: '10 weeks',
    imageUrl: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=600',
    tags: ['Data Science', 'Python', 'Analytics'],
    modules: [
      {
        id: '1',
        video_link: 'https://www.youtube.com/embed/example2',
        module_name: 'Data Analysis Basics'
      },
    ]
  },
  {
    id: '4',
    title: 'Advanced Python Web Development',
    description: 'Build modern web applications using Python frameworks like Django and Flask.',
    category: 'Programming',
    level: 'Advanced',
    duration: '12 weeks',
    imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=600',
    tags: ['Python', 'Web Development', 'Django', 'Flask'],
    modules: [
      {
        id: '1',
        video_link: 'https://www.youtube.com/embed/example3',
        module_name: 'Django Framework Overview'
      },
    ]
  },
  {
    id: '5',
    title: 'Python for Machine Learning',
    description: 'Learn how to implement machine learning algorithms using Python.',
    category: 'Data Science',
    level: 'Advanced',
    duration: '10 weeks',
    imageUrl: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&q=80&w=600',
    tags: ['Python', 'Machine Learning', 'AI', 'Data Science'],
    modules: [
      {
        id: '1',
        video_link: 'https://www.youtube.com/embed/example4',
        module_name: 'Machine Learning Basics'
      },
    ]
  },
  {
    id: '6',
    title: 'Mechanical Engineering Fundamentals',
    description: 'Master the core concepts of mechanical engineering, including thermodynamics and mechanics.',
    category: 'Engineering',
    level: 'Beginner',
    duration: '16 weeks',
    imageUrl: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=600',
    tags: ['Engineering', 'Mechanical', 'Thermodynamics', 'Mechanics'],
    modules: [
      {
        id: '1',
        video_link: 'https://www.youtube.com/embed/example5',
        module_name: 'Introduction to Mechanical Engineering'
      },
    ]
  },
  {
    id: '7',
    title: 'Electrical Circuit Analysis',
    description: 'Learn to analyze and design electrical circuits with practical applications.',
    category: 'Engineering',
    level: 'Intermediate',
    duration: '12 weeks',
    imageUrl: 'https://images.unsplash.com/photo-1555696958-c5049b866f6f?auto=format&fit=crop&q=80&w=600',
    tags: ['Engineering', 'Electrical', 'Circuits', 'Electronics'],
    modules: [
      {
        id: '1',
        video_link: 'https://www.youtube.com/embed/example6',
        module_name: 'Circuit Basics'
      },
    ]
  },
  {
    id: '8',
    title: 'Human Anatomy and Physiology',
    description: 'Comprehensive study of human body systems and their functions.',
    category: 'Medical',
    level: 'Intermediate',
    duration: '20 weeks',
    imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600',
    tags: ['Medical', 'Anatomy', 'Physiology', 'Healthcare'],
    modules: [
      {
        id: '1',
        video_link: 'https://www.youtube.com/embed/example7',
        module_name: 'Introduction to Anatomy'
      },
    ]
  },
  {
    id: '9',
    title: 'Clinical Medicine Basics',
    description: 'Introduction to clinical practice and patient care fundamentals.',
    category: 'Medical',
    level: 'Advanced',
    duration: '24 weeks',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600',
    tags: ['Medical', 'Clinical', 'Healthcare', 'Patient Care'],
    modules: [
      {
        id: '1',
        video_link: 'https://www.youtube.com/embed/example8',
        module_name: 'Clinical Practice Overview'
      },
    ]
  },
  {
    id: '10',
    title: 'Civil Services Exam Preparation',
    description: 'Comprehensive preparation for civil services examination with focus on current affairs.',
    category: 'Civil Services',
    level: 'Advanced',
    duration: '48 weeks',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600',
    tags: ['Civil Services', 'UPSC', 'Current Affairs', 'Government'],
    modules: [
      {
        id: '1',
        video_link: 'https://www.youtube.com/embed/example9',
        module_name: 'Exam Preparation Strategies'
      },
    ]
  },
  {
    id: '11',
    title: 'Public Administration',
    description: 'Study of government policies, public management, and administrative theory.',
    category: 'Civil Services',
    level: 'Intermediate',
    duration: '16 weeks',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600',
    tags: ['Civil Services', 'Administration', 'Government', 'Policy'],
    modules: [
      {
        id: '1',
        video_link: 'https://www.youtube.com/embed/example10',
        module_name: 'Introduction to Public Administration'
      },
    ]
  },
  {
    id: '12',
    title: 'Civil Engineering Structures',
    description: 'Learn about structural engineering principles and construction techniques.',
    category: 'Engineering',
    level: 'Advanced',
    duration: '14 weeks',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600',
    tags: ['Engineering', 'Civil', 'Structures', 'Construction'],
    modules: [
      {
        id: '1',
        video_link: 'https://www.youtube.com/embed/example11',
        module_name: 'Structural Engineering Basics'
      },
    ]
  },
  {
    id: '13',
    title: 'MBA',
    description: 'Learn about business',
    category: 'Business',
    level: 'Beginner',
    duration: '14 weeks',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600',
    tags: ['Business', 'MBA'],
    modules: [
      {
        id: '1',
        video_link: 'https://www.youtube.com/embed/example12',
        module_name: 'Introduction to Business'
      },
    ]
  },
  {
    id: '14',
    title: 'Finance',
    description: 'Learn about stock market',
    category: 'Business',
    level: 'Beginner',
    duration: '14 weeks',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1679923813998-6603ee2466c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Business', 'MBA'],
    modules: [
      {
        id: '1',
        video_link: 'https://www.youtube.com/embed/example12',
        module_name: 'Introduction to Business'
      },
    ]
  }
];