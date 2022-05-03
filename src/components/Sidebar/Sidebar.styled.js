import styled from "styled-components";

export const Ul = styled.ul`
padding: 0;
margin: 0;
background-color: ${({ theme }) => theme.colors.purple};
width: 100%;
border-radius: 15px;
padding: 40px 0px 0px 0px;
height: 300px;
margin: 15px 0px 0px 0px;
`
export const Li = styled.li`
list-style: none;
cursor:pointer;
padding: 10px;
transition: .3s all;
font-size:17px;
font-weight: 500;
color: ${({ theme }) => theme.colors.white};
&:hover{
    background: ${({ theme }) => theme.colors.purple1};
}
`
export const LinkS = styled.a`
display: block;
width: 100%;
`