import React,{useEffect,useState} from 'react'
import {urlFor} from '../Input/Utils'
import {RiDeleteBin5Line} from 'react-icons/ri'
import {BsImages} from 'react-icons/bs'
import {
    Dialog,
    Button,
    Card,
    Container,
    Flex,
    Spinner,
    Grid
} from '@sanity/ui'
import {client} from '../../Client'
const deleteElement = async (key,document)=>{
    client.patch(`${document}`).unset([`gallery.media[_key=="${key}"]`]).commit().then(async ()=>{
        await client.delete(key).then(e=>{
            console.log(e)
         })
    })
    }
const pComponent=({value,document})=> {
    
    const [isOpen,setIsOpen] = useState(false)

    return (
        <>
        <Button
        tone='primary'
        onClick={()=>{setIsOpen(true)}}
        fontSize={[2, 2, 3]}
        style={{
            height:'90%',
            marginLeft:'10%'
        }}
        >{value && value.length}<BsImages /></Button>
        {
           isOpen ? ( <Dialog 
            onClose={()=>setIsOpen(false)}
            header="Media"
            zOffset={1000}
            
            >
                <Container padding={2} width={0} overflow='visible'>
                <Grid
                    columns={[2, 2, 2, 2]}
                >
            {
               value && value.map(file=>{
                    return (
                       <Card key={file._key}style={{
                           padding:0
                       }} data-key={file._key} data-document={document._id}>
                        <Button tone='primary' style={{
                                    position:'relative',
                                    top:' 20%',
                                    left:'10%',
                                    zIndex:2
                                }} 
                                fontSize={[0.5,0.5,0.5]} 
                                icon={RiDeleteBin5Line}
                                onClick={(e)=>{
                                    const dataKey=e.currentTarget.parentElement.getAttribute('data-key')
                                    const dataDocument=e.currentTarget.parentElement.getAttribute('data-document')
                                    console.log(dataKey,dataDocument)
                                    deleteElement(dataKey,dataDocument)
                                  
                                }}
                                />
                       <img style={{
                           width:'100%',
                           position:'relative',
                           top:0,
                           left:0
                       }} src={urlFor(file)}  />
                       </Card>
                    )
                })
            }
            </Grid>
            </Container>
            </Dialog>):(null)
        }
        
        </>
    )
}

export default pComponent
