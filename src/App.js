import React, { Component } from 'react';
import './App.css';
import Form from './Components/InputForm/Form';
import TodoList from './Components/TodoList/TodoList';


class App extends Component {

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

  // filterHandler = () => {
  //   console.log('[filterHandler Working]', this.state.filteredList)
  //   this.setState({filteredList: null})
  //   for (let i in this.state.todoList) {
  //     // console.log(this.state.todoList[i])
  //     switch (this.state.todoList[i].completionState) {
  
  //       case true:
  //         if (this.state.todoList[i].completionState) {
  //           this.state.filteredList.push(this.state.todoList[i]);
  //         }
  //       break;
  
  //       case false:
  //         // this.setState({filteredList: null})
  
  //         // for (const element in this.state.todoList) {
  //           if (!this.state.todoList[i].completionState) {
  //             this.state.filteredList.push(this.state.todoList[i])
  //           }
  //         // }
  //       break;
  
  //       default: 
  //       // this.setState({filteredList: null})
  //       // for (const i in this.state.todoList) {
  //         this.state.filteredList.push(this.state.todoList[i])
  //       // }
  
        
          
  //     }

  //    }
    
  //   {console.log(this.state.filteredList)}
  // }

  submitHandler = (e) => {
    e.preventDefault();
    const newList = [
        ...this.state.todoList
    ]
    newList.push(
        {text: this.state.inputText,
        completionState: false,
        status: 'all' }
        );
    this.setState({inputText: "", todoList: newList});
 
  }

  setTodos = (newTodoData) => {
    this.setState({ todoList: newTodoData});
    console.log('App me set todos me set state se update] =', this.state.todoList)
  }

  setStatus = (newStatus) => {
    this.setState({ status: newStatus}, () => {
        // console.log('[Set Status from App.js], status=',
        // this.state.status, ', newStatus=', newStatus)
       } 
    );
    this.filterHandler();
    console.log('external:', this.state.filteredList);
    
  }

  filterHandler = () => {
    this.setState( { filteredList: []});
    for (let i in this.state.todoList) {
      // console.log(this.state.status);
        if( this.state.status = 'completed') {
          console.log('chal rhaaaa haiiiiiiiiii', this.state.status)
          if(this.state.todoList[i].completionState){
            this.state.filteredList.push(this.state.todoList[i])
          }
        }
        else if( this.state.status = 'uncompleted') {
          if(!this.state.todoList[i].completionState) {
            this.state.filteredList.push(this.state.todoList[i])
           }  
        }
        else {
          this.state.filteredList.push(this.state.todoList[i])
        }
        // console.log( this.state.todoList[i])
    }
    
    console.log(this.state.filteredList)
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
      <TodoList setTodos={this.setTodos}  todos={this.state.todoList}> </TodoList>
      {/* {console.log('App me status', this.state.status)} */}
     
    </div>
    )
  };
 
};


export default App;
