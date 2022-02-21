import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {

  const [color, setColor] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <div className = 'App'>
      <Header 
       color = {color}
       hexValue = {hexValue}
       isDarkText = {isDarkText}
      />
      <Footer 
        color = {color}
        setColor = {setColor}
        setHexValue = {setHexValue}
        isDarkText = {isDarkText}
        setIsDarkText = {setIsDarkText}
      />
    </div>
  );
}

export default App;
