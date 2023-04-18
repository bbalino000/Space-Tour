import styled from "styled-components";

const DestDetails = styled.div`
    @media only screen and (min-width: 768px) {
        padding: 0 12%;
    }

    @media only screen and (min-width: 992px) {
        padding: 0;
    }
`;

const DestName = styled.h3`
    margin-block-start: 1rem;
    margin-block-end: 0;

    @media only screen and (min-width: 768px) {
        font-size: 66px;
    }

    @media only screen and (min-width : 992px) {
        font-size: 100px;
    }
`;

const Description = styled.p`
    @media only screen and (min-width: 768px) {
        margin-block-end: 3em;
    }

    @media only screen and (min-width : 992px) {
        font-size: 18px;
        text-align: justify;
        margin-block-end: 3em;
    }
`;

const DestDetailsBottom = styled.div`
    margin-top: 2rem;

    @media only screen and (min-width: 768px) {
        display: flex;
        justify-content: space-evenly;
    }

    @media only screen and (min-width : 992px) {
        display: flex;
        flex-direction: row;
        gap: 3em;
        margin-top: 1rem;
        justify-content: left;
    }
`;

const SubHeading = styled.div`
`;

const SubHeading1 = styled.p`
    margin-block-end: 2rem;

    @media only screen and (min-width : 992px) {
        font-size: 24px;
    }
`;

const SubHeading2 = styled.p`
    color: var(--gray);
    margin-block: .5rem;
`;

function DestinationDetails ({ data }) {
    return (
        <DestDetails>
            <DestName>{ data.planet.toUpperCase() }</DestName>
            <Description>{ data.description }</Description>
            <hr />
            <DestDetailsBottom>
                <SubHeading>
                    <SubHeading2 className="subHeading2">AVG. DISTANCE</SubHeading2>
                    <SubHeading1 className="subHeading1">{ data.avgDistance.toUpperCase() }</SubHeading1>
                </SubHeading>
                
                <SubHeading>
                    <SubHeading2 className="subHeading2">EST. TRAVEL TIME</SubHeading2>
                    <SubHeading1 className="subHeading1">{ data.estTravelTime.toUpperCase() }</SubHeading1>
                </SubHeading>
            </DestDetailsBottom>
        </DestDetails>
    );
}

export default DestinationDetails;
