import styled from "styled-components";
import { ICharacter } from "../interfaces/character";
import CharacterComponent from "./CharacterComponent";

export default function MappedCharacters({ data }: { data: ICharacter[] }) {
  return (
    <MapBox>
      {data.map((character, index) => (
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
