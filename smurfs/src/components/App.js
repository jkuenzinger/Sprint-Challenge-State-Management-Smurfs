import React, {useState, useEffect} from "react";
import axios from 'axios';
import smurfContexts from '../contexts/smurfContext';
import smurfList from './SmurfList';
import smurfForm from "./SmurfForm";
import smurf from './smurf';
import "./App.css";




export default function App () {
  const [smurfState, setSmurfState] = useState([]);
    function getSmurfs(){
      axios.get('http:// localhost:3333/smurfs', smurf)
      .then(res => setSmurfState(res.data))
      .catch(err => console.log('error recieving data', err))
    }
    
    function postSmurfs(smurf) {
      axios
      .post('http:// localhost:3333/smurfs', smurf)
      .then(res => setSmurfState(res.data))
      .catch(err => console.log('error recieving data', err))
    }
    function updateSmurfs(smurf){
      axios
        .put('http:// localhost:3333/smurfs', smurf)
        .then(res => setSmurftState(res.data))
        .catch(err => console.log('error putting smurf '), err)
    }
    return (
      <div className="App">
    
      </div>
    );
  }


export default App;
