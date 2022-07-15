import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

import {
  Wrapper,
  Img,
  Info,
  Title,
  Desc,
  Content,
  DeleteIconCustom,
} from "./Card.styled";

const Card = ({ item, fbName }) => {
  const deleteHandler = () => {
    deleteDoc(doc(db, `${fbName}`, `${item.id}`));
  };

  return (
    <Wrapper key={item.id}>
      <Img src={item.img} />
      <Info>
        <Content>
          <Desc>{item.name}</Desc>
          <DeleteIconCustom onClick={deleteHandler} />
        </Content>
        <Title>{item.desc}</Title>
      </Info>
    </Wrapper>
  );
};

export default Card;
