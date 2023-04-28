import { useState } from "react";
import styled from "styled-components";
import ButtonWrap from "./common/ButtonWrap";
import Header from "./Header/Header";
import MappedCharacters from "./MappedCharacters";
import { SearchBar } from "./SearchBar/SearchBar";

export default function ContentBox() {
  return (
    <>
      <Header />
      <Container>
        <MappedCharacters />
        <ButtonWrap />
      </Container>
    </>
  );
}

const Container = styled.main`
  width: 90%;
  margin-inline: auto;
  padding-bottom: 40px;
`;
