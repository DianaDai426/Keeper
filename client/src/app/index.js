import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import {CreateArea, Footer, Header, Note} from "../components"
import { render } from 'react-dom';
//import NotesArea from '../components/NotesArea';
 

class App extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          error: null,
          isLoaded : false,
          allNotes : []
      }
  }

  componentDidMount(){
      fetch("http://127.0.0.1:3000/note/get")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            allNotes: result.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  addNote = (newNote) => {
    this.setState(prevState =>({
      error: prevState.error,
      isLoaded: prevState.isLoaded,
      allNotes: [...prevState.allNotes, newNote]
    }));

    // fetch("http://127.0.0.1:3000/note/get")
    // .then(res => res.json())
    // .then(
    //   (result) => {
    //     this.setState({
    //       isLoaded: true,
    //       allNotes: result.data
    //     })})
}

  deleteNote = (id) =>{
    console.log(id);
    this.setState(prevState =>({
      error: prevState.error,
      isLoaded: prevState.isLoaded,
      allNotes: prevState.allNotes.filter((note)=>{
        return note.id !==id;
      })}));
  }


  render(){
      const { error, isLoaded, allNotes } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <Router>
          <div>
            <Header />
            <CreateArea onAdd = {this.addNote}/>
            <ul>
              {allNotes.map((oneNote, index) => (
                  <Note 
                  id = {oneNote._id}
                  key = {index}
                  title = {oneNote.title}
                  content = {oneNote.content}
                  onDelete = {this.deleteNote}
                />
              ))}
            </ul>
            <Footer />
          </div>
        </Router>


        );
      }
    }
}   
export default App;
