import React from 'react'
// react pages
import Header from './pages/Header'
import Slider from './pages/Slider'
import Categories from './pages/Categories'
import Course from './pages/Course'
import Help from './pages/Help'
import ChooseUs from './pages/Chooseus'
import Team from './pages/Team'
import Instractor from './pages/Instractor'
import Gallery from './pages/Gallery'
import Subscribe from './pages/Subscribe'
import Registration from './pages/Registration'
import Testimonial from './pages/Testimonial'
import Blog from './pages/Blog'
import Brand from './pages/Brand'
import Sidebar from './pages/Sidebar'
import Footer from './pages/Footer'
import Scrollup from './pages/scrollup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  /**/
    return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>} />
        <Route path='/slider' element={<Slider/>} />
        <Route path='/c' element={<Course/>} />
        <Route path='/h' element={<Help/>} />
        <Route path='/ch' element={<ChooseUs/>} />
        <Route path='/t' element={<Team/>} />
        <Route path='/in' element={<Instractor/>} />
        <Route path='/g' element={<Gallery/>} />
        <Route path='/sb' element={<Subscribe/>} />
        <Route path='/rg' element={<Registration/>} />
        <Route path='/ts' element={<Testimonial/>} />
        <Route path='/b' element={<Blog/>} />
        <Route path='/br' element={<Brand/>} />
        <Route path='/sr' element={<Sidebar/>} />
        <Route path='/sc' element={<Scrollup/>} />
        <Route path='/fo' element={<Footer/>} />
        <Route path='categorie' element={<Categories/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App