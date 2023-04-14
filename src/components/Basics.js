import styles from '@/styles/Basics.module.css'
import Image from 'next/image'
import { useMemo } from 'react'
import Link from 'next/link'

import { getMDXComponent } from 'mdx-bundler/client'

// Link
const CustomLink = ({ }) => <Link></Link>

// Image
const CustomImage = ({ }) => <Image></Image>

const MDXComponents = {
    img: Image,
    a: Link,
}

const MDX = ({ mdxSource }) => {
    const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])
    return <MDXLayout components={MDXComponents} />
}

export {
    CustomImage, CustomLink, MDX
}

