import { Grid, List, Typography, ListItem, Link, Divider } from '@mui/material';
import { Facebook, Instagram, Mail, Twitter } from '@mui/icons-material';

import AppStore from '../../assets/AppStore.svg'
import PlayStore from '../../assets/google-play-badge.png'

export const Footer = () => {
  return (
    <footer>
      <Grid container
      justifyContent='center'
      alignContent='center'>
        <Grid item xs={5}>
          <Typography sx={{fontSize:'20px', textAlign:'left'}}>Nuestras <b style={{color:'#FF8B13'}}>direcciones</b> </Typography>
            <List disablePadding sx={{
              mt:4
            }}>
              <ListItem disablePadding>
                <Link href='/' sx={{textDecoration:'none',
                 color:'#FF8B13', fontSize:'14px' }}>Cinema City</Link>
              </ListItem>
              <ListItem disablePadding 
              sx={{fontSize:'11px', mt: 0.5}}>
              Calle 50 nro. 723 entre 9 y 10
              </ListItem>

              <ListItem disablePadding>
                <Link href='/' sx={{textDecoration:'none',
                 color:'#FF8B13', fontSize:'14px', mt:1 }}>Cinema Paradiso</Link>
              </ListItem>

              <ListItem disablePadding 
              sx={{fontSize:'11px', mt: 0.5}}>
              Calle 46 nro. 780 entre 10 y 11
              </ListItem>
              <ListItem disablePadding>
                <Link href='/' sx={{textDecoration:'none',
                 color:'#FF8B13', fontSize:'14px', mt:1 }}>Cinema Rocha</Link>
              </ListItem>

              <ListItem disablePadding 
              sx={{fontSize:'11px', mt: 0.5}}>
              Calle 49 nro. 615 entre 7 y 8
              </ListItem>
              <ListItem disablePadding>
                <Link href='/' sx={{textDecoration:'none',
                 color:'#FF8B13', fontSize:'14px', mt:1 }}>Cinema Ocho</Link>
              </ListItem>

              <ListItem disablePadding 
              sx={{fontSize:'11px', mt: 0.5}}>
              Calle 8 nro. 981 entre 51 y 53
              </ListItem>
              <ListItem disablePadding>
                <Link href='/' sx={{textDecoration:'none',
                 color:'#FF8B13', fontSize:'14px', mt:1 }}>Cinema San Martin</Link>
              </ListItem>

              <ListItem disablePadding 
              sx={{fontSize:'11px', mt: 0.5}}>
              Av. 7 nro. 923 entre 50 y 51
              </ListItem>
            </List>
        </Grid>

        <Grid item xs={4}>
        <Typography sx={{fontSize:'20px', textAlign:'left'}}>Nuestras <b style={{color:'#FF8B13'}}>redes</b></Typography>

        <Grid container
        justifyContent='left'
        alignItems='center'
        sx={{mt:4, gap:1}}>
          <Instagram fontSize='small'/>
          <Typography sx={{fontSize: '14px'}}>
            Instagram
          </Typography>
        </Grid>
        <Grid container
        justifyContent='left'
        alignItems='center'
        sx={{mt:3, gap:1}}>
          <Twitter fontSize='small'/>
          <Typography sx={{fontSize: '14px'}}>
            Twitter
          </Typography>
        </Grid>
        <Grid container
        justifyContent='left'
        alignItems='center'
        sx={{mt:3, gap:1}}>
          <Facebook fontSize='small'/>
          <Typography sx={{fontSize: '14px'}}>
            Facebook
          </Typography>
        </Grid>
        <Grid container
        justifyContent='left'
        alignItems='center'
        sx={{mt:3, gap:1}}>
          <Mail fontSize='small'/>
          <Typography sx={{fontSize: '14px'}}>
            Mail
          </Typography>
        </Grid>

        </Grid>

        <Grid item xs={3}
        display='grid'>
        <Typography sx={{fontSize:'20px', textAlign:'left'}}>Descarga <b style={{color:'#FF8B13'}}>nuestras app</b></Typography>
        <img style={{width: '150px'}} src={AppStore} alt="App Store" />
        <img style={{width: '150px', marginTop: '24px'}} src={PlayStore} alt="Play Store" />
        </Grid>

      </Grid>
      <Grid sx={{mt: 3}}>
        <Divider/>
      </Grid>
      <Grid container
      justifyContent='space-between'>
        <Typography sx={{fontSize: '12px', mt: 2, opacity: 0.5}}>
            &copy; Cinema La Plata, 2023. Created by Juan Manitta
        </Typography>
        <List disablePadding sx={{display: 'flex', width:'200px', mt:2, opacity: 0.5}}>
          <ListItem 
          disablePadding
          sx={{fontSize:'14px', mr: '1rem'}}>Term of use</ListItem>
          <ListItem 
          disablePadding
          sx={{fontSize:'14px'}}>Legal Policy</ListItem>
        </List>
      </Grid>
    </footer>
  )
}
