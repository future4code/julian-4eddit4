import React, { useState } from "react";
import { Card, Typography } from "@material-ui/core";
import styled from "styled-components";
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
  }
`;

const Votes = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

export default function Comentario(props) {

  return (
    <CardComentario>
      <Typography align="center" color="primary" variant="h5">
        {props.comentario.nome}
      </Typography>
      <hr />
      <Typography align="justify">{props.comentario.texto}</Typography>
      <Votes>
        <ArrowUp color="primary" style={{cursor: 'pointer'}}/> {props.comentario.curtidas}{" "}
        <ArrowDown color="secondary" style={{cursor: 'pointer'}}/>
      </Votes>
    </CardComentario>
  );
}
