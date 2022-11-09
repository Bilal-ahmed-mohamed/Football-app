import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Fixtures from './Fixtures';
import Standings from './Standings';
import Error  from './components/Error';


function App() {
  return (
    <div className="App">
      
      <Router>
       <Header/>
       <Navbar/>

       <Routes>
        <Route  path='/' element={<Standings/>} />
        <Route  path='/Fixtures'  element={<Fixtures/>} />
        <Route path='*'  element={<Error/>} />
       </Routes>
       </Router>
    </div>
  );
}

export default App;
