import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
    console.log(`fetching videos: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const res = await fetch(`${API_URL}/${id}/videos`);
    const data = await res.json();
    return data;
}

export default async function MovieVideos({id}: {id: string}) {
    const videos = await getVideos(id);
    return (<div>
        {videos.map((video: any) => <li key={video.id}>{video.name}</li>)}
    </div>
    );
}