import React, { useState } from "react";
import wines from "../DB/wines.json"

export default function OurWines() {

  const [wineDate, setWineDate] = useState("")

  let wineFilter;

  if (wineDate === "2017") {

    wineFilter = wines.filter((w)=> {return w.date === "2017"} 
    
    )
  } else if (wineDate === "2018") {

    wineFilter = wines.filter((w)=> {

      return w.date === "2018"
    })
  } else {

    wineFilter = wines
  } 

  return (
    <div>
   <h1>Our Wines </h1>

<button onClick={()=> setWineDate("all")}> All </button>
<button onClick={()=> setWineDate("2017")}> 2017 </button>
<button onClick={()=> setWineDate("2018")}> 2018 </button>

{wineFilter.map((w) => { 

  return (<div key={w.id}>
<h3 > {w.name}</h3>
<img src={w.image} alt="wine" width="40%"/>
<p>{w.date}</p>
<p>{w.description}</p>
  
</div>)

})}


    </div>
  );
}