import logo from './logo.svg';
import './App.css';
import FetchApi from './components/FetchApi'
import Navbar from './components/Navbar'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './components/Home';
import Section from './components/Section'
import AddToCart  from './components/AddToCart';


function App() {
  return (
    <div className="App">

      <Navbar/>
      <Router>
        <Routes>


          <Route exact path="/Home" element={<FetchApi />}/>

          

          <Route  path="/section/:id/" element={<Section />}/>


          <Route  path="/AddToCart" element={<AddToCart />}/>

          
        </Routes>

      </Router>
      
    </div>
  );
}

export default App;
