import { useState } from 'react';
import './App.css';
import { Footer, Loading } from './components';
import { Home, Podcast } from './Pages';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React from 'react'
import { ThemeContext, themes } from './lib/theme'

function App() {
  const [loading, setLoading] = useState(false)
  const [light, setLight] = useState(true)

  if(!loading) {
    setTimeout(() => {
      setLoading(true)
    },5000)
  }
  return (
    <div className="App relative">
        <ThemeContext.Provider value={!light ? themes.dark:themes.light}>
          <Router>
            <Switch>
              <Route path="/:id">
                <Podcast light={light}/>
              </Route>
              <Route path="/">
                  {loading ? <Home/>: <Loading/>}
              </Route>
            </Switch>
          </Router> 
          <Footer click={()=>{ setLight(!light) }}/>
        </ThemeContext.Provider>
      </div>
  );
}

export default App;