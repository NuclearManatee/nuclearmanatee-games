import '../styles/App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Games from './Games'
import Footer from './Footer'
import NavBar from './NavBar'

export default function App() {
  
  return (<>
    <BrowserRouter>
      <NavBar />
      <div className='page-container'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/games'>
            <Games />
          </Route>
        </Switch>
      </div>
      <div className='footer-container'>
          <Footer />
      </div>
    </BrowserRouter>
  </>);
}