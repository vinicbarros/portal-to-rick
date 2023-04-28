import styled from "styled-components";
import { SearchBar } from "../SearchBar/SearchBar";
import FilterBy from "./FilterBy";

export default function Header() {
  return (
    <HeaderContent>
      <Title>Portal to Rick</Title>
      <FilterWrap>
        <SearchBar />
        <FilterBy />
      </FilterWrap>
    </HeaderContent>
  );
}

const HeaderContent = styled.header`
  background-color: #5cad4a;
  height: 400px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Title = styled.h1`
  font-size: 120px;
  color: #202329;
  font-weight: bold;
  margin-top: 60px;
  margin-bottom: 50px;
  align-self: center;
`;

const FilterWrap = styled.div`
  display: flex;
  position: absolute;
  right: 40px;
  bottom: 20px;
`;
