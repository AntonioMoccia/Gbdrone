export default {
    name: 'HomePage',
    title: 'HomePage',
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
            name:'InCostruzione',
            title:'Sito in costruzione',
            type:'boolean',
            InitialValue:'false'
        },
        {
            name: 'ButtonText',
            title: 'Testo bottone',
            type: 'text',
        },
        {
            name:'avatar',
            title:'avatar',
            type:'image'
        },
        {
            name: 'Frase',
            title: 'Frase testo',
            type: 'blockContent',
        },
        {
            name: 'Video',
            title: 'Video',
            type: 'file',
            options:{
                accept:'video/*'
            }
        }
    ],
}