import Prismic from '@prismicio/client';

export function getPrismicClient(req?: unknown) {
    const prismic = Prismic.client(
        'https://portfolio-dr1n.prismic.io/api/v2',
        {
            req,
            accessToken: process.env.PRISMIC_ACCESS_TOKEN
        }
    )
    return prismic
}