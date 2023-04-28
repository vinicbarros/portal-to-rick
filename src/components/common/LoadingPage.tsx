import { MutatingDots } from "react-loader-spinner";
import styled from "styled-components";

export default function LoadingPage() {
  return (
    <Container>
      <MutatingDots
        height="100"
        width="100"
        color="#4fa94d"
        secondaryColor="#4fa94d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible
      />
      <Title>Searching through portals</Title>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
`;

const Title = styled.h1`
  color: #202329;
  font-weight: bold;
  font-size: 20px;
`;
