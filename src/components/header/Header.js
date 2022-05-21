import React from "react";
import './Header.scss'
import havatar from '../../assets/images/header-avatar.jpg'
import { NavLink } from "react-router-dom";
const navbar = ["Bosh sahifa", "Nasr", "Nazm", "Maqolalar", "Forum"];

export default function Header() {
  return(
    <header className="header">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="header__logobox">
            <a className="header__logo" href="/">Badiiyat</a>  
          </div>

          <nav className="header__nav d-flex align-items-center">
            <ul className="header__list d-flex justify-content-between align-items-center">
              {navbar.map((nav, i) => {
                return (
                  <>
                    <li className="header__item" key={i}>
                      {nav === "Bosh sahifa" ? (
                        <NavLink to={"/"} className='header__link'>
                          {nav}
                        </NavLink>
                      ) : (
                        <NavLink
                        to={nav}
                        className={`header__link item_${
                          nav === "Bosh sahifa" ? "actives" : ""
                        }`}
                      >
                        {nav}
                      </NavLink>
                      )}

                    </li>
                  </>
                )
              })}
              {/* <li className="header__item"><a className="header__link actives" href="/">Bosh sahifa</a></li>
              <li className="header__item"><a href="#" className="header__link">Nashr</a></li>
              <li className="header__item"><a className="header__link" href="#">Nazm</a></li>
              <li className="header__item"><a className="header__link" href="#">Maqolalar</a></li>
              <li className="header__item"><a className="header__link" href="#">Forum</a></li> */}
            </ul>
          <div className="header__usersbox d-flex justify-content-between align-items-center">
            <button className="header__btn"><img src={havatar} alt="avatar" /></button>
            <button className="header__btndown"><i className='bx bx-chevron-down header__icondown'></i></button>
          </div>
          </nav>

        </div>
      </div>
    </header>
  )
}