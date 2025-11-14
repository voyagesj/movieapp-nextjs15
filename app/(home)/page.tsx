import { promiseHooks } from "v8";

export const metadata = {
    title: "Home"
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const res = await fetch(URL);
    const data = await res.json();
    return data;
}

export default async function Home() {
    const movies = await getMovies();
    return (<div>
        {JSON.stringify(movies)}
    </div>
    );
}
/*
import { useEffect, useState } from "react";
function ReactClientHome() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    async function getMovies() {
        const res = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
        const data = await res.json();
        setMovies(data);
        setIsLoading(false);
    }
    useEffect(() => {
        getMovies();
    }, []);

    return (<div>
        {isLoading ? "Loading..." : JSON.stringify(movies)}
    </div>
    );
}
*/