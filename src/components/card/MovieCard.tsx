import { Grid, Typography } from '@mui/material';
import { Star } from '@mui/icons-material';
import ticket from '../../assets/ticket.svg'
import { useNavigate } from 'react-router-dom';




const getPoster = (posterpath: string) =>{
  return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`
}



export const MovieCard = ({movie, getGenre}) =>{

  const navigate = useNavigate();

  const handleNavigate = ( movieId: number  ) =>{

    navigate('/pelicula', {state: { id: movieId } })
    

  }



    return (

        <Grid
        container
        sx={{margin:'auto', zIndex: -1}}>

          <Grid
           className='card__grid' 
           container
           justifyContent='center'
           alignContent='center'>
          <img onClick={() => handleNavigate(movie.id)} className='card__button' src={ticket} alt="" />
          <img className='card__img' style={{width:'96%', borderRadius:'2px'}} src={getPoster(movie.poster_path)} alt="imagen" />
          </Grid>
       
          <Grid>
            
        <Typography sx={{ width: '130px',
            fontSize:'18px',
            mt: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>{movie.title}
            </Typography>
          <Typography sx={{
            fontSize:'12px', opacity:'0.3'
          }}>{getGenre(movie.genre_ids[0])} <br />
          {getGenre(movie.genre_ids[1])}</Typography>
          
          <Grid container
          alignItems='center'>
          <Star style={{width:'12px', color: 'yellow'}}/>
          <Typography
          sx={{fontSize: '16px', ml: 0.5, mt:0.4, width:'50px'}}>
            {Math.round(movie.vote_average)}
          </Typography>
            </Grid>

        </Grid>
      </Grid>
    )
}