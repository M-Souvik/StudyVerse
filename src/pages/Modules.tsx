import React from 'react';
import { courses } from '../data/courses';
import { useParams, useNavigate } from 'react-router-dom';
import Headers from '../components/Headers';

const Modules = () => {
    const params = useParams();
    const navigate = useNavigate();
    const module = courses.find(c => c.id === params.id)?.modules.find(m => m.id === params.moduleid);
    const course = courses.find(c => c.id === params.id);

    return (
        <div className="min-h-screen bg-gray-50">
            <Headers />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {module ? (
                    <div className="bg-white rounded-lg shadow-md p-6">
                        {/* <p className="text-gray-700 mb-4">Course: {course?.title}</p> */}
                        {/* <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-blue-600">Module ID: {module.id}</span>
                            </div> */}
                        <div className="mb-4">
                            <iframe 
                                width="100%" 
                                height="500" 
                                src={module.video_link.replace("watch?v=", "embed/")} 
                                title={module.module_name} 
                                // frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                        </div>
                            <h1 className="text-3xl font-bold mb-4">{module.module_name}</h1>
                        {/* <button 
                            onClick={() => navigate(`/course/${course?.id}`)} 
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Back to Course
                        </button> */}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <h3 className="text-lg font-medium text-gray-900">Module not found</h3>
                        <p className="mt-2 text-sm text-gray-500">The module you are looking for does not exist.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Modules;