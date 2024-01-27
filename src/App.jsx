import { useState } from 'react'
import { BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter.jsx";
import Header from "./components/Header.jsx";

function App() {

  return (
    <BrowserRouter>
        <Header/>
        <AppRouter/>
    </BrowserRouter>
  )
}

export default App
