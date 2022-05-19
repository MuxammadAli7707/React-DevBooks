import React from "react";
import Card from "./card/Card";
import Category from "./category/Category";
import './Main.scss'
import Search from "./search/Search";

export default function Main() {
  return(
    <div className="mains">
    <main>
      <div className="conatiner">
        <section className="main d-flex flex-column align-items-center">
          <Search />
          <h2 className="main__title">Asosiy kategoriyalar</h2>
          <Category />
          <Card />
        </section>
      </div>
    </main>
    </div>
  )
}