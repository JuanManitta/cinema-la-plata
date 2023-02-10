import { Divider, Grid, Typography } from "@mui/material"
import { useState, useEffect } from 'react';
import { Movie, Genre, GenreListResponse, MovieInTheatersRespone } from '../../types/types';
import { moviesGenre } from '../../api/moviesApi';
import moviesApiInTheaters from '../../api/moviesApi';
import ticket from '../../assets/ticket.svg'
import atmos from '../../assets/atmos.svg'
import { Hd } from '@mui/icons-material';
import camera from '../../assets/camera.svg'





const getPoster = (posterpath: string) =>{
  return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`
}


export const Cartelera = () => {

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


  return (
    <>
    { peliculasMostradas.length > 1 ?
    <main className="main__home">
      <section>
        <Grid container>
          <Typography sx={{textAlign:'left', fontSize:'20px', mb: '2rem', mt: '2rem'}}> 
          <b style={{color: '#FF8B13'}}> ESTRENOS </b> HASTA EL 16/10/2023
          </Typography>
          <Grid item xs={12}>
            <Divider sx={{ bgcolor:'black', opacity: '0.3', boxShadow: 2 }} />

          </Grid>

          {peliculasMostradas.slice(7,14).map( movie => (

            <Grid key={movie.id} item xs={12}
            sx={{mt: '2rem'}}>
          <Typography
          sx={{fontSize:'18px', textTransform:'uppercase', mb: 3, fontWeight:'bold'}}>{movie.title}</Typography>
            <Grid container>
              <Grid item xs={4}>
                <img style={{width: '50%', borderRadius:'5px'}} 
                src={getPoster(movie.poster_path)} alt="IMAGEN" />

              </Grid>
              <Grid item xs={8}
              sx={{mb: 6}}>
                <Grid container>
                  <Grid item xs={6}>
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
                  <Grid item xs={6}>
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

                </Grid>
                <Typography sx={{mt:8, mb:1, fontSize:'1.3rem', fontWeight:'bold'}}>SINOPSIS</Typography>
                <Typography>
                  {movie.overview}
                </Typography>
                <img style={{width: '80px'}} src={ticket} alt="ticket" />

              </Grid>

            </Grid>
          </Grid>

          ))}
          

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
