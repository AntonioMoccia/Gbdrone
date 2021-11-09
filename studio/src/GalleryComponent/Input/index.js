import React,{useEffect} from 'react'
import {FormField} from '@sanity/base/components'
import imageUrlBuilder from '@sanity/image-url'
import {withDocument} from 'part:@sanity/form-builder'
import {useId} from '@reach/auto-id'
import {uploadImage,uploadVideo} from './Utils'
import {client} from '../../Client'
import { useForwardedRef } from '@sanity/ui'
import Preview from '../Preview'
import {FaPlusCircle} from 'react-icons/fa'

const iComponent = React.forwardRef((props,ref)=>{

    const inputId =useId()
    const {
        type,         // Schema information
        value,        // Current field value
        readOnly,     // Boolean if field is not editable
        placeholder,  // Placeholder text from the schema
        markers,      // Markers including validation rules
        presence,     // Presence information for collaborative avatars
        compareValue, // Value to check for "edited" functionality
        onFocus,      // Method to handle focus state
        onBlur,       // Method to handle blur state  
        onChange,
        document
    } = props




const handleChange = React.useCallback(
    // useCallback will help with performance
    (event) => {
      const inputValue = event.currentTarget.files

        for (const fileIndex in inputValue) {
            if (Object.hasOwnProperty.call(inputValue, fileIndex)) {
                const file = inputValue[fileIndex];
               if(file.type.includes("image")){
                 uploadImage(file,onChange)
            }else if(file.type.includes("video")){
                   uploadVideo(file,onChange)
               }else{

               }
            }
        }
      // get current value
      // if the value exists, set the data, if not, unset the data
      //onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()))
    },
    [onChange]
  )

    return(
      <>
   
    <FormField 
    description={type.description}  // Creates description from schema
    title={type.title}              // Creates label from schema title
    __unstable_markers={markers}    // Handles all markers including validation
    __unstable_presence={presence}  // Handles presence avatars
    compareValue={compareValue}     // Handles "edited" status
    inputId={inputId}  style={{
      width:'100%',

    }} > 
                <label for="input">
            <FaPlusCircle style={{
                fontSize:30,
                cursor:'pointer'
            }} />
            </label>
    <input type="file" 
    id='input'
          multiple 
            style={{
              display:'none'
            }}
            readOnly={readOnly}           // If "readOnly" is defined make this field read only
          placeholder={placeholder}     // If placeholder is defined, display placeholder text
          onFocus={onFocus}             // Handles focus events
          onBlur={onBlur}               // Handles blur events
          ref={ref}
          onChange={handleChange}
          />
        
    <Preview value={value} document={document}/>
    </FormField>
    
    </>
    )
})

export default withDocument(iComponent)
