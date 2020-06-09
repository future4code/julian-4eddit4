import React, { useState } from 'react';
import syled from 'styled-components';
import Post from './Post';


export default function PostsContainer(){
    const [listaPosts, setListaPosts] = useState([
        {
            nome: 'XPTO',
            texto: 'Aknl aklndas aldlas oajsdlasn',
            comentarios: 8,
            curtidas: -15
        },
        {
            nome: 'POSX',
            texto: 'Aknl aklndas aldlas oajsdlasn',
            comentarios: 8,
            curtidas: 12
        },
        {
            nome: 'MASZ',
            texto: 'Aknl aklndas aldlas oajsdlasn',
            comentarios: 8,
            curtidas: -112
        }
    ])

    return (
        <div>
            {listaPosts.map(post => {
                return (<Post post={post}/>)
            })}
        </div>
    )

}