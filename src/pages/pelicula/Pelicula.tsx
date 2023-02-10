import { useLocation } from "react-router-dom"
import { useEffect, useState } from 'react';
import moviesApiInTheaters from '../../api/moviesApi';
import { Grid, Link, Typography, List, ListItem, ListItemText } from '@mui/material';
import { ArrowLeft, Bookmark, Favorite, Hd, PlayArrow, Star } from "@mui/icons-material";
import ticket from '../../assets/ticket.svg'
import { singleMovie } from "../../types/types";
import atmos from '../../assets/atmos.svg'



const getPoster = (posterpath: string) =>{
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`
  }  
const getPosterFullWidth = (posterpath: string) =>{
    return `https://image.tmdb.org/t/p/w1920_and_h800_face${posterpath}`
  }  

export const Pelicula = () => {

    const [movie, setMovie] = useState<singleMovie>();
    const [trailer, setTrailer] = useState('');

    console.log(movie)

    const { state } = useLocation()
    const movieId = state.id

    useEffect(() => {
      const fetchData = async() =>{
        const {data: movie} = await moviesApiInTheaters.get<singleMovie>
        (`/${movieId}?api_key=9ee38d833557c19b1f1c02d7e2b7b0f8&language=es-ES`);
        setMovie(movie)

        const {data: video} = await moviesApiInTheaters.get
        (`/${movieId}/videos?api_key=9ee38d833557c19b1f1c02d7e2b7b0f8&language=en-US`)
        setTrailer(video.results[video.results.length - 1].key)
      }
      fetchData()

    }, [])
    


  return movie !== undefined ? (
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

                <List disablePadding sx={{mb: 2, display:'flex'}}>
                     <Typography sx={{mr: 0.5, fontSize:'0.8rem', opacity: 0.7}}>
                      {movie.release_date}
                      </Typography>
                    {movie.genres.map( genre => (
                      <Typography key={genre.id} sx={{mr: 1, fontSize:'0.8rem', opacity: 0.7}}>
                       {"\u2022"} {genre.name}
                      </Typography> 
                    ))}
                    <Typography sx={{mr: 1, fontSize:'0.8rem', opacity: 0.7}}>
                    {"\u2022"} {movie.runtime}min
                    </Typography>
                </List>

                <Grid container
                justifyContent='space-between'>

                    <Grid display='flex'>
                    <Star fontSize="small" style={{color:'yellow'}}/>
                    <Typography sx={{ml:1}}>
                        {Math.round(movie.vote_average)}
                    </Typography>
                    </Grid>

                    <Grid display="flex">
                    <Favorite style={{marginRight: '1rem'}} fontSize="small"/>
                    <Bookmark style={{marginRight: '1rem'}} fontSize="small"/>
                    <PlayArrow fontSize="small"/>
                    <Link target="_blank" 
                    href={`https://www.youtube.com/watch?v=${trailer}`} 
                    sx={{ml:0.2,transition: '0.3s', textDecoration:'none', color:'white', '&:hover':{ color:'#FF8B13', transition: '0.3s'}}}>
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
                <Grid container
                justifyContent="left"
                alignItems="center">
                  <img style={{width: '100px', cursor: 'pointer'}} src={ticket} alt="" />
                  <ArrowLeft/>
                  <Typography >Compra tu entrada</Typography>
                </Grid>
                


            </Grid>

        </Grid>
        </section>
        <section>
          <Grid container
          justifyContent="center"
          alignContent="center"
          sx={{ pl: 10, pr:10, pt: 5}}>
            <Grid item xs={6}>
              <Typography
              sx={{fontWeight:'bold', fontSize:'1.5rem'}}>
                HORARIOS
              </Typography>

              <Grid
              sx={{mt:5}}>

                <Grid container>
                <Typography
                sx={{color:'#FF8B13',
                fontWeight:'bold', mr:2}}>
                  CINEMA PARADISO 
                </Typography>
                  <Hd/>
                </Grid>

                <Typography
                sx={{mt:1, opacity: 0.7}}>
                  Subtitulada: 15:00 - 19:00 - 21:00 <br />
                  Castellano: 13:00 - 17:00 - 20:00
                </Typography>
              </Grid>

              <Grid
              sx={{mt:5}}>

                <Grid container>
                <Typography
                sx={{color:'#FF8B13',
                fontWeight:'bold', mr:2}}>
                  CINEMA ROCHA
                </Typography>
                <img style={{width: '22px'}}  src={atmos} alt="" />

                </Grid>
                <Typography
                sx={{mt:1, opacity: 0.7}}>
                  Subtitulada: 13:00 - 16:00 - 20:30 <br />
                  Castellano: 15:00 - 18:00 - 21:20
                </Typography>
              </Grid>
              <Grid>

              </Grid>

            </Grid>
            
            <Grid item xs={6} > 
            <iframe
            style={{width:'100%',
            height: '300px',
            border:'none',
            borderRadius: 10}} 
            key={trailer} 
            src={`https://www.youtube.com/embed/${trailer}`}></iframe>
            </Grid>
          </Grid>
        </section>
    </main>
  </>
  ) : <div>Cargando</div> 
}
