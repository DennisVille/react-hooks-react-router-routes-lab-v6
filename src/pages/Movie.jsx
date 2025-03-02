import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movieInfo, setMovieInfo] = useState(null);
  let {id} = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
    .then((response) => response.json())
    .then((data) => setMovieInfo(data))
    .catch((error) => console.error(error))
  },[id]);
  console.log(movieInfo);
  if (!movieInfo) return <p>Loading...</p>;
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>{movieInfo.title}</h1>
        <p>{movieInfo.time}</p>
        {movieInfo.genres.map((genre, index) =>
        <span key = {index}>{genre}</span>)}
      </main>
    </>
  );
};

export default Movie;
