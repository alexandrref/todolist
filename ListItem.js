import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
  constructor(props){
    super(props);

    this.state = {isEdit : false,
                  title : this.props.title,
                  desc : this.props.text
                };

    this.handlerDelTask = this.handlerDelTask.bind(this);

    this.handlerEditTask = this.handlerEditTask.bind(this);

    this.editTask = this.editTask.bind(this);
  }

handlerDelTask(e){
  e.preventDefault();
  let del = this.props.id;
  console.log(del);
  this.props.onChange(del);
}

handlerEditTask(e){
  e.preventDefault();
  this.setState({
    isEdit: !this.state.isEdit
  });

}

editTask(e){
  e.preventDefault();

  let edit = this.props.id;

  let t = this.titleTask.value;
  let d = this.DescTask.value;

  console.log(t,d);

      this.setState({
      title: t,
      desc: d
    });

    console.log(this);

  this.props.onChange(-1);
  
}

  render() {
    let form;
    let title = this.state.title;
    let desc = this.state.desc;
    if(this.state.isEdit){
      form =  <div className="editTask_item">
                <form>
                  <input className="editTask_title" type="text" placeholder="Task's title" 
                          ref= {(input) => this.titleTask = input}/>
                  <textarea className="editTask_desc" rows="" cols="" name="text" placeholder="Task's desc"
                             ref= {(textarea) => this.DescTask = textarea}/>
                    <input className="changeList_btn" type="submit" value="change" onClick={this.editTask}/>
                </form>
              </div>          
    }

    return(
      <div className="ListItem">
      <h3 className="LostItem_title">{this.props.title}</h3>
          <p className="ListItem_text">{this.props.text}</p>
          <span className="ListItem_date">{this.props.date}</span>
          
          {
           form
          }

          <input className="delList_btn" type="submit" value="delete" name={this.props.id} 
                      onClick={this.handlerDelTask} />
          
          <input className="editList_btn" type="submit" value="edit" name={this.props.id} 
                  onClick={this.handlerEditTask}/>
      
      </div>);

  }
}

export default ListItem;
