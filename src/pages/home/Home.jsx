import {useEffect, useState, useContext} from "react";
import {Link} from "react-router-dom";
import {ReposContext} from "../../contexts/Repos";

function Home() {
    const {repos} = useContext(ReposContext);
    return (
        <>
            <h1>Home</h1>

            <h2>Repositories</h2>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <Link to={`repository/${repo.id}`}>{repo.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Home;
