'use client';
import { useState } from 'react';
import About from '@/content/about.mdx';
import { profile } from '@/data/about';
import Icon from '@/components/Icon';

const AboutMe: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(profile.photo);

  return (
    <section className="flex flex-col md:flex-row md:gap-8 items-center">
      <div className="flex flex-col items-center w-full md:w-auto">
        <div
          className="rounded-2xl overflow-hidden shadow-md transition-all duration-300 w-64 h-64 max-w-[192px] max-h-[256px]"
          onMouseEnter={() => setImgSrc(profile.animation)}
          onMouseLeave={() => setImgSrc(profile.photo)}
        >
          <img
            src={imgSrc}
            alt={profile.name}
            className="object-cover w-full h-full transition-all duration-300"
          />
        </div>
      </div>
      <div className="text-center md:text-left prose prose-neutral max-w-none w-full">
        <div className="flex flex-col md:flex-row items-center md:justify-between mb-2 md:mb-0">
          <div className="flex flex-row">
            <h1 className="text-2xl font-bold mt-2 mb-2 text-center md:text-left">{profile.name}</h1>
            <a
              href="/pdf/SangjunPark_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 mb-2 ml-2 text-2xl text-center text-blue-600 hover:text-blue-800 hover:underline font-medium"
            >
              CV
            </a>
          </div>
          <div className="flex gap-2">
            {profile.contacts.map((contact) => (
              <a
                key={contact.icon}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
                title={contact.icon}
              >
                <Icon name={contact.icon} />
              </a>
            ))}
          </div>
        </div>
        <About />
      </div>
    </section>
  );
}

export default AboutMe;