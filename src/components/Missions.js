import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";
import bgMissions from '../images/space-photo.jpeg';
import downChevron from '../images/down-chevron.svg';
import { useRef, useState, useEffect } from 'react';
import MissionFilter from './MissionFilter';
import axios from 'axios';

const GlobalStyle = createGlobalStyle`
    body {
        background: rgba(0, 0, 0, .65) url(${bgMissions}) no-repeat fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-blend-mode: darken;
    }

    header {
        position: absolute;
    }
`;

const MainContainer = styled.div`
`;

const InitContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeaderText = styled.h2`
    font-size: 64px;
    text-align: center;
    flex: 1;
    display: flex;
    align-items: center;
`;

const ChevronDown = styled.div`
    height: 80px;
    width: 40px;
    margin-bottom: 20px;
    background-color: var(--white);
    mask: url(${downChevron}) no-repeat center;
    -webkit-mask: url(${downChevron}) no-repeat center;
    cursor: pointer;
`;

const Content = styled.div`
    background: lightgray;
    padding: 2%;
`;

const MissionsContainer = styled.div`
    background: white;
`;

const Copyright = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const CopyrightText = styled.div`
    justify-self: flex-start;
    color: gray;
`;

const BackToTop = styled.div`
    justify-self: flex-end;
    cursor: pointer;
    color: gray;
`;

function Missions () {
    const [launches, setLaunches] = useState([]);
    const [launchpads, setLaunchpads] = useState([]);

    const top = useRef(null);
    const content = useRef(null);

    const handleScrollTo = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        });
    };

    const fetchLaunches = async () => {
        const res = await axios.get('http://localhost:8001/launches');
        setLaunches(res.data);
    };

    const fetchLaunchpads = async () => {
        const res = await axios.get('http://localhost:8001/launchpads');
        setLaunchpads(res.data);
    };
    
    useEffect(() => {
        fetchLaunchpads();
        fetchLaunches();
    }, []);

    return (
        <MainContainer ref={top}>
            <GlobalStyle />
            
            <InitContainer>
                <HeaderText>DISCOVER SPACE MISSIONS</HeaderText>
                <ChevronDown onClick={ () => handleScrollTo(content) } />
            </InitContainer>

            <Content ref={content}>
                <MissionsContainer>
                    <MissionFilter launches={launches} launchpads={launchpads}/>
                </MissionsContainer>

                <Copyright>
                    <CopyrightText>Copyright &copy; 2023 Space Savvy</CopyrightText>
                    <BackToTop onClick={ () => handleScrollTo(content) }>Back to top</BackToTop>
                </Copyright>
            </Content>

            
        </MainContainer>
    );
}

export default Missions;
