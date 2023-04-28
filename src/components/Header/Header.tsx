import styled from "styled-components";
import { SearchBar } from "../SearchBar/SearchBar";
import FilterBy from "./FilterBy";
import Portal from "../../assets/images/Portal.png";

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
  background-image: url(${Portal});
  background-size: 500px;
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: 180px;
  height: 400px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
`;

const Title = styled.h1`
  font-size: 120px;
  color: #202329;
  font-weight: bold;
  margin-top: 60px;
  margin-bottom: 50px;
  align-self: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const FilterWrap = styled.div`
  display: flex;
  position: absolute;
  right: 40px;
  bottom: 20px;
`;
