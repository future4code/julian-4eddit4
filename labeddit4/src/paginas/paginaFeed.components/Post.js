import React, { useState } from "react";
import { useHistory } from 'react-router';
import { Card, Typography } from "@material-ui/core";
import styled from "styled-components";
import axios from 'axios';
import ArrowUp from "@material-ui/icons/ArrowUpwardRounded";
import ArrowDown from "@material-ui/icons/ArrowDownwardRounded";

const CardPost = styled(Card)`
  && {
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    width: 500px;
    padding: 10px 10px;
    padding-bottom: 50px;
    min-height: 200px;
    position: relative;
    :hover{
      cursor: pointer;
      border: 1px solid black;
    }
  }
`;

const Votes = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;
const Comentarios = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export default function Post(props) {

  const history = useHistory();

  const irParaPost = (e) =>{
    const id = e.currentTarget.getAttribute('data-key');

    history.push(`/feed/${id}`);
    
  }

  return (
    <CardPost data-key={props.post.id} onClick={irParaPost}>
      <Typography align="center" color="primary" variant="h5">
        {props.post.username}: {props.post.title}
      </Typography>
      <hr />
      <Typography align="justify">{props.post.text}</Typography>
      <Votes>
        <ArrowUp color="primary" style={{cursor: 'pointer'}}/> {props.post.votesCount}{" "}
        <ArrowDown color="secondary" style={{cursor: 'pointer'}}/>
      </Votes>
      <Comentarios>Comentários: {props.post.commentsCount}</Comentarios>
    </CardPost>
  );
}
