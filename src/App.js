import React ,{Component}from 'react'
import './App.css'
import Contacts from './Components/ContactList'
class App extends Component {
  render(){
    return(
      <div className='container'>
        <Contacts/>
      </div>
    )}
}

export default App;
