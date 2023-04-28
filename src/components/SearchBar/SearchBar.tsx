/* eslint-disable react/jsx-no-bind */
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { DebounceInput } from "react-debounce-input";
import { InfosData } from "../../contexts/InfosContext";

export function SearchBar() {
  const { name, setName, setPage } = InfosData();

  // eslint-disable-next-line consistent-return
  function getDataSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const searchWord = e.target.value;
    setName(searchWord);
    setPage(1);
  }

  const close = () => {
    setName("");
    setPage(1);
  };

  return (
    <ContainerSearch>
      <SearchInputs>
        <DebounceInput
          type="text"
          placeholder="Character name"
          minLength={3}
          value={name}
          debounceTimeout={350}
          onChange={getDataSearch}
        />
        <SearchIcon>
          {name.length === 0 ? (
            <BsSearch color="#C6C6C6" />
          ) : (
            <GrClose
              color="#C6C6C6"
              onClick={close}
              style={{ cursor: "pointer" }}
            />
          )}
        </SearchIcon>
      </SearchInputs>
    </ContainerSearch>
  );
}

const ContainerSearch = styled.div`
  font-family: "Poppins";
  width: 260px;
  position: relative;
`;

interface ISearchInput {
  length: number;
}

const SearchInputs = styled.div`
  height: 57px;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    background-color: #f7f7f7;
    padding: 12px 0px 12px 16px;
    width: 220px;
    height: 17px;
    border: none;
    border-radius: 8px;
    font-size: 18px;
  }
  input::placeholder {
    color: #5e5c5c;
    font-size: 16px;
  }
  input:focus {
    outline: none;
  }
  border-radius: 6px;
`;

const SearchIcon = styled.div`
  width: 50px;
  height: 45px;
  display: grid;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;
