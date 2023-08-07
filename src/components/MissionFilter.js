import styled from "styled-components";
import Select from "./Select";
import Text from "./Text";
import { useState, useEffect } from "react";
import MissionTable from "./MissionTable";

const MainContainer = styled.div`
  * {
    color: black;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif !important;
  }
`;

const Filter = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 1em;
  padding: 1.5% 2%;
  border-bottom: 0.5px solid lightgray;
  background: #eeeeee;
`;

const Button = styled.button`
  width: 500px;
  height: 37px;
  margin-top: 28px;
  border: 0;
  background: #03c9a9;
  box-shadow: none;
  border-radius: 0px;
  border-radius: 3px;
  color: white !important;
  font-size: 16px;
  cursor: pointer;
`;

function MissionFilter({ launches, launchpads }) {
  const [keyword, setKeyword] = useState("");
  const [launchpad, setLaunchpad] = useState("");
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");
  const [data, setData] = useState([]);

  const names = [];
  const years = [];

  useEffect(() => {
    setData(launches);
  }, [launches]);

  launchpads.forEach((launchpad) => {
    names.push({ value: launchpad.id, name: launchpad.full_name });
  });

  launches.forEach((launches) => {
    const year = new Date(launches.launch_date_local).getFullYear();
    years.push({ value: year, name: year });
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let filterData = launches;

    if (keyword) {
      filterData = filterData.filter(
        (item) =>
          item.flight_number.toString().match(new RegExp(keyword, "i")) ||
          item.rocket.rocket_name.match(new RegExp(keyword, "i")) ||
          item.payloads[0].payload_id.match(new RegExp(keyword, "i"))
      );
    }

    if (launchpad) {
      filterData = filterData.filter(
        (item) => launchpad === item.launch_site.site_id
      );
    }

    if (minYear) {
      filterData = filterData.filter(
        (item) =>
          new Date(minYear).getFullYear() <=
          new Date(item.launch_date_local).getFullYear()
      );
    }

    if (maxYear) {
      filterData = filterData.filter(
        (item) =>
          new Date(maxYear).getFullYear() >=
          new Date(item.launch_date_local).getFullYear()
      );
    }

    setData(filterData);
  };

  const handleKeywordChange = (value) => {
    setKeyword(value);
  };

  const handleLaunchpadChange = (value) => {
    setLaunchpad(value);
  };

  const handleMinYearChange = (value) => {
    setMinYear(value);
  };

  const handleMaxYearChange = (value) => {
    setMaxYear(value);
  };

  function removeDuplicateObjects(arr, property) {
    return [...new Map(arr.map((obj) => [obj[property], obj])).values()];
  }

  return (
    <MainContainer>
      <Filter onSubmit={handleFormSubmit}>
        <Text label="Keyword" name="keyword" onChange={handleKeywordChange} />
        <Select
          label="Launch Pad"
          name="launchPad"
          data={names}
          onChange={handleLaunchpadChange}
        />
        <Select
          label="Min Year"
          name="minYear"
          data={removeDuplicateObjects(years, "value")}
          onChange={handleMinYearChange}
        />
        <Select
          label="Max Year"
          name="maxYear"
          data={removeDuplicateObjects(years, "value")}
          onChange={handleMaxYearChange}
        />
        <Button>Apply</Button>
      </Filter>

      <MissionTable data={data} />
    </MainContainer>
  );
}

export default MissionFilter;
