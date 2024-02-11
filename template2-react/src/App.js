import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import NavBar from './pages/NavBar';
import Banear from './pages/Banear';
import HomeService from './pages/HomeService';
import HomeCompany from './pages/HomeCompany';
import Counter from './pages/Counter';

function App() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Banear/>
      <HomeService/>
      <HomeCompany/>
    </div>
  );
}

export default App;
