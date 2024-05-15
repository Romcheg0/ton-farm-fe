import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home/Home"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={App}>
          <Route index Component={Home} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

