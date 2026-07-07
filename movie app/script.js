import getMovie from "./api.js";

const movie = document.getElementById("movie");

const searchBtn = document.getElementById("searchBtn");

const poster = document.getElementById("poster");

const title = document.getElementById("title");

const year = document.getElementById("year");

const rating = document.getElementById("rating");

const genre = document.getElementById("genre");

const plot = document.getElementById("plot");

const error = document.getElementById("error");

const displayMovie = async()=>{

    const movieName = movie.value.trim();

    if(movieName===""){

        error.innerHTML="Please enter a movie name.";

        return;

    }

    error.innerHTML="";

    title.innerHTML="Loading...";

    try{

        const data = await getMovie(movieName);

        if(data.Response==="False"){

            poster.src="";

            title.innerHTML="";

            year.innerHTML="";

            rating.innerHTML="";

            genre.innerHTML="";

            plot.innerHTML="";

            error.innerHTML="Movie not found.";

            return;

        }

        const{

            Title,

            Year,

            imdbRating,

            Genre,

            Plot,

            Poster

        }=data;

        poster.src=Poster;

        title.innerHTML=Title;

        year.innerHTML=`Release Year : ${Year}`;

        rating.innerHTML=`IMDb Rating : ${imdbRating}`;

        genre.innerHTML=`Genre : ${Genre}`;

        plot.innerHTML=`Plot : ${Plot}`;

    }

    catch(err){

        console.log(err);

        poster.src="";

        title.innerHTML="";

        year.innerHTML="";

        rating.innerHTML="";

        genre.innerHTML="";

        plot.innerHTML="";

        error.innerHTML="Unable to fetch movie details.";

    }

}

searchBtn.addEventListener("click",displayMovie);

movie.addEventListener("keypress",(event)=>{

    if(event.key==="Enter"){

        displayMovie();

    }

});