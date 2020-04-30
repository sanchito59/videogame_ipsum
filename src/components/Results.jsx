import React from "react";
import ClipboardJS from "clipboard";
import { message } from "antd";
import styled from "styled-components";
import Button from "./Button";
// Assets
import "./../assets/alert.scss";

const OuterContainer = styled.div`
  background-color: black;
  border: 2px solid white;
  width: 50%;
  padding-top: 30px;
  padding-bottom: 10px;
  margin: 60px auto;
  text-align: left;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const ResultsContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  margin: 0px auto;
  text-align: left;
  letter-spacing: 0.5px;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

const ResultsParagraph = styled.p`
  font-family: "Press Start 2P", cursive;
  font-size: 0.8rem;
  width: 90%;
  margin: 10px auto;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 0.55rem;
  }
`;

const CopyWrapper = styled.div`
  display: flex;
  border-bottom: 2px solid white;
  padding-bottom: 30px;
`;

const CopyButton = styled(Button)`
  margin: 0 auto;
  width: 160px;
  padding: 10px;
  transition: box-shadow 0.5s;

  :hover {
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.5s;
  }

  &::before {
    font-family: "Font Awesome 5 Free";
    content: "\f0c5";
    padding-right: 5px;
  }
`;

message.config({
  top: 60,
  duration: 0.5,
  maxCount: 1,
  rtl: true,
});

const success = () => {
  message.success("Copied to clipboard", 1);
};

new ClipboardJS("#copy");

export default function Results(props) {
  const { loremIpsum } = props;

  return (
    <>
      <OuterContainer>
        <CopyWrapper>
          <CopyButton
            id="copy"
            data-clipboard-target="#results"
            onClick={success}
          >
            Copy
          </CopyButton>
        </CopyWrapper>
        <ResultsContainer id="results">
          {loremIpsum.map((paragraph, i) => {
            return <ResultsParagraph key={i}>{paragraph}</ResultsParagraph>;
          })}
        </ResultsContainer>
      </OuterContainer>
    </>
  );
}
