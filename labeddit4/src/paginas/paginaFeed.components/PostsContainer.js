import React, { useState } from 'react';
import syled from 'styled-components';
import Post from './Post';


export default function PostsContainer(){
    const [listaPosts, setListaPosts] = useState([
        {
            nome: 'Esmeralda',
            texto: 'Esmeralda é uma telenovela brasileira, produzida pelo SBT e exibida entre 6 de dezembro de 2004 e 19 de julho de 2005, em 194 capítulos, substituindo Seus Olhos e sendo substituída por Os Ricos também Choram, no horário das 21h00 horas. Foi a 8ª novela produzida em parceria com a Televisa. Escrita por Henrique Zambelli, Rogério Garcia com supervisão de texto de Therezinha Giácomo e dirigida por Jacques Lagôa, Luiz Antônio Piá, direção geral de Henrique Zambelli e direção geral de teledramaturgia de David Grimberg, é',
            comentarios: 8,
            curtidas: -15
        },
        {
            nome: 'POSX',
            texto: 'Aknl aklndas aldlas oajsdlasn',
            comentarios: 324,
            curtidas: 12
        },
        {
            nome: 'MASZ',
            texto: 'Aknl aklndas aldlas oajsdlasn',
            comentarios: 10,
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