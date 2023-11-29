
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Home from './Pages/Home';
import Viewlist from './Pages/Viewlist';


function App() {
  return (
    <div className="App">
      <Header/>
     
    
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/Viewlist' element={ <Viewlist/> } />
      
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
