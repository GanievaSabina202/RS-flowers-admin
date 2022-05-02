import React from 'react';
import Drawers from '../Drawers/Drawers';

import {
    Wrapper,
    Title
} from './PageDesc.styled'

function PageDesc() {
    return (
        <Wrapper>
            <Title>Gallery Page</Title>
            <Drawers/>
        </Wrapper>
    )
}

export default PageDesc


