import React, { useState, useEffect } from "react";
import Card from "./card/Card";
import './Main.scss'
import Search from "./search/Search";
import obj from './object/objects';
import Category from "./card/category/Category";

function Main() {
  const [newArr, setNewArr] = useState([]);

  useEffect(() => {
    setNewArr(obj);
  }, []);
  
  return(
    <div className="mains">
    <main>
      <div className="conatiner">
        <section className="main d-flex flex-column align-items-center">
          <Search />
          <h2 className="main__title">Asosiy kategoriyalar</h2>
          <Category 
            obj={obj}
            newArr={newArr}
            setNewArr={setNewArr}
          />
          {/* <Card /> */}
        </section>
      </div>
    </main>
    </div>
  )
}

export default Main