import SanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
export const Client = SanityClient({
    projectId: 'vqzctmyz',
    dataset: 'production',
    token: 'skOKclgl2gAgkr53bEz4Nhp1u5b3mVoqSBKjYgTNJ1uScqalDyz7fneETC02HG5MaIAHeBnh4nMfFzdujTp2KIquPmqLLSveFaQj2ZnmU6yFQp9m71lSX0r0DfPQpKox0BJXFHHyWrGVIZcbpHYuPLj12F1Uy8QffVa0tLIKEo4GTwNFLACU', // or leave blank to be anonymous user
    useCdn: true
})

export const builder =imageUrlBuilder(Client)