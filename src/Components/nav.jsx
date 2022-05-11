import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../Context/UserProvider";

const Navbar = () => {
    const { user, signOutUser } = useContext(UserContext)


    const handleClicklogout = async () => {
        try {
            await signOutUser()

        } catch (error) {
            console.log(error.code);
        }
    }

    return (
        <div>
            {user ? (
                <>
                    <NavLink to="/">inicio | </NavLink>
                    <button onClick={handleClicklogout}>logout</button>
                </>
            ) : (
                <>
                    <NavLink to="/login">Login | </NavLink>
                    <NavLink to="/Register">Register | </NavLink>
                </>
            )}
        </div>
    )
}
export default Navbar;