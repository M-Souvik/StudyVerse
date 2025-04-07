import React from 'react';
import { Course } from '../types';
import { Clock, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const navigate=useNavigate()
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={course.imageUrl} 
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-600">{course.category}</span>
          <span className="text-sm text-gray-500">{course.level}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2" onClick={()=>{navigate(`/course/${course.id}`)}}>{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex items-center text-gray-500 mb-4">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-sm">{course.duration}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {course.tags.map(tag => (
            <span 
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}