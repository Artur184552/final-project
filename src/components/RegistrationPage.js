import React from "react";

function RegistrationPage() {
    return(
        <>
        <div className="registration-page">
          <div className="container">

            <div className="registration-page-form-container">

              <h1 className="registration-form-heading">Регистрация</h1>

              <form className="registration-form">
                
                <label className="form-element-label registration-form-element-label">
                  <div className="form-element-label-description registration-label-description">email <span className="red-star">*</span></div>
                  <input placeholder="укажите почту" className="form-element registration-form-element" type="email" required />
                </label>
   
                <label className="form-element-label registration-form-element-label">
                  <div className="form-element-label-description registration-label-description">password <span className="red-star">*</span></div>
                  <input placeholder="введите пароль" className="form-element registration-form-element" type="password" required />
                </label>
   
                <label className="form-element-label registration-form-element-label">
                  <div className="form-element-label-description registration-label-description">name</div>
                  <input placeholder="ваше имя" className="form-element registration-form-element" type="text" />
                </label>
   
                <label className="form-element-label registration-form-element-label">
                  <div className="form-element-label-description registration-label-description">second name</div>
                  <input placeholder="ваша фамилия" className="form-element registration-form-element" type="text" />
                </label>
   
                <label className="form-element-label registration-form-element-label">
                  <div className="form-element-label-description registration-label-description">client id <span className="red-star">*</span></div>
                  <input placeholder="client id" className="form-element registration-form-element" type="text" required />
                </label>       
   
                <button className="form-element registration-form-element registration-button">Отправить</button>
   
              </form>
            </div>

          </div>
        </div>
        </>
    )
}

export default RegistrationPage