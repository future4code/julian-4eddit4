import React from "react";
import { useHistory } from "react-router";
import CampoNovoPost from "./paginaFeed.components/CampoNovoPost";
import PostsContainer from "./paginaFeed.components/PostsContainer";
import styled from "styled-components";
export default function PaginaFeed() {
  const history = useHistory();

  if (window.localStorage.getItem("token") === null) {
    history.push("/");
  }

  return (
    <div>
      <CampoNovoPost />
      <PostsContainer />
    </div>
  );
}
