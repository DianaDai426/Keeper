import React, {useState} from "react"
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


import axios from 'axios'

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);
    const [item, setItem] = useState({
        title : "",
        content : ""
    });

    function handleChange(event){
        const {value, name} = event.target;
        setItem(prevItem=>{
            if(name === "title"){
                return{
                    title : value,
                    content : prevItem.content
                };
            }else{
                return{
                    title : prevItem.title,
                    content : value
                };
            }
        });
    }

    function expand(){
        setExpanded(true);
    }

    function handleSubmit(event){
        event.preventDefault();
        if(item.title !==""){
            axios.post("http://127.0.0.1:3000/note/add", {
                title : item.title,
                content: item.content
                })
            .then(res =>{
                //console.log(res);
                //console.log(res.data);
            })
            setItem( prevItem =>{
                return{
                    title : "",
                    content : ""
                };
            });
        }
        props.onAdd(item);
    }

  return (
    <div>
      <form className="create-note">
        <input hidden = {!isExpanded} onChange = {handleChange} name="title" placeholder="Title" value={item.title} />
        <textarea onClick = {expand} onChange = {handleChange} name="content" placeholder="Take a note..." 
        rows={isExpanded? "3":"1"} value={item.content}/>
        <Zoom in={isExpanded}>
        <Fab type="button" onClick={handleSubmit}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
