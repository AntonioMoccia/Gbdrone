import React,{useEffect,useRef,useState} from 'react'
import SanityClient from '@sanity/client'
import {withDocument} from 'part:@sanity/form-builder'
import FormField from 'part:@sanity/components/formfields/default'
import PatchEvent, {set, unset,insert,setIfMissing} from 'part:@sanity/form-builder/patch-event'
import imageUrlBuilder from '@sanity/image-url'
import {FaPlusCircle} from 'react-icons/fa'

const client=SanityClient({
    projectId:'vqzctmyz',
    dataset:'production',
    token:'skUxU1EYppo319LPUYUbv3GxObRSeAjkBH5HLwLIi5CoOPVD42i05atMjx8uriLsQc4gYOxMXtOu8dIxCzU4XZdc4jSjAC4wFjXSeb63DweCHRgUaI6cXa4EBvnX3N3biPsAwMJdiC7ookCb0bLSUBcXgOEpXdR0Uf5wdOmzzcLz6XJkTtZe'
})




function Input(props,ref) {
 const {onChange,type,onFocus,value,document}=props
const [initialImage,setInitialImage]=useState([])
const [newImage,setNewImage]=useState([])

 const uploadImage=async (file)=>{

    await client.assets.upload('image',file).then(image=>{
        console.log(image)
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
const uploadVideo=async (file)=>{

    await client.assets.upload('file',file).then(video=>{
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

    useEffect(()=>{

client.fetch(`*[_id=="${document._id}"]{
   Album[]{
        "url":asset->url,
            _type 
        }
}`).then(result=>{
        console.log(result[0].Album)
    setInitialImage(result[0].Album)
})
})




    const handleChange=(e)=>{
        setNewImage(Array.from(e.target.files))
        Array.from(e.target.files).map(async file=>{
            if(file.type.includes('image')){
                uploadImage(file)
            }
            else if(file.type.includes('video')){
                uploadVideo(file)
            }
            else{
         alert('inserisci file video e immagini')
            }

        })


    }


    return (
        <FormField label={type.title} description={type.description}>
        <div style={{
            width:'100%',
            height:'100%',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'column'
        }}>
            <label for="input">
            <FaPlusCircle style={{
                fontSize:30,
                cursor:'pointer'
            }} />
            </label>
            <input type='file' style={{
                display:'none'
            }} id='input' multiple onChange={handleChange}/>
    <div>
        {
            initialImage && initialImage.map(file=>{
                if(file._type=='image'){
                    return(
                        <img style={{
                            heigth:'300px',
                            width:'300px'
                        }} src={file.url} />
                    )
                }else{
                    return(
                        <video style={{
                            width:'300px'
                        }} controls >
                            <source src={file.url} />
                        </video>
                    )
                }
            })
        }
        
    </div>

        </div>
        </FormField>

    )
}

export default withDocument(Input)
