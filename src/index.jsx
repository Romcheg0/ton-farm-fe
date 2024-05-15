import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { HashRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home/Home"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" Component={App}>
          <Route index Component={Home} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)

