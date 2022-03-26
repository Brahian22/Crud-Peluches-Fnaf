import React, { useState } from 'react';
import '../styles/Form.css';
import { urlPeluches } from '../helpers/url';
import { fileUpload } from '../helpers/fileUpload';
import axios from 'axios';
import { Button } from 'react-bootstrap';

export const Form = () => {

    const [peluche, setPeluche] = useState({
        image: '',
        name: '',
        desc: '',
        price: ''
    })

    const { image, name, desc, price } = peluche



    const handleChanged = ({ target }) => {
        setPeluche({
            ...peluche,
            [target.name]: target.value
        })
    }

    const handleFileChanged = e => {
        console.log(e.target)
        const file = e.target.files[0]
        fileUpload(file)
        .then(resp => {
            peluche.image = resp
        }).catch( error => {
            console.log(error);
        })
    }

    const postData = () => {
        axios.post(urlPeluches, peluche)
        .then(resp => console.log(resp.data))
        .catch(error => console.log(error))
    }
   
    const handleSubmit = e => {
        e.preventDefault()
        postData()
        setPeluche({
            image: '',
            name: '',
            desc: '',
            price: ''
        })
    }


    return (
        <div className='contenedor_principal'>
            <img src="https://res.cloudinary.com/ds5jsdvba/image/upload/v1648267303/Peluches/logo_dldmhb.webp" alt=''/>
            <div className='contenedor_form'>
           <form id="formulario" onSubmit={handleSubmit}>
           <h2>Registrar Peluches Funko</h2>
           <hr/>
               <div>
                   <label>Nombre del Peluche</label>
                   <input id="inputNombre" name="name" value={name} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Descripción del Peluche</label>
                   <input id="inputDescripcion" type="text" name="desc" value={desc} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Precio del Peluche</label>
                   <input id="inputPrecio" type="number" name="price" value={price} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Imagen</label>
                   <input id="botonImagen" type="file" name="image" value={image} onChange={handleFileChanged}/> 
               </div>
               <div>
                   <Button variant="success" id="btnRegistro" type='submit'>Enviar</Button> 
               </div>
           </form>
           </div>
        </div>
    )
}
