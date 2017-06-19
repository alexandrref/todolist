import React, { Component } from 'react';
import Notes from './Notes.js';
import './App.css';

  let list = [
    {
            id: 1,
            title: "Hello!",
            tasksList:
          [

              { id: 2,
                title: "ipsum",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quas aliquid ipsa porro facilis assumenda rerum corrupti repellendus dolorem? Ullam mollitia, dolorum. Sapiente veritatis minima, quibusdam quos. Obcaecati quibusdam, vitae.",
                date: new Date().toLocaleString()
              },

              { id: 3,
                title: "ipsumsassa",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quas aliquid ipsa porro facilis assumenda rerum corrupti repellendus dolorem? Ullam mollitia, dolorum. Sapiente veritatis minima, quibusdam quos. Obcaecati quibusdam, vitae.",
                date: new Date().toLocaleString()
              },

              { id: 4,
                title: "ipsumadssd",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quas aliquid ipsa porro facilis assumenda rerum corrupti repellendus dolorem? Ullam mollitia, dolorum. Sapiente veritatis minima, quibusdam quos. Obcaecati quibusdam, vitae.",
                date: new Date().toLocaleString()
              }
            ]

    },

        {
            id: 5,
            title: "Hello World!",
            tasksList:
          [

              { id: 6,
                title: "ipsum",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quas aliquid ipsa porro facilis assumenda rerum corrupti repellendus dolorem? Ullam mollitia, dolorum. Sapiente veritatis minima, quibusdam quos. Obcaecati quibusdam, vitae.",
                date: new Date().toLocaleString()
              },

              { id: 7,
                title: "ipsumsassa",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quas aliquid ipsa porro facilis assumenda rerum corrupti repellendus dolorem? Ullam mollitia, dolorum. Sapiente veritatis minima, quibusdam quos. Obcaecati quibusdam, vitae.",
                date: new Date().toLocaleString()
              },

              { id: 8,
                title: "ipsumadssd",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quas aliquid ipsa porro facilis assumenda rerum corrupti repellendus dolorem? Ullam mollitia, dolorum. Sapiente veritatis minima, quibusdam quos. Obcaecati quibusdam, vitae.",
                date: new Date().toLocaleString()
              }
            ]

    }

  ];

  // if(localStorage.getItem("TaskList"))
  //    list = JSON.parse(localStorage.getItem("TaskList"));
  // else
  //    list = [];

class App extends Component {
  render() {
    return (
      <div>
        <Notes notes={list}/>
      </div>  
    );
  }
}

export default App;
