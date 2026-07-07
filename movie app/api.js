const apiKey = "f56fde7e";

const getMovie = async (movie) => {
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movie)}&apikey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
};

export default getMovie;