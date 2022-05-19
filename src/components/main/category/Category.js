import React from "react";
import './Category.scss'

let category = [
  {
    name: "Temuriylar davri",
    class: false
  },
  {
    name: "Jadid adabiyoti",
    class: true
  },
  {
    name: "Sovet davri",
    class: false
  },
  {
    name: "Mustaqillik davri",
    class: false
  },
]

function Category() {
  return(
    <ul className="category d-flex">
      {category.map((item, key) => (
        <li key={key+9} className="category__item">
          <button id={key+1} className={`category__btn ${item.class ? 'category__activ': ''}`}>{item.name}</button>
        </li>
      ))}
    </ul>
  )
}

export default Category