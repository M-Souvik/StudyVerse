import { useMemo ,useState } from 'react'
import { CourseList } from '../components/CourseList';
import { Category } from '../types';
import { courses } from '../data/courses';
import { Search } from 'lucide-react';
import { BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Headers from '../components/Headers';

const AllCourses = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const navigate=useNavigate()
  
    const categories: (Category | 'All')[] = [
      'All', 
      'Programming', 
      'Engineering',
      'Medical',
      'Civil Services',
      'Design', 
      'Business', 
      'Marketing', 
      'Data Science'
    ];
    
    const filteredCourses = useMemo(() => {
      let filtered = selectedCategory === 'All' 
        ? courses 
        : courses.filter(course => course.category === selectedCategory);
  
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(course => 
          course.title.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query) ||
          course.tags.some(tag => tag.toLowerCase().includes(query))
        );
  
        // Sort courses by relevance
        filtered.sort((a, b) => {
          const aTitle = a.title.toLowerCase();
          const bTitle = b.title.toLowerCase();
          const aContainsQuery = aTitle.includes(query);
          const bContainsQuery = bTitle.includes(query);
  
          if (aContainsQuery && !bContainsQuery) return -1;
          if (!aContainsQuery && bContainsQuery) return 1;
          return 0;
        });
      }
  
      return filtered;
    }, [selectedCategory, searchQuery]);
  
    return (
      <div className="min-h-screen bg-gray-50">
       <Headers searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
  
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
  
          {filteredCourses.length > 0 ? (
            <CourseList courses={filteredCourses} />
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900">No courses found</h3>
              <p className="mt-2 text-sm text-gray-500">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </main>
      </div>

)}
export default AllCourses