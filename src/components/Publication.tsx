import React from 'react';
import { Publication as PublicationType } from '@/types/Publication';

const Publication: React.FC<PublicationType> = ({ title, venue, authors, links }) => {
    return (
        <div className="publication">
            <strong className="text-lg italic">{title}</strong>
            <br />
            <em className="text-gray-700">{venue}</em>
            <br />
            {authors.map((author, idx) => (
                <React.Fragment key={idx}>
                    {author === "Sangjun Park" ? (
                        <strong>{author}</strong>
                    ) : (
                        author
                    )}
                    {idx < authors.length - 1 ? ", " : ""}
                </React.Fragment>
            ))}
            <br/>
            {Object.entries(links).length > 0 && (
                <span className="space-x-2">
                    {Object.entries(links).map(([key, url]) => (
                        <a
                            key={key}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            [{key}]
                        </a>
                    ))}
                </span>
            )}
        </div>
    );
};

export default Publication;
