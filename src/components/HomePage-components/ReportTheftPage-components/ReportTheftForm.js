import React, { useState } from "react";

function ReportTheftForm ({ addReportElem }) {

    const [licenseInput, setLicenseInput] = useState('')
    const [textareaInput, setTextareaInput] = useState('')
    const [dateInput, setDateInput] = useState('')

    const handleDateInputChange = (e) => {
        setDateInput(e.currentTarget.value)
    }

    const handleLicenseInputChange = (e) => {
        setLicenseInput(e.currentTarget.value)
    } 

    const handleTextareaInputChange = (e) => {
        setTextareaInput(e.currentTarget.value)
    }

    const [reportNameInput, setReportNameInput] = useState('')

    const handleReportNameChange = (e) => {
        setReportNameInput(e.currentTarget.value)
    }

    const handleReportSubmit = (e) => {
        e.preventDefault()
        addReportElem(reportNameInput)
        setReportNameInput('')
        
        setLicenseInput('')
        setTextareaInput('')
        setDateInput('')
    }

    return(
        <form onSubmit={handleReportSubmit} className="report-form">
        <div className="report-form-left-side">
           
           <label className="form-element-label report-form-element-label">
              <div className="form-element-label-description report-label-description">license <span className="red-star">*</span></div>
              <input onChange={handleLicenseInputChange} value={licenseInput} placeholder="номер лицензии" className="form-element report-form-element" type="number" required />
           </label>

           <label className="form-element-label report-form-element-label">
              <div className="form-element-label-description report-label-description">name <span className="red-star">*</span></div>
              <input
               value={reportNameInput}
               onChange={handleReportNameChange}
               placeholder="ФИО"
               className="form-element report-form-element"
               type="text" required />
           </label>

           <label className="form-element-label report-form-element-label">
              <div className="form-element-label-description report-label-description">type of bicycle</div>
              <select className="form-element report-form-element">                           
               <option className="report-input-select-option">тип велосипеда</option>
               <option className="report-input-select-option">Внедорожный</option>
               <option className="report-input-select-option">Трехколесный</option>
               <option className="report-input-select-option">Фэтбайк</option>
               <option className="report-input-select-option">Спортивный</option>
               <option className="report-input-select-option">Трековый</option>
              </select>
           </label>

           <label className="form-element-label report-form-element-label">
              <div className="form-element-label-description report-label-description">color of bicycle</div>
              <select className="form-element report-form-element">
               <option className="report-input-select-option">цвет велосипеда</option>
               <option className="report-input-select-option">Красный</option>
               <option className="report-input-select-option">Черный</option>
               <option className="report-input-select-option">Синий</option>
               <option className="report-input-select-option">Зеленый</option>
               <option className="report-input-select-option">Желтый</option>
           </select>
           </label>

           <label className="form-element-label report-form-element-label">
              <div className="form-element-label-description report-label-description">date</div>
              <input 
              placeholder="дата кражи" 
              className="form-element report-form-element" 
              type="text" />
           </label>

       </div>



       <div className="report-form-right-side">
            <label className="form-element-label report-form-element-label">
              <div className="form-element-label-description report-label-description">additional information</div>
              <textarea onChange={handleTextareaInputChange} value={textareaInput} placeholder="Оставить дополнительную информацию" className="form-element report-form-element report-textarea" />
           </label>
           <button className="form-element report-form-element report-button">Отправить</button>
       </div>

    </form>
    )
}

export default ReportTheftForm;