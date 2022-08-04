import {useContext} from "react";
import {ReposContext} from "../../contexts/Repos";

function Favorites() {
    const {repos, handleFavorite} = useContext(ReposContext);
    return (
        <div>
            <h1>Favorites</h1>
            <ul>
                {repos.map(
                    (repo) =>
                        repo.favorite == true && (
                            <li key={repo.id}>
                                {repo.name}
                                {repo.favorite && <span>&hearts;</span>}
                                <button onClick={() => handleFavorite(repo)}>Fav</button>
                            </li>
                        )
                )}
            </ul>
        </div>
    );
}

export default Favorites;
