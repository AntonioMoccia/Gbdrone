export default {
    name: 'ContactPage',
    title: 'ContactPage',
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
          name: 'numeroTelefono',
          title: 'Numero di telefono',
          type: 'string',
      },
      {
          name: 'email',
          title: 'Email',
          type: 'string',
      },
       {
          name: 'PI',
          title: 'P.Iva',
          type: 'string',
      },
      {
          name: 'Instagram',
          title: 'Instagram',
          type: 'url',
      },
      {
        name: 'Facebook',
        title: 'Facebook',
        type: 'url',
    },
    ],
}