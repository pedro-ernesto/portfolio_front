import { GetStaticProps } from "next"
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

import { getPrismicCliente } from "../../services/prismic"
import Head from "next/head"
import { Box } from "@chakra-ui/react"
import Link from "next/link"
import { Header } from "../../components/header"

type Post = {
    slug: string;
    title: string;
    excerpt: string;
    updatedAt: string;
    tags: string[];
}

interface PostsProps{
    posts: Post[]
}

export default function Work({posts}: PostsProps) {
    return (
        <>
        <Head>
            <title> Work | dr1n </title>
        </Head>

        <Header/>

        <Box maxW='1120px' mx='auto' px='2rem'>
            <Box maxW='720px' marginTop='5rem' marginBottom='auto'>
                { posts.map(post => (
                    <Link key={post.slug} href={`/work/${post.slug}`}>
                        <a>
                                <time>{post.updatedAt}</time>
                                <strong>{post.title}</strong>
                                <p>{post.excerpt}</p>
                                <p>{post.tags}</p>
                        </a>
                    
                    </Link>
                ))}
            </Box>
        </Box>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicCliente()

    const response = await prismic.query<any>([
        Prismic.predicates.at('document.type', 'post')
    ], {
        fetch: ['publication.title', 'publication.content'],
        pageSize: 100,
    })

    const posts = response.results.map(post => {
        return {
            slug: post.uid,
            title: RichText.asText(post.data.title),
            excerpt: post.data.content.find(content=> content.type === 'paragraph')?.text ?? '',
            updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            }),
            tags: post.tags

        }
    })

    return {
        props: {
            posts
        }
    }
}