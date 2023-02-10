import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { Navbar } from '../components/navbar/Navbar';
import { Pelicula } from "../pages/pelicula/Pelicula";
import { Precios } from "../pages/precios/Precios";
import { Boleteria } from "../pages/boleterias/Boleteria";
import { Cartelera } from "../pages/cartelera/Cartelera";
import { FuturosEstrenos } from "../pages/futuros-estrenos/FuturosEstrenos";
import { Footer } from "../components/footer/Footer";

export const AppRouter = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/*' element={<Navigate to ='/' />}/> 
        
        <Route path='/pelicula' element={<Pelicula/>}/> 
        <Route path='/precios' element={<Precios/>}/> 
        <Route path='/boleteria' element={<Boleteria/>}/> 
        <Route path='/cartelera' element={<Cartelera/>}/> 
        <Route path='/estrenos' element={<FuturosEstrenos/>}/> 
    </Routes>
    <Footer/>
    </>
  )
}
