import React from 'react';
import QRCode from 'react-qr-code'

export default function Events() {
  return (
    <div>
   
      
   Events <br />

   Please scan the QR to see our current menu: 

   <QRCode 
   value="https://cdn.fbsbx.com/v/t59.2708-21/123274512_1184172948651214_8096329527606939208_n.pdf/08.11.2020-event.pdf?_nc_cat=105&ccb=2&_nc_sid=0cab14&_nc_ohc=kLi6_p1eE6UAX8DW-pW&_nc_ht=cdn.fbsbx.com&oh=d88568a8e1a7daa832d3f2d13824dbc8&oe=5FB07584&dl=1
   "
   size={150}
   level={"H"}
  includeMargin={true}
   />

    </div>
  );
}