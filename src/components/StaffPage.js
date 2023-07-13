import React, { useState } from "react";

function StaffPage() {

    const [regElems, setRegElems] = useState([])

    const addRegElem = () => {

    }

    const removeRegElem = () => {

    }

    return(
        <>
        <div className="staff">
            <div className="container staffpage-container">

                <h1 className="single-staff-element-heading">Список ответственных сотрудников</h1>

                {/* exmple */}

                <div className="single-staff-element">
                    <div className="single-staff-element-name">Иванов Иван</div>
                    <div className="single-staff-element-delete">&#10008;</div>
                </div>

            </div>
        </div>
        </>
    )
}

export default StaffPage;