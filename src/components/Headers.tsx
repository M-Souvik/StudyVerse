import { Search } from 'lucide-react';
import { BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// import React from 'react'

interface SearchQueryProps{
    searchQuery?:string;
    setSearchQuery?: (query: string) => void
}

const Headers = ({searchQuery, setSearchQuery}:SearchQueryProps) => {
    const navigate=useNavigate()
  return (
    <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center cursor-pointer" onClick={()=>navigate('/')}>
                <BookOpen className="h-8 w-8 text-blue-600" />
                <h1 className="ml-2 text-2xl font-bold text-gray-900">StudyVerse</h1>
              </div>
              <div className="relative w-96">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery&&setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </header>
  )
}

export default Headers