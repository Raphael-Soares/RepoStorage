import {useParams, Link} from "react-router-dom";

import {useContext} from "react";
import {ReposContext} from "../contexts/Repos";

import "./style/Repository.scss";

function Repository() {
    const {id} = useParams();
    const {repos, handleFavorite} = useContext(ReposContext);
    const repo = repos.find((repo) => repo.id == id);

    return (
        <div className="Repository">
            <Link to="/" className="voltar">
                Voltar
            </Link>
            <div className="title">
                <h1>
                    {repo.name} {repo.favorite && <p>&hearts;</p>}
                    <button onClick={() => handleFavorite(repo)}>Favoritar</button>
                </h1>
                <p>{repo.owner.login}</p>
            </div>
            <div className="info">
                <div>
                    <a href={repo.html_url}>{repo.html_url}</a>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Repository;
