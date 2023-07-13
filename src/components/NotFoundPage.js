import React from "react";
import { NavLink } from "react-router-dom";

function NotFoundPage () {
    return(
        <div className="not-found">
            <div className="container">

                <div className="not-found-description">
                    <h1 className="not-found-description-header">Страница не найдена!</h1>
                </div>

                <div className="return-to-homepage">
                    <NavLink to='/'>
                       <button className="return-to-homepage-btn">Вернуться на главную</button>
                    </NavLink>
                </div>

            </div>
        </div>
    )
}

export default NotFoundPage;

