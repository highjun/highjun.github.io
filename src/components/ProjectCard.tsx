import React from 'react';

const ProjectCard: React.FC<{
  image: string;
  title: string;
  summary: string;
  link?: string;
}> = ({ image, title, summary, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col w-fit md:flex-row md:w-full items-stretch border border-gray-100">
      <div className="w-[300px] h-[225px] flex-shrink-0 bg-gray-100 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
          width={400}
          height={300}
        />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-gray-600 line-clamp-5 ">{summary}</p>
        </div>
        <div className="self-end mt-auto">
          {link ? (
            <a
              href={link}
              className="text-blue-600 hover:underline font-medium text-sm w-fit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More →
            </a>
          ) : (
            <span className="text-gray-400 font-medium text-sm w-fit">Detail page is not ready yet...</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 