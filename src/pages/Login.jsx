import {useState, useContext} from "react";
import {AuthContext} from "../contexts/Auth";

import "./style/Login.scss";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {login} = useContext(AuthContext);

    function handleSubmit(event) {
        event.preventDefault();
        login(email, password);
    }

    return (
        <div id="login">
            <form onSubmit={handleSubmit}>
                <h1>Login </h1>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="controls">
                    <button type="submit">Login</button>
                </div>
            </form>
            {!login && <p>Senha Invalida</p>}
        </div>
    );
}

export default Login;
