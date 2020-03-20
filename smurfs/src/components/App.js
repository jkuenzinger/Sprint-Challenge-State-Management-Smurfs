import React, {useState, useEffect} from "react";
import axios from 'axios';
import smurfContext from '../contexts/smurfContext';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';
import "./App.css";




export default function App () {
  const [smurfState, setSmurfState] = useState([]);
   
  function getSmurfs(){
      axios.get('http://localhost:3333/smurfs')
      .then(res => setSmurfState(res.data))
      .catch(error => console.log('error recieving data', error))
    }
    
    function postSmurfs(smurf) {
      axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => setSmurfState(res.data))
      .catch(error => console.log('error recieving data', error))
    }
    // function updateSmurfs(smurf){
    //   axios
    //     .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    //     .then(res => setSmurfState(res.data))
    //     .catch(error => console.log('error putting smurf ', error))
    // }

    useEffect(() => {
      getSmurfs();
    }, []);
    
    return (
      <div className="App">
        <h1 className='headerTag'>CIA Smurf Watch List!</h1>
        <SmurfForm post={postSmurfs}/>
          <smurfContext.Provider>
          <SmurfList smurfs={smurfState}/>
        </smurfContext.Provider>
        
      </div>
    );
  }


