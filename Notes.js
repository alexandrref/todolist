import React, { Component } from 'react';
import TaskList from './TaskList.js';
import './Notes.css';

class Notes extends Component {
  constructor(props){
    super(props);
    this.state = {displayNotes: this.props.notes};
    this.addNote = this.addNote.bind(this);
    this.handlerOfNote = this.handlerOfNote.bind(this);
  }

  addNote(e){
    e.preventDefault();
    let title = this.nameNote.value;
    let id = new Date().getTime();
    if(title === "")
      title = "List1";
    let tasksList = [];
    
    let obj = {
      id: id,
      title: title,
      tasksList: tasksList
    };

    let arr = this.state.displayNotes.slice();
    arr.push(obj);
    this.setState({
      displayNotes: arr
    });

    this.saneNotes(this.state.displayNotes);

    this.nameNote.value = "";

  }

  handlerOfNote(i){


    let arr = this.state.displayNotes.slice();
    
    let del;

    arr.forEach(function(el, ind, array){
      if(el.id === i)
        del = ind;
    });

       arr.splice(del,1);
   

    this.setState({
      displayNotes: arr
    });

  }

    saneNotes(arr){
    let saveObj = JSON.stringify(arr);
    localStorage.setItem("NotesList", saveObj);
  }

  render() {
    var self = this;
    return (
      <div className="notesWrapper">
       {
        this.state.displayNotes.map(function(el){
          //console.log(el);
          return <TaskList key={el.id} id ={el.id} title={el.title} tasks={el.tasksList} 
                           onChange={self.handlerOfNote}/>;
        })
       }
        
        <div>
               <input type="text" placeholder="List1"ref= {(input) => this.nameNote = input}/>
              <input className="addNote" type="submit" value="+" onClick={this.addNote}/>
              
        </div>

      </div>  
    );
  }
}

export default Notes;
