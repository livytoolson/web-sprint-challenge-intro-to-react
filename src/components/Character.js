// Write your Character component here
import React from 'react';
import styled from 'styled-components'

// component styling
const StyledCharacter = styled.div`
    color: ${pr => pr.theme.white};
    padding: 10px;
    border: 1px solid ${pr => pr.theme.green};
    box-shadow: 1px 2px ${pr => pr.theme.green};
    margin: 8px;
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
    font-family: 'Orbitron', sans-serif;

    &:hover {
    color: ${pr => pr.theme.green};
    background-color: ${pr => pr.theme.black};
    transition: all 0.5s ease-in-out;
    }
    transition: all 0.5s ease-in-out;
`
const StyledDOB = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
    font-family: 'Orbitron', sans-serif;

    font-size: 15px;
    text-align: center;
    border-radius: 50px;
    padding: 10px;
    width: 20%;
    background-color: ${pr => pr.theme.darkgray};
    color: ${pr => pr.theme.purple};
    font-weight: bold;
`

const StyledName = styled.p`
    font-weight: 25px;
`

const Character = props => {
    const { name, birth_year } = props;

    return (
        <StyledCharacter>
            <p>Name: {name}</p>
            <StyledDOB>DOB: {birth_year}</StyledDOB>
        </StyledCharacter>
    )
}

export default Character;

