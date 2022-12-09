import axios from "axios";
import {useEffect, useState} from "react";
import '../App.css';


function Home() {
  const [list, setListMoovieCategoryAction] = useState([])
  const [filterListMoovieCategoryAction, setfilterListMoovieCategoryAction] = useState([])
  const [listcategory2, setListMoovieCategoryAventure] = useState([])
  const [filterListMoovieCategoryAventure, setfilterListMoovieCategoryAventure] = useState([])
  const [listcategory3, setListMoovieCategoryAnimation] = useState([])
  const [filterListMoovieCategoryAnimation, setfilterListMoovieCategoryAnimation] = useState([])
// récupération de 3 pages de l'api
  async function getData_action() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=85f25a9951a9b561a28bb8b4903b3260`
    );

    console.log(response.data.results)
    setListMoovieCategoryAction(response.data.results)
    setfilterListMoovieCategoryAction(response.data.results)
  }

  async function getData_aventure() {
    const response2 = await axios.get(
      `https://api.themoviedb.org/4/list/10?page=1&api_key=85f25a9951a9b561a28bb8b4903b3260`
    );

    console.log(response2.data.results)
    setListMoovieCategoryAventure(response2.data.results)
    setfilterListMoovieCategoryAventure(response2.data.results)
  }

  async function getData_animation() {
    const response3 = await axios.get(
      `https://api.themoviedb.org/4/list/10?page=2&api_key=85f25a9951a9b561a28bb8b4903b3260`
    );

    console.log(response3.data.results)
    setListMoovieCategoryAnimation(response3.data.results)
    setfilterListMoovieCategoryAnimation(response3.data.results)
  }
// permet d'afficher les films lors du chargement de la page
  useEffect(() => {
    getData_action()
    getData_aventure()
    getData_animation()
  },[])

  return (
    <div className="App-header-home">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"></link>
      <a href="http://localhost:3000/popular_moovie/"><button className="button-populaire">Film Populaire</button></a>
      <h1 className="position-category-action">Catégorie : Action</h1>
      <div className="row-img">
        {/* map pour récupérer les films de la page d'api */}
      {filterListMoovieCategoryAction.map((moovie_home) => {
        return (
          <div keya={moovie_home}>
              <div className="size-img-category-action">
            <div className="card">
              <a><img alt="" className="image" src={`https://image.tmdb.org/t/p/original/${moovie_home.poster_path}`}></img></a>
            <div className="content">
            <i className="fa-solid"><pre className="size-date" style={{color:"yellow"}}>Date de Sortie : {moovie_home.release_date } </pre> </i>
                  <i style={{position: "absolute", left:"70px", top:"34px"}} className="fa-solid fa-star"></i>
                  <i style={{position: "absolute", left:"95px", top:"34px"}} className="fa-solid fa-star"></i>
                  <i style={{position: "absolute", left:"120px", top:"34px"}} className="fa-solid fa-star"></i>
                  <i style={{position: "absolute", left:"145px", top:"34px"}} className="fa-solid fa-star"></i>
                  <i style={{position: "absolute", left:"170px", top:"34px"}} className="fa-regular fa-star"></i>
                  <span style={{position: "absolute", left:"195px", top:"32px"}}> 4/5</span>
              </div>
              </div>
            </div>
          </div>
        )
      })}</div>
    
<div className="category-aventure">
  <h1 className="position-category-action">Catégorie : Aventure</h1>
    <div className="row-img">
      {filterListMoovieCategoryAventure.map((moovie_category_aventure) => {
        if (moovie_category_aventure.genre_ids[1] === 12) {
            return (
              <div keyb={moovie_category_aventure}>
                <div className="size-img-category-aventure">
                  <div className="card">
                    <a><img alt="" className="image" src={`https://image.tmdb.org/t/p/original/${moovie_category_aventure.poster_path}`}></img></a>
                    <div className="content">
                      <i className="fa-solid"><pre className="size-date" style={{color:"yellow"}}>Date de Sortie : {moovie_category_aventure.release_date } </pre> </i>
                      <i style={{position: "absolute", left:"70px", top:"34px"}} className="fa-solid fa-star"></i>
                      <i style={{position: "absolute", left:"95px", top:"34px"}} className="fa-solid fa-star"></i>
                      <i style={{position: "absolute", left:"120px", top:"34px"}} className="fa-solid fa-star"></i>
                      <i style={{position: "absolute", left:"145px", top:"34px"}} className="fa-solid fa-star"></i>
                      <i style={{position: "absolute", left:"170px", top:"34px"}} className="fa-regular fa-star"></i>
                      <span style={{position: "absolute", left:"195px", top:"32px"}}> 4/5</span>
                    </div>
                  </div>
                </div>
              </div>
            )
      }else if (moovie_category_aventure.genre_ids[0] === 12) {
          return (
            <div className="size-img-category-aventure">
              <div className="card">
                <a><img alt="" className="image" src={`https://image.tmdb.org/t/p/original/${moovie_category_aventure.poster_path}`}></img></a>
                <div className="content">
                  <i className="fa-solid"><pre className="size-date" style={{color:"yellow"}}>Date de Sortie : {moovie_category_aventure.release_date } </pre> </i>
                  <i style={{position: "absolute", left:"70px", top:"32px"}} className="fa-solid fa-star"></i>
                  <i style={{position: "absolute", left:"95px", top:"32px"}} className="fa-solid fa-star"></i>
                  <i style={{position: "absolute", left:"120px", top:"32px"}} className="fa-solid fa-star"></i>
                  <i style={{position: "absolute", left:"145px", top:"32px"}} className="fa-regular fa-star"></i>
                  <i style={{position: "absolute", left:"170px", top:"32px"}} className="fa-regular fa-star"></i>
                  <span style={{position: "absolute", left:"195px", top:"32px"}}> 3/5</span>
                </div>
              </div>
            </div>
          )
      }
      })}</div>
</div>
<div className="category-animation">
  <h1 className="position-category-action">Catégorie : Animation</h1>
    <div className="row-img2">
      {filterListMoovieCategoryAnimation.map((moovie_category_animation) => {
        if (moovie_category_animation.genre_ids[0] === 16 || moovie_category_animation.genre_ids[2] === 16) {
            return (
              <div keyc={moovie_category_animation}>
                <div className="size-img-category-animation">
                  <div className="card">
                    <a><img alt="" className="image" src={`https://image.tmdb.org/t/p/original/${moovie_category_animation.poster_path}`}></img></a>
                    <div className="content">
                      <i className="fa-solid"><pre className="size-date2" style={{color:"yellow"}}>Date de Sortie : {moovie_category_animation.release_date } </pre> </i>
                      <i style={{position: "absolute", left:"0px", top:"34px"}} className="fa-solid fa-star"></i>
                      <i style={{position: "absolute", left:"25px", top:"34px"}} className="fa-solid fa-star"></i>
                      <i style={{position: "absolute", left:"50px", top:"34px"}} className="fa-solid fa-star"></i>
                      <i style={{position: "absolute", left:"75px", top:"34px"}} className="fa-solid fa-star"></i>
                      <i style={{position: "absolute", left:"100px", top:"34px"}} className="fa-regular fa-star"></i>
                      <span style={{position: "absolute", left:"125px", top:"32px"}}> 4/5</span>
                    </div>
                  </div>
                </div>
              </div>
            )
      }
      })}</div>
</div>
</div>
  );
}

export default Home;