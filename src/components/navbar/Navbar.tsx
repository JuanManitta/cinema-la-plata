import { Grid, List, ListItem, Typography } from '@mui/material'
import logo from '../../assets/Logo.png'
import { useNavigate } from 'react-router-dom';


export const Navbar = () => {

  const navigate = useNavigate();
  const handleNavigate = (page: string) => {
    navigate(`${page}`)

  }


  return (
    <nav>
      <Grid 
        container
        flexDirection='row-reverse'
        sx={{backgroundColor: '#2b2b31',
        justifyContent:'center',
        alignItems:'center',
        pl: 5, pb:2, pt: 2}}>

          <Grid item xs={8}>
            <List sx={{display:'flex',
             fontSize:'16px',
             width:'none',
             fontWeight:'400', cursor:'pointer',
             textTransform: 'uppercase', pr:3}}>
              <ListItem
              onClick={() => handleNavigate('/')} 
              sx={{transition: '0.3s', '&:hover':{
              color:'#6b6b79',
              transition: '0.3s'
              }}}> HOME</ListItem>
              <ListItem
              onClick={() => handleNavigate('/cartelera')} 
              sx={{transition: '0.3s', '&:hover':{
              color:'#6b6b79',
              transition: '0.3s'
              }}}> CARTELERA</ListItem>
              <ListItem
              onClick={() => handleNavigate('/estrenos')} 
              sx={{transition: '0.3s', '&:hover':{
              color:'#6b6b79',
              transition: '0.3s'
              }}}> ESTRENOS</ListItem>
              <ListItem
              onClick={() => handleNavigate('/precios')} 
              sx={{transition: '0.3s', '&:hover':{
              color:'#6b6b79',
              transition: '0.3s'
              }}}> PRECIOS</ListItem>
              <ListItem
              onClick={() => handleNavigate('/boleteria')} 
              sx={{transition: '0.3s', '&:hover':{
              color:'#6b6b79',
              transition: '0.3s'
              }}}> BOLETERIA</ListItem>
            </List>
          </Grid>
          <Grid 
            item xs={4}
            display='flex'
            alignItems='center'>
            <img onClick={() => handleNavigate('/')} style={{marginLeft: '6px', width: '18%', cursor:'pointer'}}  src={logo} alt="" />
            <Typography onClick={() => handleNavigate('/')} sx={{fontWeight:'700', ml:1, color:'ECA869', fontSize: '1.4rem', cursor:'pointer'}}>
            <b style={{color: '#FF8B13'}}>Cinema</b> <br />La Plata
            </Typography>
          </Grid>
      </Grid>
    </nav>
  )
}
