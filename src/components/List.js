import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';
import { urlPeluches } from '../helpers/url';
import '../styles/style.css'

export const List = () => {

    const [registro, setRegistro] = useState([])

    const getData = () => {
        axios.get(urlPeluches)
        .then(response => {
            setRegistro(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const deleteData = (id) => {
        axios.delete(urlPeluches + id)
        .then(resp => {
            getData()
            console.log(resp);
        }).catch(error => console.log(error))
    }

    useEffect(() => {
      getData()
    }, [])
    

   console.log(registro);
    return (
        <div>
             <CardGroup>
                         {
                             registro.map(reg => (
                
                <Card className='container_card' key={reg.id}>
                <Card.Img variant="top" src={reg.image} width="150px"/>
                    <Card.Body>
                    <Card.Title>{reg.name}</Card.Title>
                         <Card.Text>
                         {reg.desc}
                        </Card.Text>
                        <Card.Text>
                         {reg.price}
                        </Card.Text>
                        <Button variant="danger" onClick={()=> deleteData(reg.id)}>Eliminar</Button>
                    </Card.Body>
                </Card>
                
                             ))
                         }
          </CardGroup>
            
        </div>
    )
}
