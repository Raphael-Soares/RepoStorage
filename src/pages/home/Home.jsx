import {useEffect, useState} from "react";

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/Raphael-Soares/repos")
            .then((res) => res.json())
            .then((res) => setData(res));
    }, []);

    function handleFavorite(repo) {
        setData(
            data.map((item) => {
                if (item.name === repo.name) {
                    return {...item, favorite: !item.favorite};
                }
                return item;
            })
        );
    }

    return (
        <>
            <h1>Home</h1>

            <h2>Repositories</h2>
            <ul>
                {data.map((repo) => (
                    <li key={repo.id}>
                        {repo.name} {repo.favorite && <span>&hearts;</span>}
                        <button onClick={() => handleFavorite(repo)}>Fav</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Home;
