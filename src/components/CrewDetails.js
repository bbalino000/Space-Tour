import styled from "styled-components";

const MainContainer = styled.div`
    text-align: center;
    order: 1;

    @media only screen and (min-width: 992px) {
        text-align: left;
    }
`;

const Title = styled.h4`
    color: gray;
    font-size: 19px;
    margin-block: 0;

    @media only screen and (min-width: 768px) {
        font-size: 22px;
    }

    @media only screen and (min-width: 992px) {
        font-size: 28px;
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
        font-size: 3.0rem;
        width: 540px;
    }
`;

const Description = styled.p`
    font-size: 20px;

    @media only screen and (min-width: 768px) {
        padding: 0 18%;
    }

    @media only screen and (min-width: 992px) {
        padding: 0;
        width: 400px;
    }
`;

function CrewDetails ({ data }) {
    return (
        <MainContainer>
            <Title>{ data.title.toUpperCase() }</Title>
            <Name>{ data.name.toUpperCase() }</Name>
            <Description>{ data.description }</Description>
        </MainContainer>
    );
}

export default CrewDetails;