import { useLocation } from "react-router-dom"
import { useEffect, useState } from 'react';
import moviesApiInTheaters from '../../api/moviesApi';
import { Grid, Link, Typography } from "@mui/material";
import { Bookmark, Favorite, PlayArrow, Star } from "@mui/icons-material";
import ticket from '../../assets/ticket.svg'
import { Footer } from "../../components/footer/Footer";



const getPoster = (posterpath: string) =>{
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`
  }  
const getPosterFullWidth = (posterpath: string) =>{
    return `https://image.tmdb.org/t/p/w1920_and_h800_face${posterpath}`
  }  

export const Pelicula = () => {

    const [movie, setMovie] = useState( 20);
    const [trailer, setTrailer] = useState('');
    const { state } = useLocation()
    const movieId = state.id

    useEffect(() => {
      const fetchData = async() =>{
        const {data: movie} = await moviesApiInTheaters.get(`/${movieId}?api_key=9ee38d833557c19b1f1c02d7e2b7b0f8&language=es-ES`);
        setMovie(movie)

        const {data: video} = await moviesApiInTheaters.get(`/${movieId}/videos?api_key=9ee38d833557c19b1f1c02d7e2b7b0f8&language=en-US`)
        setTrailer(video.results[video.results.length - 1].key)
      }
      fetchData()

    }, [])
    


  return  (
    <>
    <main style={{paddingTop: '3rem'}}>
        <section>
        <div
        style={{
          backgroundImage: `url(${getPosterFullWidth(movie.poster_path)})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: -35,
          opacity: 0.1,
          zIndex: -1,
        }}
        />

        <Grid container
            justifyContent="center"
            alignItems="center">
            <Grid item xs={4}>
                <img 
                src={getPoster(movie.poster_path)} alt="movie poster"
                style={{width: '70%', borderRadius: '3px'}} />
                
            </Grid>
            <Grid item xs={8}>
                <Typography sx={{fontSize: '2rem', fontWeight:'bold', mb: 1}}>
                    {movie.title} <span style={{opacity: 0.3}}>
                    </span>
                </Typography>

                <Typography sx={{fontSize: '0.8rem', mb: 2}}>
                    {movie.release_date } {"\u2022"} generos {"\u2022"}  genero {"\u2022" } { movie.runtime}min
                </Typography>

                <Grid container
                justifyContent='space-between'>

                    <Grid display='flex'>
                    <Star fontSize="small" style={{color:'yellow'}}/>
                    <Typography sx={{ml:1}}>
                        {movie.vote_average}
                    </Typography>
                    </Grid>

                    <Grid display="flex">
                    <Favorite style={{marginRight: '1rem'}} fontSize="small"/>
                    <Bookmark style={{marginRight: '1rem'}} fontSize="small"/>
                    <PlayArrow fontSize="small"/>
                    <Link sx={{ml:0.2, textDecoration:'none', color:'white'}}>
                        Reproducir trailer
                    </Link>
                    
                    </Grid>

                </Grid>
                <Typography sx={{mt: 3, mb: 3, fontSize:'1.5rem', fontWeight:'bold'}}>
                    Descripcion general
                </Typography>
                <Typography>
                    {movie.overview}
                </Typography>
                <img style={{width: '80px', marginTop: '8px', cursor: 'pointer'}} src={ticket} alt="" />
                


            </Grid>

        </Grid>
        </section>
        <section>
          <Grid container
          justifyContent="center"
          alignContent="center"
          sx={{ pl: 10, pr:10, pt: 5}}>
            <iframe
            style={{width:'100%',
            height: '500px',
            border:'none',
            borderRadius: 10}} 
            key={trailer} 
            src={`https://www.youtube.com/embed/${trailer}`}></iframe>
          </Grid>
        </section>
    </main>
    <Footer/>
  </>
  ) 
}
