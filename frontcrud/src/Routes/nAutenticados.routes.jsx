import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "../Inicio"
import Login from "../Login"
import CabecalhoN from "../CabecalhoN"

//path="*" e usando para quando não encontrar vai para a pagina inicial 
export default function NAutenticados() {
    return (
        <BrowserRouter>
        <CabecalhoN/>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="*" element={<Inicio/>} />
            </Routes>
        </BrowserRouter>
    )
}