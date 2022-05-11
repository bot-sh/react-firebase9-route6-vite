import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../Context/UserProvider";

const Navbar = () => {
    const { user, setUser } = useContext(UserContext)


    return (
        <div>
            {
                user ?
                    <>
                        <NavLink to="/">inicio </NavLink>
                        <button onClick={() => setUser(false)}>logout</button>
                    </>
                    :
                    <NavLink to="/login">Login </NavLink>
            }
        </div>
    )
}
export default Navbar;