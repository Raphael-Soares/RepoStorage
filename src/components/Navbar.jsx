import {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../contexts/Auth";
import "./style/Navbar.scss";

function Navbar() {
    const {user, logout} = useContext(AuthContext);

    function handleLogout() {
        logout();
    }
    return (
        <nav>
            <a href="#" className="logo">
                {String(user.email)}
            </a>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="favorites">Favoites</Link>
                </li>

                <li>
                    <button onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
