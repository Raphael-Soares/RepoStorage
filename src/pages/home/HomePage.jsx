import {useContext} from "react";
import {AuthContext} from "../../contexts/Auth";

function HomePage() {
    const {authenticated, user, logout} = useContext(AuthContext);
    return (
        <div>
            <p>{String(authenticated)}</p>

            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default HomePage;
