import React, { Component } from 'react';
import './App.css';
import Form from './Components/InputForm/Form';
import TodoList from './Components/TodoList/TodoList';


class App extends Component {

  // shouldComponentUpdate()

  state= {
    inputText: "",
    status: "all",
    todoList: [],
    filteredList: []
    }
  

  inputTextHandler = (e) =>{
    const value = e.target.value;
    this.setState({inputText: value});
  };

  submitHandler = (e) => {
    e.preventDefault();
    const newList = [
        ...this.state.todoList
    ]
    newList.push(
        {text: this.state.inputText,
        completionState: false,
        id: Math.random(),
        status: 'all' }
        );
    this.setState({inputText: "", todoList: newList});
 
  }

  setTodosByDelete = (deletedItem) => {
    const valueInTodoList = this.state.todoList.filter(el => el.id !== deletedItem.id)
    const valueInFilteredList = this.state.filteredList.filter(el => el.id !== deletedItem.id)
    this.setState({todoList: valueInTodoList, filteredList: valueInFilteredList})
  };

  setTodosByComplete = (newTodoData) => {
    this.setState({filteredList: newTodoData, todoList: newTodoData});
    // console.log('App me set todos me set state se update] =', this.state.todoList)
  };

  setStatus = (newStatus) => {
    this.setState({ status: newStatus}, () => {
        // console.log('[Status Update], status=',
        // this.state.status, ', newStatus=', newStatus)
       } 
    );
    this.filterHandler(newStatus);
    // console.log('external:', this.state.filteredList);
    
  }

  filterHandler = async (newStatus) => {
    await this.setState( { filteredList: []});
    if( newStatus === 'completed') {
      // console.log('[Filter Handler Completed]')
      const updatingFilteredList = [...this.state.filteredList];
      for (let i in this.state.todoList) {
        if(this.state.todoList[i].completionState){
          updatingFilteredList.push(this.state.todoList[i])
        }
      }
      this.setState({filteredList: updatingFilteredList},
        //  () => 
          // {console.log('[Filtered List Finally, Completed]:', this.state.filteredList);}
          )
    }

    else if( newStatus === 'uncompleted') {
      // console.log('[Filter Handler Uncompleted]')
      const updatingFilteredList = [...this.state.filteredList]
      for (let i in this.state.todoList) {
        if(!this.state.todoList[i].completionState) {
          updatingFilteredList.push(this.state.todoList[i])
        }  
        this.setState({filteredList: updatingFilteredList}, 
          // () => console
          // .log('[Final Filtered List, Uncompleted] =', this.state.filteredList)
          )
      }
    }

    else {
      const updatingFilteredList = [...this.state.filteredList]
      for (let i in this.state.todoList) {
        updatingFilteredList.push(this.state.todoList[i])
      }
      this.setState({filteredList: updatingFilteredList},
        //  () => console
      // .log('[Final Filtered List, All] =', this.state.filteredList)
      )
    }
    
    // console.log(this.state.filteredList)
  }

  render () {
    return (
      <div className="App">
      <header>
      <h1>My To Do List</h1>
      </header>
      <Form 
       setStatus={this.setStatus}
       value={this.state.inputText}  
       btnClick={this.submitHandler}
       change={this.inputTextHandler} />
      <TodoList 
        status={this.state.status} 
        setTodosByDelete={this.setTodosByDelete} 
        setTodosByComplete={this.setTodosByComplete} 
        filteredList={this.state.filteredList} 
        todoList={ this.state.status === 'all' ? this.state.todoList: this.state.filteredList}
          
        > </TodoList>
      {/* {console.log('App me status', this.state.status)} */}
     
    </div>
    )
  };
 
};


export default App;
