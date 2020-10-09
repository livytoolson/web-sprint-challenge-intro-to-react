// Write your Character component here
import React from 'react';
import styled from 'styled-components'

// component styling
const StyledCharacter = styled.div`
    color: ${pr => pr.theme.white};
    padding: 10px;
    border: 1px solid ${pr => pr.theme.green};
    margin: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`


const Character = props => {
    const { name, birth_year } = props;

    return (
        <StyledCharacter>
            {name} {birth_year}
        </StyledCharacter>
    )
}

export default Character;

