import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { InfosData } from "../contexts/InfosContext";
import { ICharacter } from "../interfaces/character";
import GetCharacters from "../services/GetCharacter";
import { characterDataType } from "../types/characterDataType";
import CharacterComponent from "./CharacterComponent";
import LoadingPage from "./common/LoadingPage";

export default function MappedCharacters() {
  const { page, name, status } = InfosData();

  const { loading, data } = useQuery<characterDataType>(GetCharacters({ page, name, status }));

  if (loading || !data) return <LoadingPage />;

  return (
    <MapBox>
      {data.characters.results.map((character, index) => (
        <CharacterComponent
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          data={character}
        />
      ))}
    </MapBox>
  );
}

const MapBox = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;
