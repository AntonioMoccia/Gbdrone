export default {
    name: 'ServicesPage',
    title: 'ServicesPage',
    type: 'document',
    fields: [

        {
            name: 'image',
            title: 'Immagine',
            type: 'image',
            options: {
                hotspot: true,
              },
        },
        {
            name: 'parallax',
            title: 'Parallax on image',
            type: 'boolean',
        },
        {
            name: 'Services',
            title: 'Services',
            type: 'array',
            of:[
                {type:'Services'}
            ]
        },
    ]
}