import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import CharacterCard from './components/CharacterCard';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [stuff, setStuff] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`, {
        params: {}
      })
      .then(res => {
        console.log(res.data);
        setStuff(res.data.results);
      })
      .catch(err => {
        console.log('Error: No Data Has Been Returned', err);
      });
  }, []);

  return (
    <div className='App'>
      <h1 className='Header'>React Wars</h1>
      {stuff.map(item => {
        return (
          <CharacterCard
            name={item.name}
            height={item.height}
            mass={item.mass}
            birth_year={item.birth_year}
            homeworld={item.homeworld}
          />
        );
      })}
    </div>
  );
};

export default App;
