import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Wrapper, Img, Info, Title, Desc, Content } from "./Card.styled";

const Card = ({item}) => {
  return (
    <Wrapper key={item.id}>
      <Img src={item.img}/>
      <Info>
        <Content>
          <Desc>{item.name}</Desc>
          <DeleteIcon />
        </Content>
        <Title>{item.desc}</Title>
      </Info>
    </Wrapper>
  );
};

export default Card;
