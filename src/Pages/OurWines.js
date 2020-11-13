import React, { useState } from "react";
import wines from "../DB/wines.json"
import Map from "./Map"
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
    <>
   <h1>Our Wines </h1>
<select onChange={(e)=> setWineDate(e.target.value)}>
<option value="all" > All </option>
<option value="2017" > 2017 </option>
<option value="2018" > 2018 </option>
</select>
{wineFilter.map((w) => { 

  return (<div key={w.id}>
<h3>{w.name} </h3>
<h4>{w.date}</h4>
<p>{w.description}</p>
<img src={w.image} alt="wine bottle" width="30%" />


</div>)

})}
<Map />

    </>
  );
}