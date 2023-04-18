import styled from "styled-components";

const MainContainer = styled.div`
    text-align: center;

    @media only screen and (min-width: 768px) {
        padding: 0 15%;
    }

    @media only screen and (min-width: 992px) {
        padding: 0;
        text-align: left;
        width: 390px;
    }
`;

const Title = styled.h5`
    color: var(--gray);
    font-size: 14px;
    margin-block: 0;
    letter-spacing: 2.5px;

    @media only screen and (min-width: 768px) {
        font-size: 18px;
    }
`;

const Name = styled.h3`
    font-size: 1.6rem;
    margin-block-start: .6rem;
    margin-block-end: 1.4rem;

    @media only screen and (min-width: 768px) {
        font-size: 2.6rem;
    }

    @media only screen and (min-width: 992px) {
        font-size: 2.8rem;
    }
`;

const Description = styled.p`
    font-size: 20px;
`;

function TechnologyDetails({ data }) {
    return (
        <MainContainer>
            <Title>THE TERMINOLOGY...</Title>
            <Name>{ data.name.toUpperCase() }</Name>
            <Description>{ data.description }</Description>
        </MainContainer>
    );
}

export default TechnologyDetails;