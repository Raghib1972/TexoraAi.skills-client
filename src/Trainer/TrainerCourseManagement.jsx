
import React, { useState } from 'react';
import { 
  Plus, Edit2, Trash2, Eye, Search, BookOpen, Users, Clock, Star, 
  Video, FileText, X, Save, ChevronDown, ChevronRight 
} from 'lucide-react';

const TrainerCourseManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const courses = [
    {
      id: 1,
      title: 'Product Management Mastery',
      instructor: 'Ex-Google PM',
      duration: '8 weeks',
      students: '2,500+',
      rating: 4.9,
      category: 'Product',
      status: 'Published'
    },
    {
      id: 2,
      title: 'UI/UX Design Bootcamp',
      instructor: 'Ex-Airbnb Designer',
      duration: '12 weeks',
      students: '3,200+',
      rating: 5.0,
      category: 'Design',
      status: 'Published'
    },
    {
      id: 3,
      title: 'Growth Marketing Pro',
      instructor: 'Ex-Uber Growth',
      duration: '8 weeks',
      students: '2,800+',
      rating: 4.9,
      category: 'Growth & Marketing',
      status: 'Published'
    },
    {
      id: 4,
      title: 'Advanced JavaScript',
      instructor: 'Senior Developer',
      duration: '6 weeks',
      students: '1,800+',
      rating: 4.8,
      category: 'Product',
      status: 'Draft'
    },
    {
      id: 5,
      title: 'React Native Mastery',
      instructor: 'Mobile Expert',
      duration: '10 weeks',
      students: '2,100+',
      rating: 4.7,
      category: 'Design',
      status: 'Published'
    }
  ];

  const categories = ['All', 'Product', 'Design', 'Growth & Marketing'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = (id) => {
    if (confirm('Delete this course?')) {
      console.log('Course deleted:', id);
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-1">Course Management</h1>
          <p className="text-gray-400">Manage all your courses and batches</p>
        </div>
        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 
          text-white px-8 py-3 rounded-xl flex items-center gap-2 font-medium shadow-xl hover:shadow-2xl transition-all">
          <Plus size={20} />
          New Course
        </button>
      </div>

      {/* Search & Filters */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className="relative bg-gray-800 rounded-xl p-3">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search courses or instructors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-2 bg-transparent text-white border-none outline-none placeholder-gray-400 text-lg"
            />
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <BookOpen size={24} />
            </div>
            <div>
              <p className="text-indigo-100">Total Courses</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl p-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Users size={24} />
            </div>
            <div>
              <p className="text-emerald-100">Active Students</p>
              <p className="text-2xl font-bold">5,420</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Star size={24} />
            </div>
            <div>
              <p className="text-cyan-100">Avg Rating</p>
              <p className="text-2xl font-bold">4.8</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-xl p-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-orange-100">Avg Duration</p>
              <p className="text-2xl font-bold">8.2 weeks</p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-indigo-500/50 hover:bg-gray-700/50 transition-all group">
            {/* Status Badge */}
            <div className="flex justify-between items-start mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                course.status === 'Published' 
                  ? 'bg-green-600/20 text-green-300 border border-green-500/30' 
                  : 'bg-yellow-600/20 text-yellow-300 border border-yellow-500/30'
              }`}>
                {course.status}
              </span>
              <span className="text-xs bg-gray-700/50 px-3 py-1 rounded-full">{course.category}</span>
            </div>

            {/* Course Info */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-indigo-300 transition-colors">
                {course.title}
              </h3>
              <p className="text-gray-400 mb-4">{course.instructor}</p>
              
              <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-gray-500" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-gray-500" />
                  <span>{course.students}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Star size={18} className="text-yellow-400 fill-yellow-400" />
                <span className="font-semibold text-white">{course.rating}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-medium transition-all group-hover:scale-105">
                <Edit2 size={18} />
                Edit
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-medium transition-all group-hover:scale-105">
                <BookOpen size={18} />
                Modules
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-gray-300 py-2 px-4 rounded-lg flex items-center justify-center gap-2 text-sm transition-all col-span-2">
                <Eye size={16} />
                Preview
              </button>
              <button 
                onClick={() => handleDelete(course.id)}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition-all col-span-2"
              >
                <Trash2 size={16} />
                Delete Course
              </button>
            </div>
          </div>
        ))}

        {filteredCourses.length === 0 && (
          <div className="col-span-full text-center py-20">
            <BookOpen size={80} className="mx-auto mb-6 text-gray-600" />
            <h3 className="text-2xl font-bold text-gray-300 mb-3">No courses found</h3>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Adjust your search or filters, or create your first course to get started.
            </p>
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 
              text-white px-8 py-4 rounded-xl flex items-center gap-3 mx-auto font-medium shadow-xl hover:shadow-2xl transition-all">
              <Plus size={24} />
              Create Your First Course
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainerCourseManagement;

