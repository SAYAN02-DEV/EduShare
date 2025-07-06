import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  NavigationBar from './components/NavigationBar.jsx';
import  HeroSection from './components/HeroSection.jsx'
import Footer from './components/footer.jsx'
import Login from './components/login.jsx'
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import Register from './components/Register.jsx';
import SearchCourses from './components/SearchCourses.jsx';

import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Layout/>}>
            <Route index element={<HeroSection/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='searchcourses' element={<SearchCourses/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Layout(){
  return(
    <div>
      <NavigationBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
export default App
