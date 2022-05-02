import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Ul, Li, LinkS } from './Sidebar.styled';

const Sidebar = () => {
    const nav = useNavigate();
    return (
        <Ul>
            <Li>
                <LinkS onClick={() => nav("/")}>
                    Home
                </LinkS>
            </Li>
            <Li>
                <LinkS onClick={() => nav("/Gallery")}>
                    Gallery
                </LinkS>
            </Li>
            <Li>
                <LinkS onClick={() => nav("/OurTeam")}>
                    OurTeam
                </LinkS>
            </Li>
            <Li>
                <LinkS onClick={() => nav("/AboutUs")}>
                    AboutUs
                </LinkS>
            </Li>
            <Li>
                <LinkS onClick={() => nav("/Contact")}>
                    Contact
                </LinkS>
            </Li>
        </Ul>
    )
}

export default Sidebar