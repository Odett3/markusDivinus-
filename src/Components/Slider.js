import React from 'react';
import foodMenu from "../DB/foodMenuSlider.json"
import Carousel from "react-elastic-carousel"



export default function Slider() {

  const breakPoints = [

{width: 1, itemsToShow: 1},
{width: 550, itemsToShow: 2},
{width: 768, itemsToShow: 3},
{width: 1200, itemsToShow: 4}

  ]

  return (
   <div>
<Carousel>
{foodMenu.map((item) => {

return <div key={item.id}>
<img src={item.imgUrl} width="45%"/>

</div>
})}

</Carousel>
    
   </div>
  );
}