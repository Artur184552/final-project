import React from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
    return(
        <>
        <div className="homepage">
        <div className="container homepage-container">

            <div className="service-info">
                <div className="service-info-header">
                    <h2>О Нашем Сервисе:</h2>
                </div>
                <div className="about-service">
                    <p>Наша команда предоставляет такие услуги, как прокат велосипедов в крупных городах России. 
                        В нашей команде работают только ответсвенные сотрудники, которые помогут вам с выбором
                         пункта проката, а также с выбром модели велосипеда.</p>
                         
                    <p>Так как в последнее время многие сервисы проката сталкиваются с проблемой кражи,
                        наша команда реализовала новый способ защиты от таких случаев, и теперь
                        вы можете сообщать о краже лично, что поможет нам быстрее вернуть вам велосипед! 
                    </p>
                </div>
            </div>

            <div className="homepage-report">
                
                <div className="homepage-report-header"><h3>Сообщить о краже!</h3></div>

                <div className="homepage-report-description">
                    <p>Если у вас украли велосипед, вы можете перейти на страницу заполнения формы. 
                        После заполнения формы мы поможем вам вернуть велосипед!
                    </p>
                </div>

                <div className="homepage-report-button">
                <NavLink to='/report-theft' className='report-theft-navLink'>
                    <button className="to-report-button">Заполнить форму</button>
                </NavLink>
                </div>

            </div>

        </div>
        <div className="homepage-overlay" />
        </div>
        </>
    )
}

export default HomePage;