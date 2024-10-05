import React from 'react';
import Entrainent from './pages/entrainement';
import Objectif from './pages/objectif';
import Avancement from './pages/avancement';
import Recommandation from './pages/recommandation';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
class App extends React.Component {
  render(){
    return(
      <Router>
        <Routes>
          <Route path='/' exact element={<Entrainent />}/>
          <Route path='/objectif' exact element={<Objectif />}/>
          <Route path='/avancement' exact element={<Avancement />}/>
          <Route path='/recommandation' exact element={<Recommandation />}/>
        </Routes>
    </Router>
    )
  }
}



export default App;
