import {useState, useEffect, createContext} from "react";

import {useNavigate} from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);
    }, []);

    function login(email, password) {
        const loggedUser = {
            id: "12345",
            email,
            password,
        };

        localStorage.setItem("user", JSON.stringify(loggedUser));

        if (password === "123") {
            setUser({
                id: "123",
                email: email,
            });
            navigate("/");
        }
    }

    function logout() {
        setUser(null);
        localStorage.removeItem("user");
        navigate("/login");
    }
    return <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout}}>{children}</AuthContext.Provider>;
};
