import styled from "styled-components";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { InfosData } from "../../contexts/InfosContext";

export default function ButtonWrap() {
  const { page, setPage } = InfosData();

  return (
    <Container>
      <Button
        disabled={page === 1}
        type="button"
        onClick={() => {
          setPage(page - 1);
        }}
      >
        <GrLinkPrevious size={20} />
      </Button>

      <PageCount>Page {page}</PageCount>

      <Button
        type="button"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        <GrLinkNext
          size={20}
          color="white"
        />
      </Button>
    </Container>
  );
}

const Container = styled.section`
  margin-top: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: #5cad4a;
  border: 1px solid #488e46;
  border-radius: 20px;
  width: 120px;
  height: 40px;
  color: #ffffff;
  font-weight: bold;
  font-size: 15px;

  &:disabled {
    background-color: #20771d;
    opacity: 0.4;
  }
`;

const PageCount = styled.p`
  align-self: center;
  font-size: 20px;
`;
