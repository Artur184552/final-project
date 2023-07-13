import React from "react";

// Ссылки в Footer не рабочие, у них отсутствует функциональность

function Footer() {
    return(
        <>
        <footer>
            <div className="container">
                <div className="footer-nav">

                    <div className="footer-left">
                       <div className="footer-link response">Отзывы</div>
                       <div className="footer-link feedback">Обратная связь</div>
                    </div>

                    <div className="footer-middle">
                        <div className="footer-link contacts">Контакты</div>
                        <div className="footer-link support">Поддержка</div>
                    </div>

                    <div className="footer-right">
                        <div className="footer-link location">Пункты Проката</div>
                        <div className="footer-link cooperation">Сотрудничество</div>
                    </div>

                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;