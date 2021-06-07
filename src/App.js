import React, {Component, Fragment} from "react";

import TodoItem from "./component/TodoItem/TodoItem";
import AddItem from "./component/AddItem/AddItem";

class App extends Component{
  state = {
    items:  [
    ]
  } 
  deleteItem = (id)=>{
    let itemDeletion = this.state.items.filter(itemDelete=>{
      return itemDelete.id !== id
    })
    this.setState({
      items: itemDeletion
    })
  }

  addItems = (item)=>{
    item.id = Math.random();
    let newstItems = this.state.items;
    newstItems.push(item);
    this.setState({
      items:newstItems
    })
  }

  render(){
    return(
      <Fragment>
          <h2>TodoApp</h2>
          <TodoItem showItem={this.state.items} deleteItems={this.deleteItem}/>
          <AddItem addItem={this.addItems}/>
      </Fragment>
    );
  }
}

export default App