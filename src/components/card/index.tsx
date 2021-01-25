import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { CardBody, Subtitle, Title } from "./styled";

const Card: React.FC = ({ children }) => {
  return (
    <CardBody>
      <Title>LISTA TAREFA</Title>
      <Subtitle>to-do list</Subtitle>
      {children}
      <AiOutlineCaretDown
        style={{
          cursor: "pointer",
          marginLeft: "50%",
          marginTop: "20px",
          opacity: ".3",
        }}
      />
    </CardBody>
  );
};
export default Card;
