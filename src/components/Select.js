import styled from "styled-components";
import chevronDown from "../images/down-chevron.svg"

const DropdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: black !important;

    & > label {
        font-size: 1em;
        padding-bottom: 10px;
    }

    & > select {
        height: 36px;
        font-size: .9em;
        color: gray;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        padding-left: 10px;
        background: url(${chevronDown}) no-repeat center / contain;
        background-size: 14px;
        background-position: calc(100% - 10px);
        border-radius: 3px;
        background-color: white;
    }
`;

function Select ({ label, data, name, onChange }) {

    const options = data.map((item, idx) => {
        return <option key={idx} value={item.value}>{item.name}</option>;
    });

    const handleChange = (event) => {
        onChange(event.target.value);
    }

    return (
        <DropdownContainer>
            <label>{ label }</label>
            <select name={ name }
                    defaultValue={ 'DEFAULT' }
                    onChange={ handleChange }>
                <option value="">Any</option>
                { options }
            </select>
        </DropdownContainer>
    );
}
export default Select;