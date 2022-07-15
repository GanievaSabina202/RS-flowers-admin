import styled from "styled-components";

export const Ul = styled.ul`
  margin: 10px;
  padding: 0;
  box-shadow: ${({ theme }) => theme.colors.boxShadow} 0px 2px 8px 0px;
  padding: 20px;
  border-radius: 5px;
`;

export const Li = styled.li`
  list-style: none;
`;
export const Span = styled.span`
  display: block;
  text-align: center;
  border-bottom: 1px solid #00000038;
  margin: 10px 0px;
  font-weight: 900;
`;
