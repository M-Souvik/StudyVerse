import React from 'react'
import Headers from '../components/Headers'
import { useNavigate, useParams } from 'react-router-dom'
import { courses } from '../data/courses';

const CourseDetails = () => {
  const params = useParams();
  const course = courses.find((c) => c.id === params.id);
  const navigate=useNavigate()

  return (
    <div className='min-h-screen bg-gray-50'>
      <Headers />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {course ? (
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h1 className='text-3xl font-bold mb-4'>{course.title}</h1>
            <p className='text-gray-700 mb-4'>{course.description}</p>
            <div className='flex items-center justify-between mb-2'>
              <span className='text-sm font-medium text-blue-600'>{course.category}</span>
              <span className='text-sm text-gray-500'>{course.level}</span>
            </div>
            <div className='flex items-center text-gray-500 mb-4'>
              <span className='text-sm'>{course.duration}</span>
            </div>
            <h2 className='text-2xl font-semibold mb-4'>Modules</h2>
            <div className='space-y-4'>
              {course.modules.map(module => (
                <div key={module.id} className='bg-gray-100 p-4 transition hover:scale-[1.01] rounded-md' onClick={()=>{navigate(`/course/${course.id}/module/${module.id}`)}}>
                  <h3 className='text-lg font-medium' >{module.module_name}</h3>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className='text-center py-12'>
            <h3 className='text-lg font-medium text-gray-900'>Course not found</h3>
            <p className='mt-2 text-sm text-gray-500'>The course you are looking for does not exist.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CourseDetails