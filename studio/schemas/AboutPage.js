export default{
  
        name: 'AboutPage',
        title: 'AboutPage',
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
                title:'titolo',
                name:'titolo',
                type:'text'  
              },
                {
                    name: 'text',
                    title: 'Testo',
                    type: 'blockContent',
                },
    
        ],
    }
