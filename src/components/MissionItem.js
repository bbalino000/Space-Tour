import dayjs from "dayjs";
import styled from "styled-components";
import logo from "../images/logo.svg"

const MainContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 1.5em;
    width: 100%;
    border-bottom: 1px solid lightgray;
    margin-bottom: 20px;

    &:last-child { border-bottom: 1px solid transparent; }
`;

const MissionPatch = styled.div`
`;

const Details = styled.div`
    width: 100%;
`;

const Description = styled.div`

    & > .rocket {
        font-size: 20px;
        font-weight: bold;
        margin-block: 0px;
    }

    & > .desc {
        color: gray !important;
        margin-block: 10px;
    }

    & > .desc > b {
        color: gray !important;
        font-weight: bolder;
    }
`;

const Links = styled.div`
    display: flex;
    gap: 1em;
    padding: 20px 0 20px 0;

    & > a {
        text-decoration: none;
        border: 1px solid lightgray;
        color: gray !important;
        padding : 4px 16px;
        font-size: 14px;
    }
`;

const FlightNumber = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;

    & > p {
        text-align: center;
        margin-block: 4px;
    }

    & > .fNumber {
        font-size: 22px;
        margin-block: 0;
    }

    & > .subText {
        color: gray !important;
    }
`;

const FailedMission = styled.span`
    color: red !important;
`;


function MissionItem ({ item }) {

    var advancedFormat = require('dayjs/plugin/advancedFormat');
    dayjs.extend(advancedFormat);
    
    const rocketName = item.rocket.rocket_name;
    const payloadId = item.payloads[0].payload_id;
    const date = dayjs(item.launch_date_local).format('Do MMMM YYYY [at] h:mma');
    const launchpad = item.launch_site.site_name;
    const missionPatch = item.links.mission_patch;
    const flightNumber = item.flight_number;
    const isFailed = (item.launch_success || item.land_success ) ? '' : <FailedMission><span>-</span> Failed Mission</FailedMission>;
    
    const readableStr = (str) => {
        var frags = str.split('_');

        for (let i = 0; i < frags.length; i++) {
          frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
        }

        return frags.join(' ');
    }

    const links = Object.keys(item.links).map((key, index) => {
        let link = null;
        let linkText = null;
        
        switch(key) {
            case 'presskit':
                linkText = 'Press'
                break;
            case 'article_link':
                linkText = 'Article'
                break;
            case 'video_link':
                linkText = 'Watch Video'
                break;
            default:
                linkText = readableStr(key);
        }

        if(item.links[key] && key !== 'mission_patch')
            link = <a href={item.links[key]} key={index}>{linkText}</a>;

        return link;
    });

    return (
        <MainContainer>
            <MissionPatch>
                <img src={ missionPatch }
                     onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = logo;
                      }}
                     alt="mission-patch" 
                     height={70} width={70}/>
            </MissionPatch>

            <Details>
                <Description>
                    <p className="rocket">{rocketName} - {payloadId} {isFailed}</p>
                    <p className="desc">Launched on <b>{date}</b> from <b>{launchpad}</b></p>
                </Description>

                <Links>
                    {links}
                </Links>
            </Details>
            
            <FlightNumber>
                <p className="fNumber"># {flightNumber}</p>
                <p className="subText">Flight Number</p>
            </FlightNumber>
        </MainContainer>
    );
}
export default MissionItem;