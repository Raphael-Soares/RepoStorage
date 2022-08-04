import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {useContext} from "react";

import Login from "../pages/login/Login";
import Default from "../pages/Default";
import Home from "../pages/home/Home";
import Favorites from "../pages/favorites/Favorites";

import {AuthProvider, AuthContext} from "../contexts/Auth";
import NotFound from "../pages/NotFound";

function AppRouter() {
    const Private = ({children}) => {
        const {authenticated, loading} = useContext(AuthContext);
        if (loading) {
            return <div>Loading...</div>;
        }
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
                                <Default />
                            </Private>
                        }
                    >
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<NotFound />}></Route>
                    </Route>
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default AppRouter;
