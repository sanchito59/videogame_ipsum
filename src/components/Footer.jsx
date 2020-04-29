import React from "react";
import styled from "styled-components";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubTitle from "./SubTitle";
import Link from "./Link";

const Code = styled(FontAwesomeIcon)``;

const CenteredLink = styled.p`
  font-family: "Chakra Petch", sans-serif;
  text-align: center;
  color: white;
`;

export default function Footer() {
  return (
    <div>
      <SubTitle style={{ fontFamily: "'Press Start 2P', cursive" }}>
        Video Game Ipsum
      </SubTitle>
      <CenteredLink>
        <Code icon={faCode} /> by{" "}
        <Link href={`https://www.github.com/sanchito59`} target="_blank">
          Chris Sanchez
        </Link>
      </CenteredLink>
    </div>
  );
}
