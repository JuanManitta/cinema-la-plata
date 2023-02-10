import { useEffect, useState } from "react";

import moviesApiInTheaters, { moviesGenre } from "../../api/moviesApi";
import { MovieCard } from "../../components/card/MovieCard";

import { Grid, Typography } from "@mui/material"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import camera from '../../assets/camera.svg'
import {Genre, GenreListResponse, MovieInTheatersRespone, Movie } from '../../types/types';



export const Home = () => {

  const [peliculasMostradas, setPeliculasMostradas] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      const { data: genreList } = await moviesGenre.get<GenreListResponse>(
        "/movie/list?api_key=9ee38d833557c19b1f1c02d7e2b7b0f8&language=en-US"
      );
      setGenres(genreList.genres);
    };
    fetchData();
  }, []);
  
   const getGenre = (moviesGenres: number) => {
    const genre = genres.find((genre) => genre.id === moviesGenres);
    return genre ? genre.name : "";
  }

  useEffect(() => {
    const fetchData = async() =>{
      const{data: moviesInTheaters} = await moviesApiInTheaters.get<MovieInTheatersRespone>(
        "/upcoming?api_key=9ee38d833557c19b1f1c02d7e2b7b0f8&language=es-ES&page=1");
      
      setPeliculasMostradas(moviesInTheaters.results)

    }
    fetchData()
  }, [])
  

  
  const settingsEstrenos = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const settingsCartelera = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  const futurosEstrenos = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };




  
  return (
    <>
   {
   peliculasMostradas.length > 1 ?
    <main  className="main__home">
      <section>
      <Grid>
        <Grid item
        sx={{display:'flex'}}>
          <Typography variant="h1" sx={{fontSize: '30px', mt:1, mb:3}}>
            <b style={{color:'#FF8B13'}}>ESTRENOS</b> ESTA SEMANA
          </Typography>
        </Grid>
        
      <Slider {...settingsEstrenos}>
      {peliculasMostradas.slice(6,15).map( movie => (
        <MovieCard 
        getGenre={getGenre}
        key={movie.id}
        movie={movie}/>
        ))}
        
      </Slider>
      </Grid>
      </section>

      <section>
      <Grid>
        <Grid item
        sx={{display:'flex'}}>
          <Typography variant="h1" sx={{fontSize: '30px', mt:1, mb:3}}>
            <b>CARTELERA</b> 
          </Typography>
        </Grid>
        
      <Slider {...settingsCartelera}>
      {peliculasMostradas.slice(10,30).map( movie => (
        <MovieCard
        getGenre={getGenre}
        key={movie.id}
        movie={movie}/>
        ))}
      </Slider>

      </Grid>
      </section>

      <section>
      <Grid>
        <Grid item
        sx={{display:'flex'}}>
          <Typography variant="h1" sx={{fontSize: '30px', mt:1, mb:3}}>
            <b style={{color:'#FF8B13'}}>FUTUROS</b> ESTRENOS
          </Typography>
        </Grid>
        
      <Slider {...futurosEstrenos}>
      {peliculasMostradas.slice(10,40).map( movie => (
        <MovieCard
        getGenre={getGenre}
        key={movie.id}
        movie={movie}/>
        ))}
      </Slider>

      </Grid>
      </section> 
    </main>

    : <section style={{paddingTop: '6rem'}}>
    <Grid container
    justifyContent="center"
    alignContent="center">
      <img style={{width: '400px'}} src={camera} alt="" />
    </Grid>
    </section> 
  }
    </>
  ) 
}
