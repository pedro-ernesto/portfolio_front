import { AspectRatio, Box, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next"
import Head from "next/head";
import { RichText } from "prismic-dom";
import { Header } from "../../components/header";
import { getPrismicClient } from '../../services/prismic'

interface PostProps {
    post: {
        slug:string;
        title: string;
        content: string;
        updatedAt: string;
        videoUrl: string;
        tags: string[];
    }
}

export default function Post({post}: PostProps) {
    
    return (
        <>
            <Head>
                <title>{`${post.title} | dr1n `}</title>
            </Head>

            <Header/>

            <Box maxWidth={'1120px'} marginX='auto' px={'2rem'} >
                <Box maxWidth={'720px'} marginTop='3rem' marginBottom={'auto'}>
                    <Text fontSize={'3.5rem'} fontWeight='900'>{post.title}</Text>
                    
                    {post.tags.map(tag=> (
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

                    <Text 
                        display={'block'} 
                        fontSize='1rem' 
                        color={'gray.300'} 
                        marginTop='1.5rem'
                    >
                        {post.updatedAt}</Text>
                    
                    <Box 
                        dangerouslySetInnerHTML={{__html: post.content}}
                        marginTop= '2rem'
                        lineHeight= '2rem'
                        fontSize= '1.125rem'
                        color= 'gray.100'                      
                        sx={{
                            'p': {
                                marginTop:'1.5rem'
                            },
                            'ul': {
                                marginTop:'1.5rem',
                                paddingLeft:'1.5rem'
                            },
                            'ul + li': {
                                marginTop: '0.5rem'
                            }
                        }}
                    />
                </Box>

                {post.videoUrl && 
                    (<AspectRatio marginTop={'1rem'} maxW={'720px'} ratio={1}>
                        <iframe 
                            title='post-video'
                            src={post.videoUrl}
                            allowFullScreen
                        />
                    </AspectRatio>)
                }
            </Box>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
    const { slug } = params;

    if (slug === 'favicon.png') {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    const prismic = getPrismicClient(req)

    const response = await prismic.getByUID<any>('post', String(slug), {})
    

    const post = {
        slug,
        title: RichText.asText(response.data.title),
        content: RichText.asHtml(response.data.content),
        videoUrl:( response.data.video.embed_url).replace('watch?v=', 'embed/'),
        tags: response.tags,
        updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
    })}

    return {
        props: {
            post
        }
    }
    
}