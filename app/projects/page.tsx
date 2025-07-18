'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/projectsCard'; 
type Project = {
  title: string;
  description: string;
  tools: string[];
  link: string;
  image: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Portfolio Website',
      description: 'A simple portfolio website',
      tools: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://umairsolangiportfolio.web.app/',
      image: '/portfolio.png'
    },
    {
      title: 'Ecommerce Shoes Website',
      description: 'An online marketplace e-commerce shoes website',
      tools: ['HTML', 'CSS', 'JavaScript'],
      link: '#',
      image: '/shoe.png'
    }
  ];

  return (
    <>
      <div className="bg-gray-100 w-full">
        <Navbar />
      </div>

      <main className="max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-start justify-center min-h-screen bg-white text-gray-800">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </main>

      <div className="bg-gray-900 text-white w-full">
        <Footer />
      </div>
    </>
  );
}
