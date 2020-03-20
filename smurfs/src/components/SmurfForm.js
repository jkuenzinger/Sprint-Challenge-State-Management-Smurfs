import React, {useState} from 'react';


export default function (smurfletons) {
    const intialState = {
        name:'',
        age:'',
        height:''
    }

    const [newSmurfs, setnewSmurfs] = useState(intialState);

    function handleChanges(event) {
        setnewSmurfs({
            ...newSmurfs,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        smurfletons.post(newSmurfs);
        setnewSmurfs(intialState);
    }

    return(
        <form>
            <input name='name' placeholder='name' onChange={handleChanges} value={newSmurfs.name}/>
            <input name='height' placeholder='height' onChange={handleChanges} value={newSmurfs.height}/>
            <input name='age'placeholder='age' onChange={handleChanges} value={newSmurfs.age}/>
            <button type ='submit' onClick={handleSubmit}>Add a Smurf Here</button>
        </form>
    )
}