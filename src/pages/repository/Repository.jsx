import {useParams} from "react-router-dom";

import {useEffect, useContext} from "react";
import {ReposContext} from "../../contexts/Repos";

function Repository() {
    const {id} = useParams();
    const {repos} = useContext(ReposContext);
    const repo = repos.find((repo) => repo.id == id);

    return (
        <div>
            <h1>{repo.name}</h1>
            <a href={repo.html_url}>{repo.html_url}</a>
        </div>
    );
}

export default Repository;
