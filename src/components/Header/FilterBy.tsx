import styled from "styled-components";
import { InfosData } from "../../contexts/InfosContext";

export default function FilterBy() {
  const { setStatus, setPage } = InfosData();

  return (
    <Container>
      <Select
        defaultValue="default"
        onChange={(event) => {
          setStatus(event.target.value);
          setPage(1);
        }}
      >
        <option
          disabled
          hidden
          value="default"
        >
          Status
        </option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </Select>
    </Container>
  );
}

const Select = styled.select`
  border: none;
  height: 57px;
  border-radius: 6px;
  background-color: #f7f7f7;
  width: 120px;
  color: #5e5c5c;
  font-size: 16px;
  padding: 8px;

  @media screen and (max-width: 450px) {
    width: 90px;
    font-size: 14px;
  }
`;

const Container = styled.section`
  position: relative;
  margin-left: 10px;
`;
