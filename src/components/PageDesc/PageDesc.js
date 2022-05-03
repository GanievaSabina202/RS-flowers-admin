import React from 'react';
import {
    Wrapper,
    Title
} from './PageDesc.styled'

function PageDesc({ title }) {
    return (
        <Wrapper>
            <Title>{title}</Title>
        </Wrapper>
    )
}

export default PageDesc


