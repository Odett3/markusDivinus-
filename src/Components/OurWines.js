import React from 'react';
import wines from "../DB/wines.json"

export default function OurWines() {
  return (
    <div>
   <h1>Our Wines </h1>

{wines.map((w) => { 

  return (<div>
<h3>{w.name}</h3>
<img src={w.image} alt="wine" width="40%"/>
<p>{w.date}</p>
<p>{w.description}</p>
  
</div>)

})}


    </div>
  );
}