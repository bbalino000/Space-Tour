import { useState } from "react";
import destinationData from "../data/destinations.json";
import DestinationDetails from "./DestinationDetails";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import bgMobile from '../assets/destination/background-destination-mobile.jpg';
import bgTablet from '../assets/destination/background-destination-tablet.jpg';
import bgDesktop from '../assets/destination/background-destination-desktop.jpg';

const GlobalStyle = createGlobalStyle`

    @media only screen and (min-width : 320px) {
        body {
            background: url(${bgMobile}) no-repeat fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }
    }

    @media only screen and (min-width : 768px) {
        body {
            background: url(${bgTablet}) no-repeat fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }
    }

    @media only screen and (min-width : 992px) {
        body {
            background: url(${bgDesktop}) no-repeat fixed;
            -webkit-background-size: contain;
            -moz-background-size: contain;
            -o-background-size: contain;
            background-size: contain;
        }
    }
`;

const NavText = styled.h5`
    color: var(--white) !important;
    margin: 0 auto;
    text-align: center;
    font-size: 16px;
    margin-bottom: 2em;

    & > span {
        color: var(--disabled);
    }

    @media only screen and (min-width: 768px) {
        text-align: left;
        font-size: 18px;
    }

    @media only screen and (min-width : 992px) {
        text-align: left;
        font-size: 22px;
    }
`;

const MainContainer = styled.div`
    padding: 0 8%;

    @media only screen and (min-width: 768px) {
        padding: 4%;
    }

    @media only screen and (min-width : 992px) {
        padding: 6% 10%;
    }
`;

const PlanetImg = styled.img`
    width: 180px;
    margin-block-end: 1em;

    @media only screen and (min-width: 768px) {
        width: 260px;
        margin-block-start: 3em;
        margin-block-end: 2em;
    }

    @media only screen and (min-width : 992px) {
        justify-self: left;
        width: 380px;
    }
`;

const DestContainer = styled.div`
    text-align: center;

    @media only screen and (min-width : 992px) {
        text-align: left;
    }

    @media only screen and (min-width : 992px) {
        justify-self: right;
        width: 400px;
    }
`;

const FlexContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;

    @media only screen and (min-width : 992px) {
        display: flex;
        flex-direction: row;
        gap: 15%;
        justify-content: center;
    }
`;

const Destinations = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    margin: 0 10%;
    gap: 1em;

    @media only screen and (min-width: 768px) {
        margin: 0 30%;
    }

    @media only screen and (min-width : 992px) {
        margin: 0;
        justify-content: unset;
        gap: 2em;
    }
`;

const DestinationItem = styled.li`
    border-bottom: 3px solid transparent;
    padding: 10px 0;
    color: var(--disabled);

    &span:hover {
        padding: 10px 0;
        border-bottom: 3px solid var(--white) !important;
    }

    &.active {
        border-bottom: 3px solid var(--white) !important;
        color: var(--white);
    }
`;

function Destination () {
    const [destination, setDestination] = useState(destinationData[0]);
    const [active, setActive] = useState('1');

    const destinations = destinationData.map((data) => {
        return (
            <DestinationItem key={ data.id }
                             className={ active === data.id ? 'active' : '' }   
                             onClick={ () => {
                                setDestination(data); 
                                setActive(data.id);
                             }}>
                { data.planet.toUpperCase() }
            </DestinationItem>
        );
    });
    
    return (
        <MainContainer>
            <GlobalStyle />
            <NavText><span>01</span> PICK YOUR DESTINATION</NavText>
            
            <FlexContainer>
                <PlanetImg src={ destination.imgPath }
                            alt="destinationImg" />

                <DestContainer>
                    <Destinations>
                        {destinations}
                    </Destinations>

                    <DestinationDetails data={destination} />
                </DestContainer>
            </FlexContainer>
        </MainContainer>
    );
}

export default Destination;
