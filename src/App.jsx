import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import Dashboard from "./pages/Dashboard";

import CommandCenter from "./pages/CommandCenter";

import Insights from "./pages/Insights";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/command-center" element={<CommandCenter />} />

        <Route path="/insights" element={<Insights />} />

      </Routes>

    </BrowserRouter>

  )

}

export default App