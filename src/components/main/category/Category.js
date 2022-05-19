import React from "react";
import './Category.scss'


function Category() {
  return(
    <ul className="category d-flex">
      <li className="category__item">
        <button className="category__btn">Temuriylar davri</button>
      </li>
      <li className="category__item">
        <button className="category__btn category__activ">Jadid adabiyoti</button>
      </li>
      <li className="category__item">
        <button className="category__btn">Sovet davri</button>
      </li>
      <li className="category__item">
        <button className="category__btn">Mustaqillik davri</button>
      </li>
    </ul>
  )
}

export default Category