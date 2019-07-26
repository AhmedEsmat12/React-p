import React,{Component} from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import Index from './Components/Index/index'
import Navbar from './Components/Navbar/Navbar'
import Contact from './Components/Contact/Contact'
class App extends Component{
  render()
  {
  return (
          <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={Index}/>
          <Route path="/contact" component={Contact}/>
            </BrowserRouter>

  );
}
}

export default App;