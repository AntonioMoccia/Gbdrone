import React from 'react'
import Input from './Input'
import pComponent from './Preview'


export default{
    title:"Album",
    name:"album_gallery",
    type:"object",
    fields: [
          {
            name: 'media',
            type: 'array', 
            title: 'Media',
            of:[
                {type:'image'},
                {type:'file'}
                
            ],

            inputComponent : Input
        }
    ],
    preview: {
        select: {
            gallery:'media'
        },
        prepare(selection) {
            const {gallery} = selection
            console.log(gallery)
            return {
              gallery
            }
          },
          component:pComponent
      },
      
}