import Input from "../components/Input"

export default {
  name: 'Services',
  title: 'Servizi',
  type: 'document',
  fields: [
    {
      name:'title',
      title:'Title',
      type:'string'
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },

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
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name:'gallery',
      title:'Gallery',
      type:'album_gallery'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'Image',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
