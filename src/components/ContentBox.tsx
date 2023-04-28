import { useQuery } from "@apollo/client";
import { useState } from "react";
import styled from "styled-components";
import GetCharacters from "../services/GetCharacter";
import { characterDataType } from "../types/characterDataType";
import ButtonWrap from "./common/ButtonWrap";
import MappedCharacters from "./MappedCharacters";

export default function ContentBox() {
  const [page, setPage] = useState(1);
  const { loading, data } = useQuery<characterDataType>(GetCharacters(page));

  if (loading || !data) return <>Carregando</>;

  return (
    <Container>
      <MappedCharacters data={data.characters.results} />
      <ButtonWrap
        page={page}
        setPage={setPage}
      />
    </Container>
  );
}

const Container = styled.main`
  width: 90%;
  margin-inline: auto;
  padding-top: 120px;
  padding-bottom: 40px;
`;
