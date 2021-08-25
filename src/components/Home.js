import '../styles/Home.css';
import Logo from './Logo';
import React,{useState} from 'react'
import settings from '../data/settings.json'

export default function App() {
  
  const {randomHomeText} = settings
  console.log(randomHomeText)

  //set a random subtitle from the setting data
  const [text, setText] = useState(randomHomeText[Math.floor(Math.random()*(randomHomeText.length))]);

  function setRandomText(){
    setText(randomHomeText[Math.floor(Math.random()*(randomHomeText.length))])
  }
  
  return (<>
    <div className="container">
        <h1>a Nuclear Manatee</h1>
        <p>
          {text}
        </p>
        <Logo setRandomText={setRandomText} />
    </div>
  </>);
}