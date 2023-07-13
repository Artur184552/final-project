import React from "react";
import { Routes, Route } from 'react-router-dom';
import '../index.css';

import HomePage from "../components/HomePage-components/HomePage";
import NotFoundPage from "../components/NotFoundPage";
import RegistrationPage from "../components/RegistrationPage";
import StaffPage from "../components/StaffPage";
import AuthorisationPage from '../components/AuthorisationPage'
import ReportTheftPage from "../components/HomePage-components/ReportTheftPage-components/ReportTheftPage";

function Main() {
    return(
        <>
        <main>
               <Routes>
                   <Route path="/" element={<HomePage />} />
                   <Route path="/staff" element={<StaffPage />} />
                   <Route path="/registration" element={<RegistrationPage />} />
                   <Route path="/authorisation" element={<AuthorisationPage />} />
                   <Route path="/report-theft" element={<ReportTheftPage />} />
                   <Route path="*" element={<NotFoundPage />} />
               </Routes>
        </main>
        </>
    )
}

export default Main;