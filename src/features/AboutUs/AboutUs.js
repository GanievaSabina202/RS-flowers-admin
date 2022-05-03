import React from 'react'
import PageDesc from '../../components/PageDesc/PageDesc'
import { Wrapper, Img, Desc, Test } from './AboutUs.styled'
import Drawers from './components/Drawers/Drawers'
function AboutUs() {
    return (
        <>
            <Test>
                <PageDesc title="About Us Page" />
                <Drawers/>
            </Test>
            
            <Wrapper>
                <Img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/957C/production/_111686283_pic1.png" />
                <Desc>
                    vv Loremmxnbhdcvgfy ndb fghd fcd cucgdeuebfhbehfbeuhif
                    vv Loremmxnbhdcvgfy ndb fghd fcd cucgdeuebfhbehfbeuhif
                    vv Loremmxnbhdcvgfy ndb fghd fcd cucgdeuebfhbehfbeuhif
                </Desc>
            </Wrapper>
        </>
    )
}

export default AboutUs