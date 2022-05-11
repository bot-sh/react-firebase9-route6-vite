import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Login from "./routes/Login";
import Navbar from "./Components/nav";
import RequireAuth from "./Components/RequireAuth";
import Register from "./routes/Register";
import { useContext } from "react";
import { UserContext } from "./Context/UserProvider";


const App = () => {

  const { user } = useContext(UserContext)
  if (user === false) {
    return <p>Loading...</p>
  }


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
        <Route path="/Register" element={<Register />} />
      </Routes>

    </>
  )
}
export default App;
