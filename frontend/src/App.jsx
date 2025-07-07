import { useState } from 'react'
import  NavigationBar from './components/NavigationBar.jsx';
import  HeroSection from './components/HeroSection.jsx'
import Footer from './components/footer.jsx'
import Login from './components/login.jsx'
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import Register from './components/Register.jsx';
import SearchCourses from './components/SearchCourses.jsx';
import CourseProfile from './components/CourseProfile.jsx';
import UserProfile from './components/UserProfile.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #131F39 19.1%, rgba(11, 13, 20, 0.07) 100%)' }}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path = '/' element={<Layout/>}>
              <Route index element={<HeroSection/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='register' element={<Register/>}/>
              <Route path='searchcourses' element={<SearchCourses/>}/>
              <Route path='courseprofile' element={<CourseProfile/>}/>
              <Route path='userprofile' element={<UserProfile/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

function Layout(){
  return(
    <div className="min-h-screen flex flex-col" style={{ paddingTop: 64 }}>
      <NavigationBar/>
      <main className="flex-1">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
export default App
