export default {
    name: 'ContactPage',
    title: 'ContactPage',
    type: 'document',
    fields: [
        {
            name: 'media',
            title: 'Media',
            type: 'array',
            of:[{
              type:'image',    
              options: {
              hotspot: true,
            }
          },{
            type: 'file',
            options:{
                accept:'video/*'
            }
          }
        ],
        validation:rule=>rule.custom(el=>{
          if(el.length>1){
            return "Esiste gia una immagine o un video"
          }else{
            return true
          }
        })
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