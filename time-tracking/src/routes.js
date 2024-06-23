import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appointment from "./pages/Appointment"



function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/appointment" element={<Appointment />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rotas;