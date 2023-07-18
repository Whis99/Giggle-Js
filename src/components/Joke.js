// import React from "react";
import Button from "./Button";
import '../Joke.css';
import React, {useState } from 'react';
import Display from "./Display";

function JokeFetcher() {
    const [jokes, setJokes] = useState([]);
  
    const fetchJokes = async () => {
      const limit = 1;
      const apiKey = 'f98XKUsGd3kTs2Ii2D6C8g==PhiLRuJuWFEZoBlr';
  
      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/jokes?limit=${limit}`, {
          headers: { 'X-Api-Key': apiKey },
          method: 'GET',
          contentType: 'application/json'
        });
  
        if (response.ok) {
          const result = await response.json();
          setJokes(result.map(jokeObj => jokeObj.joke));
        
        } else {
          throw new Error('Request failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

  return (
    <div className="joke">
        <Button callApi={fetchJokes} btnLabel = "Random Joke"/>
        {jokes.map((joke, index) => (
        // <p key={index}>{joke}</p>
        <Display key ={index} joke = {joke} />  
        // fetchJokes.result = {joke}
      ))}
    </div>
  );
}

export default JokeFetcher;
