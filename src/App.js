import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import ListMenu from './components/ListMenu';
import Square from './components/Square'

class App extends Component {
  constructor(){
    super();
    this.todoItem = [
      'Để ra khỏi đường, anh thường phải đi một lần đầu tiên.',
      ' Khám phá sự linh hoạt của người himalaya hôm này',
      ' Hoàng Gia Enfield Himalaya cũng như ở nhà trên đường băng như vậy.'
    ];
  }
  render() {
    return (
      <div className="App">
        <h2>Hello ReactJS</h2>
        {
          this.todoItem.map((item, index) => <TodoItem key={index} title={item} />)
        }
        <ListMenu name = "Minh Trí" />
        <Square value='Click Me!!!'/>
      </div>
    );
  }
}

export default App;
