import React from 'react';
import { useLocation } from 'react-router-dom';

function Adiblar({ newObj }) {
  let location = useLocation();

  return (
    <div>
      {newObj.map((item, i) => {
        if(item.id  == location.pathname.split("/").at(-1)) {
          console.log("hello");
          return <h1>{item.name}</h1>
        }
      })}
    </div>
  );
}

export default Adiblar;