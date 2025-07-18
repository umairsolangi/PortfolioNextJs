import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/projectsCard';


export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A Simple portfolio website',
      tools: ['HTML', 'CSS', 'Javascript'],
      link: 'https://umairsolangiportfolio.web.app/',
      image: '/portfolio.png'
    },
    {
      title: 'Ecommerce Shoes Website',
      description: 'An online marketplace e-commerce shoes website',
      tools: ['HTML', 'CSS', 'Javascript'],
      link: '#',
      image: '/shoe.png'
    }
  ];


  return (
    <>
      <div className="bg-gray-100 w-full">
        <Navbar />
      </div>
      <main className="max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
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
