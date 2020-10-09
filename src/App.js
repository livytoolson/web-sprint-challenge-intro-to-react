import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character'

// import the axios lib from node_modules
import axios from 'axios'

// import the contants from constants/index.js
import { BASE_URL } from './constants/index'

// import styled components
import styled from 'styled-components'

// component styling
const StyledBackground = styled.div`
  background-image: url(
    'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80'
    );
  `

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ data, setData ] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`${BASE_URL}`)
      .then(res => {
        setData(res.data.results)
        console.log(res.data.results)
      })
      .catch(err => {
        debugger
      })
}, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {data.map(character => {
        return <Character key={character.name} name={character.name} birth_year={character.birth_year}/>
      })}
    </div>
  );
}

export default App;