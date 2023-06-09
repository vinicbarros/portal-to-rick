import styled from "styled-components";
import { ICharacter } from "../interfaces/character";

export default function CharacterComponent({ data }: { data: ICharacter }) {
  return (
    <CharacterBox>
      <Image
        src={data.image}
        alt={data.name}
      />
      <InfoBox>
        <Name>{data.name}</Name>
        <StatusWrap>
          <StatusSignal status={data.status} />
          <Status>{`${data.status} - ${data.species}`}</Status>
        </StatusWrap>
        <InfoWrap>
          <TitleInfo>Last known location:</TitleInfo>
          <DataInfo>{data.location.name}</DataInfo>
        </InfoWrap>
        <InfoWrap>
          <TitleInfo>First seen in:</TitleInfo>
          <DataInfo>{data.origin.name}</DataInfo>
        </InfoWrap>
      </InfoBox>
    </CharacterBox>
  );
}

const CharacterBox = styled.section`
  width: 230px;
  background-color: #ffffff;
  height: 460px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Image = styled.img`
  width: 230px;
  height: 230px;
  border-radius: 10px 10px 0 0;
`;

const InfoBox = styled.div`
  padding: 10px;
`;

const Name = styled.h1`
  font-weight: bold;
  font-size: 22px;
  color: #0d0d0d;
`;

const StatusWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const StatusSignal = styled.div<StatusType>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    (props.status === "Dead" && "#D63F2E") ||
    (props.status === "Alive" && "#6DCD45") ||
    (props.status === "unknown" && "#9E9E9E")};
  margin-right: 8px;
`;

const Status = styled.h2`
  color: #0d0d0d;
`;

type StatusType = {
  status: string;
};

const InfoWrap = styled.div`
  margin-top: 20px;
`;

const TitleInfo = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #0d0d0d;
  margin-bottom: 6px;
`;

const DataInfo = styled.h4`
  color: #6e6f72;
  font-size: 17px;
`;
