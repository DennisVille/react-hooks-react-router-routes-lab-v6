import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  let [directors, setDirectors] = useState([]);
  useEffect(()=> {
    fetch("http://localhost:4000/directors")
    .then((response) => response.json())
    .then((data) => setDirectors(data))
    .catch((error) => console.error(error))
  },[])
  let directorsList = directors.map((director,index) => (
    <article key = {index}>
      <h2>{director.name}</h2>
      <ul>
        {director.movies.map((movie, index) =>
        <li key = {index}>{movie}</li>)}
      </ul>
    </article>
  ))

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorsList}
      </main>
    </>
  );
};

export default Directors;
