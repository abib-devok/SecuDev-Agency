'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { motion } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  tech_stack: string[];
  tags: string[];
};

const allTags = ['Web', 'Mobile', 'Sécurité'];

export default function PortfolioGrid() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const fetchProjects = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.from('projects').select('*');
      if (data) {
        setProjects(data);
        setFilteredProjects(data);
      }
      if (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  const handleFilter = (tag: string) => {
    setActiveFilter(tag);
    if (tag === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.tags.includes(tag)));
    }
  };

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-12">
        <button onClick={() => handleFilter('All')} className={`px-4 py-2 rounded-full ${activeFilter === 'All' ? 'bg-brand-green text-white' : 'bg-gray-200'}`}>
          Tous
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => handleFilter(tag)}
            className={`px-4 py-2 rounded-full ${activeFilter === tag ? 'bg-brand-green text-white' : 'bg-gray-200'}`}
          >
            {tag}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <motion.div
            layout
            key={project.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden group"
          >
            <div className="relative h-56">
              <img src={project.image_url} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-lg text-center p-4">{project.description}</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold font-headings">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech_stack.map(tech => (
                  <span key={tech} className="bg-brand-light px-2 py-1 text-sm rounded">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
