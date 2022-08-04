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
                    <Link className="Link" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="Link" to="favorites">
                        Favoites
                    </Link>
                </li>

                <li>
                    <button onClick={handleLogout} className="button-link">
                        Sair
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
