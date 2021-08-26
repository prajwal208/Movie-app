import './App.css';
import { useEffect,useState } from 'react';
import MovieCart from './componets/MovieCart';
import Home from './componets/Home';
import Series from './componets/Series';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Sidebar from './componets/Sidebar'
function App() {
  
  const [movies,setMovies] = useState([])
  const [color,setColor] = useState('white') 
  const [moviecart,setMoviecart] = useState([])
  const [search,setSearch] = useState('Avengers')
  
    

  const getmovies = async(search) => {
   const url = `http://www.omdbapi.com/?s=${search}&apikey=81fee036`
   const response = await fetch(url)
    const responsejson = await response.json()
    console.log(responsejson.Search);

   if(responsejson.Search){
    setMovies(responsejson.Search)
   }
  }
  
  useEffect(() => {
    getmovies(search)
  },[search])

  const addtolike = (movie) => {
  setColor('red')
  setMoviecart([...moviecart,movie])
  }

  const removemovie = (movie) => {
    console.log("removed");
    setMoviecart(movies.filter((e) => {
      return e!==movie
    }))
  }

  return (
   <>
   <Router>
    <Switch>
    
    <Route exact path='/'>
    <Sidebar />
   <Home movies={movies} color={color} addtolike={addtolike} search={search}
                setSearch={setSearch}/>
   </Route>

   <Route exact path='/moviecart'>
   <Sidebar />
   <MovieCart moviecart={moviecart} color={color} removemovie={removemovie}/>
   </Route>
   
   <Route exact path='/tvseries'>
   <Sidebar />
   <Series movies={movies} color={color} />
   </Route>

   </Switch>
   </Router>
   </>
  );
}

export default App;
