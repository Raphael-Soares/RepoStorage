import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {useContext} from "react";

import Login from "../pages/login/Login";
import Home from "../pages/home/HomePage";

import {AuthProvider, AuthContext} from "../contexts/Auth";

function AppRouter() {
    const Private = ({children}) => {
        const {authenticated} = useContext(AuthContext);
        if (!authenticated) {
            return <Navigate to="/login" />;
        }
        return children;
    };
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />

                    <Route
                        path="/"
                        element={
                            <Private>
                                <Home />
                            </Private>
                        }
                    />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default AppRouter;
