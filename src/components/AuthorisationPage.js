import React from "react";

function AuthorisationPage() {
    return(
        <>
        <div className="authorisation-page">
          <div className="container">

            <div className="authorisation-page-form-container">

              <h1 className="authorisation-form-heading">Авторизация</h1>

              <form className="authorisation-form">
                
                <label className="form-element-label authorisation-form-element-label">
                  <div className="form-element-label-description authorisation-label-description">email <span className="red-star">*</span></div>
                  <input placeholder="укажите почту" className="form-element authorisation-form-element" type="email" required />
                </label>
   
                <label className="form-element-label authorisation-form-element-label">
                  <div className="form-element-label-description authorisation-label-description">password <span className="red-star">*</span></div>
                  <input placeholder="введите пароль" className="form-element authorisation-form-element" type="password" required />
                </label>    
   
                <button className="form-element authorisation-form-element authorisation-button">Отправить</button>
   
              </form>
            </div>

          </div>
        </div>
        </>
    )
}

export default AuthorisationPage;