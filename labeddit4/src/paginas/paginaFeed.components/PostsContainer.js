import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Post from './Post';


export default function PostsContainer(){
    const [listaPosts, setListaPosts] = useState([]);

    useEffect(() => {
        pegaPosts();
    }, [])

    const pegaPosts = () =>{
        const token = window.localStorage.getItem('token');

        const headers = {
            'Authorization': token
        }

        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts', {headers})

        .then(res => {
            setListaPosts(res.data.posts);
        })
        .catch(err => console.log(err))

    }


    return (
        <div>
            {listaPosts.map(post => {
                return (<Post post={post} key={post.id}/>)
            })}
        </div>
    )

}