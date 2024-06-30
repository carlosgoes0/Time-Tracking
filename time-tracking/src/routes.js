import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appointment from "./pages/Appointment"
import Modal from "./components/modal/Modal";



function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/appointment" element={<Appointment />} />
                    <Route path="/modal" element={<Modal />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rotas;