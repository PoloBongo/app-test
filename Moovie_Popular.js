import axios from "axios";
import {useEffect, useState} from "react";
import '../App.css';


function Moovie_Popular() {
  const [list, setList] = useState([])
  const [filterList, setfilterList] = useState([])
  const [list2, setList2] = useState(JSON.parse(localStorage.getItem("list-add")) || [])
// function async qui permet d'initialiser une page de l'api et de definir cette liste dans SetList
  async function getData() {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=85f25a9951a9b561a28bb8b4903b3260`);

    console.log(response.data.results)
    setList(response.data.results)
    setfilterList(response.data.results)
  }

  useEffect(() => {
    getData()
  },[])
// set la nouvelle liste quand on clique sur le film avec l'index qui permet de repérer le bon film a mettre dans la liste
  function handleSubmit(e, index) {
    e.preventDefault()
    setList2(list)
    localStorage.setItem("list-add", JSON.stringify(list[index]))
  }
// permet de filtrer la liste de film grâce à la récupération de la liste entière de film ( 20 films au total dans la page )
  function handleChange(e) {
    if (!e.target.value) {
      setfilterList(list)
      return;
    }

    setfilterList (
      filterList.filter((a) => a.title.includes(e.target.value))
    );


  }

  return (
    <div className="App-header-category-popular">
      <a href="http://localhost:3000/"><button className="button-home">Page d'acceuil</button></a>
      <br></br>
      <input onChange={handleChange} placeholder="Chercher" type="text" />
      <p>Ma liste :<br></br><br></br> {list2.title} - {list2.release_date}</p>
      {filterList.map((moovie, index) => {
        return (
          <div key={moovie.title}>
              <div className="size-img">
                <div className="card">
                  <img className="size-moovie-popular-page" alt="" src={`https://image.tmdb.org/t/p/original/${moovie.backdrop_path}`}></img>
              <div className="content">
                <p>{moovie.overview}</p>
                <p><strong>Note du Film : {moovie.vote_average}</strong></p>
              </div>
              </div>
            </div>
            <form onSubmit={(e) => {handleSubmit(e, index)}}>
              <a href={`/moovie/${index}`}><button className="list-add" style={{cursor:"pointer"}} type="submit">+</button></a>
            </form>
            <button className="button">Titre du Film : {moovie.title}</button>
            <div style={{padding:"10px"}}></div>
          </div>
        )
      })}
    </div>
  );
}

export default Moovie_Popular;