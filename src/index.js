import React from "react"
import ReactDOM from "react-dom"
import { Routes, Route, Link, BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"
import Deskripsi from './pages/deskripsi'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="deskripsi/:id" element={<Deskripsi />} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)