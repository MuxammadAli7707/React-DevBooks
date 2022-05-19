import React from 'react';
import './Category.scss'

function Buttons(props) {

  const filterHandler = (e) => {
    if(e.target.id === "Temuriylar davri"){
      props.setNewArr(props.obj.filter(item => {
        return item.cate === e.target.id;
      }))
    } else if(e.target.id === "Jadid adabiyoti") {
      props.setNewArr(props.obj.filter(item => {
        return item.cate === e.target.id;
      })) 
    } else if(e.target.id === "Sovet davri") {
      props.setNewArr(props.obj.filter(item => {
        return item.cate === e.target.id;
      })) 
    } else if(e.target.id === "Mustaqillik davri") {
      props.setNewArr(props.obj.filter(item => {
        return item.cate === e.target.id;
      })) 
    }
  }
  return (
    <>
      <li className="category__item">
        <button onClick={filterHandler} 
        className="category__btn"
        id={props.id}
        >
          {props.item}
        </button>
      </li>
     {/* <ul className="category d-flex">
      <li className="category__item">
        <button onClick={filterHandler} className="category__btn category__activ">Jadid adabiyoti</button>
      </li>
      <li className="category__item">
        <button onClick={filterHandler} className="category__btn">Sovet davri</button>
      </li>
      <li className="category__item">
        <button onClick={filterHandler} className="category__btn">Mustaqillik davri</button>
      </li>
    </ul>  */}
    </>
  );
}

export default Buttons;