export default {
    name: 'HomePage',
    title: 'HomePage',
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
            name: 'HeroText',
            title: 'Testo sull\'immagine',
            type: 'blockContent',
        },
     
        {
            name: 'parallax',
            title: 'Parallax on image',
            type: 'boolean',
        },
        {
            name: 'ButtonText',
            title: 'Testo bottone',
            type: 'text',
        },
        {
            name: 'h1',
            title: 'Titolo Frase',
            type: 'string',
        },
        {
            name: 'Frase',
            title: 'Frase testo',
            type: 'string',
        },
        {
            name: 'Video',
            title: 'Video',
            type: 'file',
            options:{
                accept:'video/*'
            }
        },
    ],
}