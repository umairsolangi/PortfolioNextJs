export default function ProjectCard({ project }) {
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
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="mt-1">{project.description}</p>
        <p className="text-sm text-gray-500 mt-2">{project.tools.join(', ')}</p>
        <a
          href={project.link}
          className="text-blue-500 underline text-sm mt-3 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
