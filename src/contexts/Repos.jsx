import {createContext, useState, useEffect} from "react";

export const ReposContext = createContext();

export const ReposProvider = ({children}) => {
    const [repos, setRepos] = useState([]);

    function handleFavorite(repo) {
        const newRepos = repos.map((r) => (r.id === repo.id ? {...r, favorite: !r.favorite} : r));
        localStorage.setItem("repos", JSON.stringify(newRepos));
        setRepos(newRepos);
    }

    useEffect(() => {
        const recoveredRepos = localStorage.getItem("repos");
        if (recoveredRepos) {
            setRepos(JSON.parse(recoveredRepos));
        } else {
            fetch("https://api.github.com/users/Raphael-Soares/repos")
                .then((res) => res.json())
                .then((res) => {
                    setRepos(res);
                    localStorage.setItem("repos", JSON.stringify(res));
                })
                .catch((err) => console.log(err));
        }
    }, []);

    return <ReposContext.Provider value={{repos, handleFavorite}}>{children}</ReposContext.Provider>;
};
