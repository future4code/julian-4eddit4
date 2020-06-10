import React, { useState } from "react";
import { Card, Typography } from "@material-ui/core";
import styled from "styled-components";
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
  return (
    <CardPost>
      <Typography align="center" color="primary" variant="h5">
        {props.post.nome}
      </Typography>
      <hr />
      <Typography align="justify">{props.post.texto}</Typography>
      <Votes>
        <ArrowUp color="primary" style={{cursor: 'pointer'}}/> {props.post.curtidas}{" "}
        <ArrowDown color="secondary" style={{cursor: 'pointer'}}/>
      </Votes>
      <Comentarios>Comentários: {props.post.comentarios}</Comentarios>
    </CardPost>
  );
}
