import { GetStaticProps } from "next"
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import { useEffect, useState } from "react";

import { getPrismicClient } from "../../services/prismic"
import Head from "next/head"
import { Box, Image, Link as ChakraLink, Text } from "@chakra-ui/react"
import Link from "next/link"
import { Header } from "../../components/header"
import { useRouter } from "next/router"

type Post = {
    slug: string;
    title: string;
    excerpt: string;
    updatedAt: string;
    image: string;
    tags: string[];
}

interface PostsProps{
    posts: Post[]
}

export default function Work({posts}: PostsProps) {
    const [width, setWidth] = useState<number>(null);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        handleWindowSizeChange()
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    
    const isMobile = width <= 850;
    return (
        <>
        <Head>
            <title> Work | dr1n </title>
        </Head>

        <Header logo={!isMobile}/>

        <Box maxW='1120px' mx='auto' px='2rem'>
            <Box maxW='720px' marginTop='4.5rem' marginBottom='2rem'>
                { posts.map(post => (
                    <Link key={post.slug} href={`/work/${post.slug}`}>
                        <ChakraLink 
                            display={"block"}
                            sx={{
                                '& + &': {
                                    marginTop:'2rem',
                                    paddingTop:'2rem',
                                    borderTop:'1px',
                                    borderColor:'gray.700'
                                }
                            }}
                        > 
                                <Text
                                    fontSize='0.9rem'
                                    display='flex'
                                    alignItems='center'
                                    color={'gray.300'}
                                >
                                    {post.updatedAt}</Text>

                                <Text
                                    display={'block'}
                                    fontSize='1.5rem'
                                    marginTop={'1rem'}
                                    lineHeight='2rem'
                                    
                                >
                                        {post.title}</Text>

                                <Image objectFit='contain' boxSize='400px' src={post.image}
                                />
                                <Text 
                                    color={'gray.300'} marginTop='0.5rem' lineHeight='1.625rem'
                                    marginBottom={'0.8rem'}
                                >{post.excerpt}</Text>

                                {post.tags.map(tag => (
                                    <Text key={tag} 
                                        className="tags"
                                        fontSize={'0.7rem'}
                                        color={'yellow'} 
                                        display='inline'
                                        sx={{
                                            '& + &': {
                                                ml:'10px' 
                                            }
                                        }}
                                        padding='0.1rem'
                                        border='1px' 
                                        borderColor={'yellow'}

                                    >{tag}</Text>
                                ))}
         
                        </ChakraLink>
                    
                    </Link>
                ))}
            </Box>
        </Box>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

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
            image: post.data.headerimage.url,
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