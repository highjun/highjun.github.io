import { Card } from "flowbite-react"
import Link from "next/link"

const PostCard: React.FC<{
    date: string;
    title: string;
    description: string;
    href: string;
}> = ({
    date, title, description, href
}) => (
    <Card>
        <div>
            <div className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            <div className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
                {description}
            </div>
            <Link className="text-primary-700 text-sm" href={href}>Read more →</Link>
        </div>
    </Card>
)

export default PostCard