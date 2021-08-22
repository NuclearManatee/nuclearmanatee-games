import './styles/Home.css';
import Logo from './Logo';
import React,{useState} from 'react'

export default function App() {
  
  const defaultText = 'A orbital sailor in a liminal sea.'

  const [text, setText] = useState(defaultText)

  function setDefaultText(){
    setText(defaultText)
  }
  
  return (<>
    <div className="container">
      <header className="header">
        <h1>a Nuclear Manatee</h1>
        <Logo setText={setText} setDefaultText={setDefaultText} />
        <p className='displayText'>
          {text}
        </p>
      </header>
    </div>
  </>);
}