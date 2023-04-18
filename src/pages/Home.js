import { Link } from 'react-router-dom';
import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin: 0 10%;

    & .btn-explore {
        height: 160px;
        width: 160px;
        border-radius: 50%;
        background: var(--white);
        display: flex;
        align-items: center; 
        justify-content: center;
        text-decoration: none;
        font-family: Bellefair;
        font-size: 20px;
        color: gray;
        margin: 20% auto;
    }

    @media only screen and (min-width: 768px) {
        margin-top: 10%;

        & .btn-explore {
            height: 220px;
            width: 220px;
            font-size: 30px;
            bottom: 5%;
        }
    }

    @media only screen and (min-width : 992px) {
        flex-direction: row;
        margin: 0;

        & .btn-explore {
            position: absolute;
            right: 10%;
            bottom: 15%;
            margin: 0;
            height: 260px;
            width: 260px;
            font-size: 33px;
        }
    }
`;

const TextDiv = styled.div`
    & h5 {
        font-size: 14px !important;
        color: var(--gray);
        margin-block: 1em;
    }

    & h2 {
        margin-block: 0;
        font-size: 90px !important;
    }

    & p {
        font-size: 18px !important;
    }

    @media only screen and (min-width: 768px) {
        & h2 {
            font-size: 150px !important;
        }

        & h5 {
            font-size: 18px !important;
        }

        & p {
            margin: 0 18%;
            font-size: 20px !important;
        }
    }

    @media only screen and (min-width : 992px) {
        text-align: left;
        width: 400px;
        text-justify: distribute;
        position: absolute;
        left: 10%;
        bottom: 15%;

        & h2 {
            font-size: 150px !important;
        }

        & h5 {
            font-size: 28px !important;
        }

        & p {
            margin: 0;
            font-size: 20px !important;
        }
    }
`;

function Home() {
    return (
        <MainContainer>
            <TextDiv>
                <h5>SO, YOU WANT TO TRAVEL TO</h5>
                <h2>SPACE</h2>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!</p>
            </TextDiv>

            <Link to="/dest" className="btn-explore">
                EXPLORE
            </Link>
        </MainContainer>
    );
}

export default Home;