import Home from "./pages/Home.jsx"
import Edukasi from "./pages/Edukasi.jsx"
import Login from "./features/auth/Login.jsx"
import Signup from "./features/auth/Signup.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edukasi" element={<Edukasi />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
