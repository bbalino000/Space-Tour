import styled from "styled-components";

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    & > label {
        font-size: 1em;
        padding-bottom: 10px;
    }

    & > input {
        height: 30px;
        padding-left: 10px;
    }
`;

function Text ({ label, name, onChange }) {

    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <TextContainer>
            <label>{ label }</label>
            <input type='text' name={ name } onChange={handleChange} placeholder="eg Falcon" />
        </TextContainer>
    );
}

export default Text;