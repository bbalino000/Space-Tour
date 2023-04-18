import { useState, useRef, useEffect } from "react";
import techData from "../data/technologies.json";
import TechnologyDetails from "./TechnologyDetails";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import bgMobile from '../assets/technology/background-technology-mobile.jpg';
import bgTablet from '../assets/technology/background-technology-tablet.jpg';
import bgDesktop from '../assets/technology/background-technology-desktop.jpg';

const GlobalStyle = createGlobalStyle`
    @media only screen and (min-width: 320px) {
        body {
            background: url(${bgMobile}) no-repeat fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }
    }
    @media only screen and (min-width: 768px) {
        body {
            background: url(${bgTablet}) no-repeat fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }
    }
    @media only screen and (min-width: 992px) {
        body {
            background: url(${bgDesktop}) no-repeat fixed !important;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }
    }
`;

const MainContainer = styled.div`
    @media only screen and (min-width: 992px) {
        padding-top: 4%;
        padding-left: 10%;
        padding-bottom: 4%;
    }
`;

const FlexContainer = styled.div`
    @media only screen and (min-width: 992px) {
        display: flex;
        flex-direction: row;
        gap: 10%;
        align-items: center;
    }
`;

const TechContainer = styled.div`
    padding: 0 8%;

    @media only screen and (min-width: 992px) {
        display: flex;
        flex-direction: row;
        gap: 4em;
        padding: 0;
        order: 1;
    }
`;

const TechImg = styled.div`
    background: url(${props => props.img}) no-repeat bottom;
    background-size: cover;
    width: 100%;
    padding-top: 44%;

    @media only screen and (min-width: 992px) {
        order: 2;
        background-image: url(${ props => props.img.replace('landscape','portrait') });
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding-block: 25%;
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
        padding: 4%
    }

    @media only screen and (min-width: 992px) {
        padding: 0;
        margin: 0;
        font-size: 22px;
    }
`;

const Items = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1em;
    justify-content: center;
    margin: 2em 0;

    @media only screen and (min-width: 992px) {
        display: flex;
        flex-direction: column;
        margin: 0;
        justify-content: flex-start;
    }
`;

const Item = styled.span`
    width: 44px; 
    height: 44px;
    border: 1px solid gray;
    border-radius: 50%;
    display: flex;
    align-items: center; 
    justify-content: center;
    font-size: 16px;
    font-family: Bellefair;
    cursor: pointer;

    &.active {
        background-color: var(--white);
        color: var(--black);
    }

    @media only screen and (min-width: 768px) {
        width: 54px; 
        height: 54px;
    }

    @media only screen and (min-width: 992px) {
        width: 70px; 
        height: 70px;
        font-size: 26px;
    }
`;

function Technology () {
    const [index, setIndex] = useState(0);
    const timerRef = useRef(null);

    function resetTimeout() {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();

        timerRef.current = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex === techData.length - 1) ? 0 : prevIndex + 1);
        }, 10000);
      
        return () => {
          resetTimeout();
        };

    }, [index]);

    const items = techData.map((data, idx) => {
        return (
            <Item className={ index === idx ? 'active' : '' }
                  key = {idx}
                  onClick= { () => {
                    setIndex(idx);
                  }}>
                { idx + 1 }
            </Item>
        );
    });

    return (
        <MainContainer>
            <GlobalStyle />
            <NavText><span>03</span> SPACE LAUNCH 101</NavText>

            <FlexContainer>
                <TechImg img={ techData[index].imgPath } />
                
                <TechContainer>
                    <Items>
                        {items}
                    </Items>

                    <TechnologyDetails data={techData[index]} />
                </TechContainer>
            </FlexContainer>
        </MainContainer>
    );
}

export default Technology;