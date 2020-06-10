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

export default function PostsContainer(props) {
const [post, setPost] = useState({
    nome: 'XPTO',
    texto: 'useState(initialState: { nome: string; texto: string; } | (() => { nome: string; texto: string; })): [{ nome: string; texto: string; }, React.Dispatch<React.SetStateAction<{ nome: string; texto: string; }>>]',
    curtidas: 45,
    comentarios: 0
})
  return (
    <CardPost>
      <Typography align="center" color="primary" variant="h5">
        {post.nome}
      </Typography>
      <hr />
      <Typography align="justify">{post.texto}</Typography>
      <Votes>
        <ArrowUp color="primary" style={{cursor: 'pointer'}}/> {post.curtidas}{" "}
        <ArrowDown color="secondary" style={{cursor: 'pointer'}}/>
      </Votes>
      <Comentarios>Comentários: {post.comentarios}</Comentarios>
    </CardPost>
  );
}
