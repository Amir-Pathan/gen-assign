import logo from './logo.svg';
import './App.css';
import SideDrawer from './drawer';
import { Grid } from '@mui/material';
import ButtonAppBar from './appbar';
import Divisions from './divisions';
import { useEffect } from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import routes from './routes';

function App() {


  useEffect(()=>{

     let division = localStorage.getItem('division')

     if(division===null){

      localStorage.setItem('division',JSON.stringify([]))

     }

  },[])

  return (
    <div>
      <Router>
         <Grid container item xs={12} md={12}>
           <Grid item xs={0} md={1}>
             <SideDrawer/>
         </Grid>
         <Grid item xs={12} md={11}>
           <ButtonAppBar/>
         </Grid>
      </Grid>
        <Routes>
          {
            routes.map((i,index)=>{
              return <Route path={i.path} element={i.component} key={index}/>
            })
          }
         </Routes>
      </Router>
    
    </div>
  );
}

export default App;
