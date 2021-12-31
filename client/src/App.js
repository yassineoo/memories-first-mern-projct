import react  from "react";
import {Container  } from "@material-ui/core";
import Home from './components/home/home.js';
import Auth from './components/auth/auth.js';
import NavBar from './components/navBar/navBar.js';
import { BrowserRouter , Route ,Routes } from "react-router-dom";

const App = ()=> {

    return (
        <BrowserRouter>

        <Container maxidth = 'lg'>
        <NavBar />
        <Routes>
         
            <Route exact path='/' element={<Home/>}/>  
            <Route exact path='/auth' element={<Auth/>}/>            
            
        </Routes>
        </Container>
        </BrowserRouter>
    )

}
export default App;