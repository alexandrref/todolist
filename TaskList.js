import React, { Component } from 'react';
import ListItem from './ListItem';
import './TaskList.css';

class TaskList extends Component {

  constructor(props){
    super(props);

    this.state = {displayList: this.props.tasks};
    
    this.addTask = this.addTask.bind(this);
    
    this.handlerDelList = this.handlerDelList.bind(this);

    this.handlerOfTasks = this.handlerOfTasks.bind(this);
  }

  addTask(event){
    event.preventDefault();
    let title = this.titleTask.value;
    if(title === ""){
      title = "Task's title";
    }

    let desc = this.DescTask.value;

      if(desc === ""){
      desc = "Task's desc";
    }

    let date = new Date;

    let dateStr = date.toLocaleString();

    let dateId = date.getTime();

    let arr = this.state.displayList.slice();
    arr.push({
      id: dateId,
      title: title,
      text: desc,
      date: dateStr
    });

    this.setState({
      displayList: arr
    });

    this.titleTask.value = "";
    this.DescTask.value = "";
     
  }

  saveTaskList(arr){
    let saveObj = JSON.stringify(arr);
    localStorage.setItem("TaskList", saveObj);
  }

  handlerDelList(e){
    e.preventDefault();
    let del = this.props.id;

    this.props.onChange(del);
  }

  handlerOfTasks(i){
      let arr = this.state.displayList.slice();
 
    let del;

    if(i >= 0){
      arr.forEach(function(el, ind, array){
       if(el.id === i)
        del = ind;
      });

      arr.splice(del,1);
    }
   
    console.log(arr);

    this.setState({
      displayList: arr
    });
  }

  render() {
    let self = this;
    return (
      <div className="wrapper">
       <div className="TaskList"> 
        <div className="TaskList_title">{this.props.title}</div>
          {
            this.state.displayList.map(function(el){
              return <ListItem key={el.id} id ={el.id} title={el.title} text={el.text} date={el.date}
                                onChange={self.handlerOfTasks}/>;
            })
          }
          <div className="addTaskItem">
            <form method="post" action="/">
               <input type="text" placeholder="Task's title" ref= {(input) => this.titleTask = input}/>
               <textarea className="addTask_desc" rows="" cols="" name="text" placeholder="Task's desc"
                ref= {(textarea) => this.DescTask = textarea}/>
              <input className="addTask_btn" type="submit" value="add" onClick={this.addTask}/>
             </form>
          </div>        
              <input className="delTask_btn" type="submit" value="delete" name={this.props.id} 
                      onClick={this.handlerDelList} />
        </div>
        
      </div>
    );
  }


}

export default TaskList;
