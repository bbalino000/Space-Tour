import styled from "styled-components";
import MissionItem from "./MissionItem";

const MainContainer = styled.div`
    padding: 2% 3% 0 2%;

    & > p {
        text-align: center;
        color: gray !important;
        font-size: 18px;
        margin-block-start: 0;
        padding-bottom: 2%;
    }
`;

function MissionTable ({ data }) {

    const renderedData = data.map(item => {
        return <MissionItem key={item.flight_number} item={item}/>;
    });

    return (
        <MainContainer>
            <p>{(data.length === 0) ? 'No Missions Found' : 'Showing ' + data.length + ' Missions'}</p>
            { renderedData }
        </MainContainer>
    );
}
export default MissionTable;