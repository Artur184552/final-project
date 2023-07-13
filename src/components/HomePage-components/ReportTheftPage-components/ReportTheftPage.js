import React, { useState } from "react";
import ReportTheftForm from "./ReportTheftForm";
import SingleReportElement from "./SingleReortElement";

function ReportTheftPage() {

    const [reportElems, setReportElems] = useState([])

    const addReportElem = (reportNameInput) => {
        if(reportNameInput) {
            const newReportElem = {
                reportDisplayName: reportNameInput,
                id: Math.random().toString()
            }
            setReportElems([...reportElems, newReportElem])
        }
    }

    const removeReportElem = (id) => {
        setReportElems([...reportElems.filter((reportElems) => reportElems.id !== id)])
    }

    return(
        <>
        <div className="report-theft">
            <div className="container">



                <div className="report-theft-top-side">
                    <h1 className="report-theft-form-heading">Заполните данные</h1>
                    <ReportTheftForm addReportElem={addReportElem} />
                </div>

                <div className="report-theft-bottom-side">
                    <h5 className="report-theft-bottom-heading">Список сообщений о кражах ({reportElems.length})</h5>

                    {reportElems.map((reportElems) => {
                        return(
                            <SingleReportElement 
                            reportElems = {reportElems}
                            key={reportElems.id}
                            removeReportElem = {removeReportElem}
                            />
                        )
                    })}

                </div>

            </div>
        </div>
        </>
    )
}

export default ReportTheftPage;