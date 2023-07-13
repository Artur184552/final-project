import React from "react";

function SingleReportElement({ reportElems, removeReportElem }) {
    return(
        <div className="single-report-message">
           <div className="single-report-message-name"><span className="report-name-span">сообщение от </span>{reportElems.reportDisplayName}</div>
           <div onClick={() => removeReportElem(reportElems.id)} className="report-message-delete">&#10008;</div>
        </div>
    )
}

export default SingleReportElement;