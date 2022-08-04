import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {useContext} from "react";

import Login from "../pages/login/Login";
import Default from "../pages/Default";
import Home from "../pages/home/Home";
import Favorites from "../pages/favorites/Favorites";

import {AuthProvider, AuthContext} from "../contexts/Auth";
import {ReposProvider, ReposContext} from "../contexts/Repos";
import NotFound from "../pages/NotFound";
import Repository from "../pages/repository/Repository";

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
                <ReposProvider>
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
                            <Route path="/repository/:id" element={<Repository />} />
                            <Route path="/" element={<Home />} />
                            <Route path="*" element={<NotFound />}></Route>
                        </Route>
                    </Routes>
                </ReposProvider>
            </AuthProvider>
        </Router>
    );
}

export default AppRouter;
