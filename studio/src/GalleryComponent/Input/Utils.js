import {client} from '../../Client'
import PatchEvent,{setIfMissing,insert} from 'part:@sanity/form-builder/patch-event'
import imageUrlBuilder from '@sanity/image-url'

 const builder = imageUrlBuilder(client)

 export function urlFor(file) {
   if(file.asset==undefined){
       return file.url
   }else{
       return builder.image(file.asset).url()
   }
 
}

export const deleteFromGallery=()=>{
    
}


export const uploadImage= (file,onChange)=>{
    client.assets.upload('image',file).then(image=>{
                onChange(
                   PatchEvent.from([
                   setIfMissing([]),
                   insert([
                       {
                           _type: 'image',
                           _key:image._id,
                       asset: {
                       _type: "reference",
                       _ref: image._id
                       }
                   }
               ],"after",[-1])
               ]))
               
           })
}
export const uploadVideo= (file,onChange)=>{

    client.assets.upload('file',file).then(video=>{
       onChange(
           PatchEvent.from([
           setIfMissing([]),
           insert([
              {
                   _type: 'file',
                   _key:video._id,
               asset: {
               _type: "reference",
               _ref: video._id
               }
           }
           ],"after",[-1])
       ]))
       
   })
}