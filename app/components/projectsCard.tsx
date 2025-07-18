interface Project {
  image?: string;
  title: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex gap-4">
          {project.githubLink && (
            <a href={project.githubLink} className="text-blue-500" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {project.liveLink && (
            <a href={project.liveLink} className="text-green-500" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
