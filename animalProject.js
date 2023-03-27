App.js React code 

import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';


const title = "";
const showBackground = false;
const background = (
  <img 
  className='background'
  alt='ocean'
  src='/images/ocean.jpg'
  />
)


const images = [];
for(const animal in animals) {
  
  images.push (
    <img
    key={animal}
    className='animal'
    alt={animal}
    src={animals[animal].image}
    ariaLabel={animal}
    role='button'
    onClick={displayFact}
    
    />
  )
}


function displayFact(e) {
  const animalSelected = e.target.alt;
  const animalInfo = animals[animalSelected];
  const optionIndex = Math.floor(Math.random() 
  * animalInfo.facts.length);


  const funFacts = animalInfo.facts[optionIndex];
  document.getElementById('fact').innerHTML = funFact;




}






const animalFacts = (
  <div>
      <h1>{title == "" ? "Click an animal for a fun fact" : title}</h1>
      {showBackground && background}
      <p id='fact'></p>
      <div className='animals'>
      {images}


      </div>


      


  </div>
)




ReactDOM.render(animalFacts, document.getElementById("root"));



Animal.js

export const animals = {
  dolphin: {
    image: '/images/dolphin.jpg',
    facts: ['Dolphins have been shown to give distinct names to each other!', 'Dolphins are known to display their own culture!', 'Dolphins have two stomachs!']
  },
  lobster: {
    image: '/images/lobster.jpg',
    facts: ['Lobsters taste with their legs!', 'Lobsters chew with their stomachs!', 'Lobsters can live as long as 100 years.']
  },
  starfish: {
    image: '/images/starfish.jpg',
    facts: ['Starfish can have up to 40 arms!', 'Starfish have no brain and no blood!', 'Starfish can regenerate their own arms!']
  }
};




