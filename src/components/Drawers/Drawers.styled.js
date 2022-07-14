import styled from "styled-components";
import { Input, Textarea, Button } from '@mantine/core';

export const CustomTextInput = styled(Input).attrs(() => ({
    type: "text"
}))`
    margin: 10px 0px 0px 0px;
`
export const CustomTextareaInput = styled(Textarea)`
    margin: 10px 0px 0px 0px;
`
export const CustomFileInput = styled(Input).attrs(() => ({
    type: "file"
}))`
    margin: 10px 0px 0px 0px;
`
export const CustomButton = styled(Button).attrs(() => ({
    type: "submit"
}))`
    margin: 20px 0px 0px 0px;   
    width: 100%;
    background: ${({ theme }) => theme.colors.purple};
    &:hover{
    background: ${({ theme }) => theme.colors.purple1};
    }
`


export const CustomForm = styled.form`
    margin: 10px 0px 0px 0px;
`
