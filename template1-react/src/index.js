import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Slider />
    <Categories />
    <Course />
    <Help />
    <ChooseUs />
    <Team />
    <Instractor />
    <Gallery />
    <Subscribe />
    <Registration />
    <Testimonial />
    <Blog />
    <Brand />
    <Sidebar />
    <Footer />
    <Scrollup/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
