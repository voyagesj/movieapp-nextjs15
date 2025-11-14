import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
    console.log(`fetching movies: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    //throw new Error("Failed to fetch movie data");
    const res = await fetch(`${API_URL}/${id}`);
    const data = await res.json();
    return data;
}


export default async function MovieInfo({id}: {id: string}) {
    const movie = await getMovie(id);
    return (<h6>
        {JSON.stringify(movie)}
    </h6>
    );
}

