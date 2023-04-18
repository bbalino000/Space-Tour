import { useState, useRef, useEffect } from "react";
import crewData from "../data/crew.json";
import CrewDetails from "./CrewDetails";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import bgMobile from '../assets/crew/background-crew-mobile.jpg';
import bgTablet from '../assets/crew/background-crew-tablet.jpg';
import bgDesktop from '../assets/crew/background-crew-desktop.jpg';

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

const Dots = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 1em;
    order: 2;

    @media only screen and (min-width: 992px) {
        justify-content: left;
    }
`;

const Dot = styled.div`
    color: gray;
    font-size: 3em;
    cursor: pointer;
    
    &.active {
        color: #FFFFFF;
    }
`;

const ImgSlider = styled.div`
    width: 100%;

    @media only screen and (min-width: 768px) {
        order: 3;
        position: absolute;
        bottom: 0%;
    }

    @media only screen and (min-width: 992px) {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 45%;
    }
`;

const CrewImg = styled.div`
    background: url(${props => props.img}) no-repeat center;
    background-size: contain;
    width: 100%;
    padding-top: 80%;
    box-shadow: 0 2px 2px -2px gray;

    @media only screen and (min-width: 768px) {
        padding-top: 70%;
    }

    @media only screen and (min-width: 992px) {
        padding-top: 100%;
    }
`;

const MainContainer = styled.div`
    padding: 0 8%;
    
    @media only screen and (min-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0;
    }
`;

const Contents = styled.div`
    @media only screen and (min-width: 992px) {
        display: flex;
        flex-direction: row;
        padding-left: 10%;
    }
`;

const FlexContainer = styled.div`
    @media only screen and (min-width: 768px) {
        display: flex;
        flex-direction: column;
    }

    @media only screen and (min-width: 992px) {
        display: flex;
        flex-direction: column;
        position: absolute;
        bottom: 10%;
    }
`;

const Details = styled.div`
    @media only screen and (min-width: 768px) {
        order: 1;
    }
`;

const NavText = styled.h5`
    color: var(--white) !important;
    text-align: center;
    font-size: 16px;
    margin-bottom: 2em;

    & > span {
        color: var(--disabled);
    }

    @media only screen and (min-width: 768px) {
        font-size: 18px;
        text-align: left;
        padding: 4% 4% 0 4%;
        margin-bottom: 3em;
        margin-block-start: 0;
    }

    @media only screen and (min-width: 992px) {
        padding: 6% 0 2% 10%;
        font-size: 22px;
        margin: 0;
    }
`;

function Crew () {
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
            setIndex((prevIndex) => (prevIndex === crewData.length - 1) ? 0 : prevIndex + 1);
        }, 10000);
      
        return () => {
          resetTimeout();
        };

    }, [index]);

    const dots = crewData.map((data, idx) => {
        return (
            <Dot className={ index === idx ? 'active' : '' }
                key={ data.id }
                onClick={() => {
                    setIndex(idx);
                }}>
                &#x2022;
            </Dot>
        );
    });

    return (
        <MainContainer>
            <GlobalStyle />
            <NavText><span>02</span> MEET YOUR CREW</NavText>

            <Contents>
                <ImgSlider>
                    <CrewImg img={crewData[index].imgPath} idx={index}/>
                </ImgSlider>
                
                <FlexContainer>
                    <Dots>
                        { dots }
                    </Dots>

                    <Details>
                        <CrewDetails data={crewData[index]} />
                    </Details>
                </FlexContainer>
            </Contents>
        </MainContainer>
    );
}

export default Crew;
