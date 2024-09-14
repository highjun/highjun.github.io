import { Card } from "flowbite-react";
import Link from "next/link";

const ProjectCard: React.FC<{
  href: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}> = ({
  href, imgSrc, imgAlt, title, description
}) => {
    return (
      <Link href={href}>
        <Card
          className="max-w-sm"
          imgAlt={imgAlt}
          imgSrc={imgSrc}
        >
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </Card>
      </Link>
    );
  }


export default ProjectCard