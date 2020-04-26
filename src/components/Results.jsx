import React from "react";
import ClipboardJS from "clipboard";
import styled from "styled-components";
import Button from "./Button";
// Assets
import "./../assets/alert.scss";

const OuterContainer = styled.div`
  background-color: rgb(110, 127, 128);
  width: 50%;
  border-radius: 8px;
  padding-top: 30px;
  padding-bottom: 10px;
  margin: 40px auto;
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
  text-transform: lowercase;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const ResultsParagraph = styled.p`
  width: 90%;
  margin: 10px auto;
  color: white;
`;

const CopyWrapper = styled.div`
  display: flex;
  height: 50px;
`;

const CopyButton = styled(Button)`
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

const Alert = styled.p`
  font-weight: bold;
  font-style: italic;
  display: none;
  padding-left: 20px;
`;

new ClipboardJS("#copy");

export default function Results(props) {
  const { loremIpsum, handleClickShowAlert, showingAlert } = props;
  return (
    <>
      <OuterContainer>
        <CopyWrapper>
          <CopyButton
            id="copy"
            data-clipboard-target="#results"
            className={showingAlert ? "alert" : "no-alert"}
            onClick={handleClickShowAlert}
          >
            Copy
          </CopyButton>
          <Alert
            className={showingAlert ? "flash-message" : "no-flash-message"}
          >
            text copied!
          </Alert>
        </CopyWrapper>
        <ResultsContainer id="results">
          {loremIpsum.map((paragraph, i) => {
            return <ResultsParagraph key={i}>{paragraph}</ResultsParagraph>;
          })}
        </ResultsContainer>
      </OuterContainer>
      ;
    </>
  );
}
