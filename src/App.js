import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import App2 from './app2';
import Content from './content';
import Login from './login';
import logo from './logo.svg';
import Navbar from './navbar';
import Player from './player';
import Uploader from './uploader';

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path = "/" element = {<App2/>}/>
    <Route path = "/content" element = {<Content/>}/>
    <Route path = "/login" element = {<Login/>}/>
    <Route path = "/watch" element = {<Player/>}/>
    <Route path = "/upload" element = {<Uploader/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
