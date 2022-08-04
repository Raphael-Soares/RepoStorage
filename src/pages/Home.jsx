import {useEffect, useState, useContext} from "react";
import {Link} from "react-router-dom";
import {ReposContext} from "../contexts/Repos";

import "./style/Home.scss";

function Home() {
    const {repos} = useContext(ReposContext);
    return (
        <div className="home">
            <h2>Repositories</h2>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <Link to={`repository/${repo.id}`} className="Link">
                            <p>{repo.owner.login}</p>
                            <h1>{repo.name}</h1>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
