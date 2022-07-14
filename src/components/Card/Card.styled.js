import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
  margin: 0px 5px 5px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.colors.boxShadow} 0px 2px 8px 0px;
  border-radius: 5px;
`;
export const Img = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const Desc = styled.p`
  margin: 0;
  font-size: 18px;
  letter-spacing: 0.7px;
  line-height: 25px;
  font-weight: 500;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
`;

export const Test = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  margin: 20px 0px;
  padding-right: 20px;
`;
export const Info = styled.div`
width: 100%;
padding-top: 14px;
`;

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
color: ${({ theme }) => theme.colors.purple1};
`;