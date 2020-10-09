// Write your Character component here
import React from 'react';
// import styled from 'styled-components'

// component styling

const Character = props => {
    const { character, birth_year } = props;

    return (
        <div>
            {character} {birth_year}
        </div>
    )
}

export default Character;