import '../styles/Home.css';
import Logo from './Logo';
import React,{useEffect, useState} from 'react'
import settings from '../data/settings.json'

export default function App() {
  
  const {randomHomeText} = settings

  const [text, setText] = useState('')
  const defText = randomHomeText[Math.floor(Math.random() * 4)]
  console.log(defText)

  console.log(settings)

  useEffect( () => {
    setText(defText)
  },[defText]);

  function setDefaultText(){
    setText(defText)
  }
  
  return (<>
    <div className="container">
      <header className="header">
        <h1>a Nuclear Manatee</h1>
        <p className='displayText'>
          {text}
        </p>
        <Logo setText={setText} setDefaultText={setDefaultText} />
      </header>
    </div>
  </>);
}