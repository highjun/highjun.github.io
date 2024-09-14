import Link from "next/link";

const Publication: React.FC<{
    href: string;
    title: string;
    authors: string;
    venue: string;
}> = ({
    href, title, authors, venue
}) => {
        return (
            <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-xs dark:border-gray-700 dark:bg-gray-800 p-4">
                <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h4>
                <p className="italic tracking-tight">{authors}</p>
                <p className="text-gray-700 dark:text-gray-400 tracking-tight">
                    {venue}
                </p>
                <Link href={href} className="text-sm text-blue-700">Read more</Link >
            </div>
        );
    }


export default Publication