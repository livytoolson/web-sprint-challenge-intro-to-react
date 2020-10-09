// Write your Character component here
import React from 'react';
// import styled from 'styled-components'

// component styling

const Character = props => {
    const { name, birth_year } = props;

    return (
        <div>
            {name} {birth_year}
        </div>
    )
}

export default Character;

