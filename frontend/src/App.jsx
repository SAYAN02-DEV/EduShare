import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  NavigationBar from './components/NavigationBar.jsx';
import  HeroSection from './components/HeroSection.jsx'
import Footer from './components/footer.jsx'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavigationBar/>
      <HeroSection/>
      <Footer/>
    </div>
  )
}


export default App
