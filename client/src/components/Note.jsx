import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';

const Note = props => {

    function handleDelete(event){
        props.onDelete(props.id);
        console.log("delete me");
        axios.delete("http://127.0.0.1:3000/note/delete/"+ props.id);
    }
    return(
        
    <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button 
        onClick = {handleDelete}
            style={{backgroundColor:"white"}}
            ><DeleteIcon/></button>
    </div>
    );

}

export default Note;