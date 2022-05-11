import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Login from "./routes/Login";
import Navbar from "./Components/nav";
import RequireAuth from "./Components/RequireAuth";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        } />

        <Route path="/login" element={<Login />} />

      </Routes>

    </>
  )
}
export default App;
