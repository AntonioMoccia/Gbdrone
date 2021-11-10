import sanityClient from '@sanity/client'


export const client = sanityClient({
    projectId: 'vqzctmyz',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skxdVO3rEPYE32reDpobXxvIzKb7eDyJtPCHTp2KU6izbMbqYHbKUvK73YBh7TPCzNHGSVTQkO3RGwBec5bju6JUK15puZNdsUVVEZwKDFFG70SwmXSwoH7wVTsWcf4TQqfSWLd5psV3CQ4GxKqeaMAzkLBQy7XWlUBaRlq3zpFBf9clJffl', // or leave blank for unauthenticated usage

})
