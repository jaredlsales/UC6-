import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "../Dashboard"
import CabecalhoA from "../CabecalhoA"

//path="*" e usando para quando não encontrar vai para a pagina Dashboard 
export default function Autenticados() {
    return (
        <BrowserRouter>
        <CabecalhoA/>
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="*" element={<Dashboard/>} />
            </Routes>
        </BrowserRouter>
    )
}