import styled from "styled-components";

const HighScoreAlert = styled.div`
  transform: rotate(25deg);
  position: absolute;
  right: 270px;
  border-radius: 4px;
  width: 250px;
  height: 50px;
  background-color: black;
  border: 1px solid white;

  @media screen and (max-width: 768px) {
    top: 123px;
    right: 5px;
    width: 150px;
    height: 30px;
  }
`;

export default HighScoreAlert;
