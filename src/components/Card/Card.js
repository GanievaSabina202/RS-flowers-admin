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
} from "./Card.styled";
import Modals from "../Modals/Modals";

const Card = ({ item, fbName }) => {

  const deleteHandler = () => {
    deleteDoc(doc(db, `${fbName}`, `${item.id}`));
  };

  return (
    <>
      <Wrapper key={item.id}>
        <Img src={item.img} />
        <Info>
          <Content>
            <Desc>{item.name}</Desc>
            <Modals deleteHandler={deleteHandler}/>
          </Content>
          <Title>{item.desc}</Title>
        </Info>
      </Wrapper>
    </>
  );
};

export default Card;
