import React, { useState, useEffect } from "react";
import { Card, Typography } from "@material-ui/core";
import styled from "styled-components";
import axios from "axios";
import ArrowUp from "@material-ui/icons/ArrowUpwardRounded";
import ArrowDown from "@material-ui/icons/ArrowDownwardRounded";

const CardComentario = styled(Card)`
  && {
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    width: 500px;
    padding: 10px 10px;
    padding-bottom: 50px;
    min-height: 120px;
    position: relative;
    background-color: #38232C;
    color: white;
  }
`;

const ArrowUpVotado = styled(ArrowUp)`
  && {
    color: lime;
  }
`;
const ArrowDownVotado = styled(ArrowDown)`
  && {
  }
`;
const Votes = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

export default function Comentario(props) {

  const [votoUp, setVotoUp] = useState(false);
  const [votoDown, setVotoDown] = useState(false);
  
  useEffect(() => {
    if(props.comentario.userVoteDirection === 1){
      setVotoUp(true);
    }else if(props.comentario.userVoteDirection === -1){
      setVotoDown(true);
    }else{
      setVotoUp(false);
      setVotoDown(false);
    }
  }, [])

  const votar = (valor) => {

    if(votoUp || votoDown){
      valor = 0;
    }
    
      const postId = props.postId;
      const commentId = props.comentario.id;
      const token = window.localStorage.getItem('token');
    
      const body = {
        "direction": valor
      }
    
      const headers = {
        'Authorization': token
      }

      axios
      .put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${postId}/comment/${commentId}/vote`, body, {headers})
      .then(res => console.log(res))
      .catch(err => console.log(err))
    
      if(valor === 1){
        setVotoUp(true);
      }else if(valor === -1){
        setVotoDown(true)
      }else{
        setVotoDown(false)
        setVotoUp(false);
      }
    }
  return (
    <CardComentario>
      <Typography align="center" variant="h5">
        {props.comentario.username}
      </Typography>
      <hr />
      <Typography align="justify">{props.comentario.text}</Typography>
      <Votes>
        {votoUp ? (
          <ArrowUpVotado
            color="primary"
            style={{ cursor: "pointer" }}
            onClick={() => votar(1)}
          />
        ) : (
          <ArrowUp style={{ cursor: "pointer" }} onClick={() => votar(1)} />
        )}{" "}
        {props.comentario.votesCount}{" "}
        {votoDown ? (
          <ArrowDownVotado
            color="secondary"
            style={{ cursor: "pointer" }}
            onClick={() => votar(-1)}
          />
        ) : (
          <ArrowDown style={{ cursor: "pointer" }} onClick={() => votar(-1)} />
        )}{" "}
      </Votes>
    </CardComentario>
  );
}
