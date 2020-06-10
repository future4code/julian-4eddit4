import React, { useState } from 'react';
import syled from 'styled-components';
import Comentario from './Comentario';


export default function ComentariosContainer(){
    const [listaComentarios, setListaComentarios] = useState([
        {
            nome: 'HGP',
            texto: 'The API documentation of the Icon React component. Learn more about the props and the CSS customization points. Amaknda.aa oadokasmdlas oaniflaskfnsalnf oasmdasmnfoloo',
            curtidas: -15
        },
        {
            nome: 'POSX',
            texto: 'VThe API documentation of the Icon React component. Learn more about the props and the CSS customization points.',
            curtidas: 12
        },
        {
            nome: 'MASZ',
            texto: 'Aknl aklndas aldlas oajsdsadad lasn',
            curtidas: -112
        }
    ])

    return (
        <div>
            {listaComentarios.map(comentario => {
                return (<Comentario comentario={comentario}/>)
            })}
        </div>
    )

}