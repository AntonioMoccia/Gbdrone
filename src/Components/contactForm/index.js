import React,{useRef,useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap'
import emailjs from 'emailjs-com';
import './style.scss'
function Index(){

const [email,setEmail] = useState("")
const [emailText,setEmailText] = useState("")
const [status,setStatus] = useState(0)

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      

      emailjs.sendForm('service_dni1ubt', 'template_eeipv81', form.current, 'user_UdXUyuJokIsW4SyplhL0Q')
        .then((result) => {
            setStatus(200)
        }, (error) => {
            setStatus(400)
        });
    };

    return(
        <>
            <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Il tuo nome</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="il tuo nome" 
                    name="from_name" 

                    />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>La tua email</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="name@example.com" 
                    name="user_email"  
                   
                    />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Messaggio</Form.Label>
                <Form.Control 
                as="textarea" 
                name="message" 
                rows={3} 
                />
            </Form.Group>
            <Button variant="light" type='submit' > Invia </Button>
        
            </Form>
            <div className='response-message'>
                   {
                       status!==0?(
                           <>
                           {
                               status==200 ? (
                                <div className='true-message'>
                                Messaggio inviato con successo!
                            </div>
                               ):(
                                <div className='false-message'>
                                Messaggio non inviato, controlla i dati inseriti!
                            </div>
                               )
                           }
                           </>
                       ):(null)
                   }
            </div>
        </>
    )
}
export default Index
