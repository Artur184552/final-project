import React from "react";
import '../index.css'
import { NavLink } from "react-router-dom";

function Header() {

    const setClassName = ({ isActive }) => isActive ? 'active-header-link' : 'header-link'

    return(
        <>
        <header>
            <div className="container">
                <div className="header-nav">

                   <div className="header-link to-home-page-link"><NavLink className={setClassName} to='/' >Главная</NavLink></div>
                   <div className="header-link staff"><NavLink className={setClassName} to='/staff'>Сотрудники</NavLink></div>

                   <div className="header-link profile-registration"><NavLink to='/registration' className={setClassName}>Зарегистрироваться</NavLink></div>
                   <div className="header-link profile-authorisation"><NavLink to='/authorisation' className={setClassName}>Авторизоваться</NavLink></div>
                   <div className="header-link profile-exit">Выход</div>

                </div>
            </div>
        </header>
        </>
    )
}

export default Header;