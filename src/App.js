import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header.component';
import ViewAll from './components/all.component';
import ViewActive from './components/active.component';
import ViewComplete from './components/complete.component';
import Footer from './components/footer.component';

function App() {
  const [todos, setTodos] = useState(() =>{
    const savedTodos = localStorage.getItem("todos");
    if(savedTodos){
      return JSON.parse(savedTodos);
    } else{
      return [];
    }
  });

  const [todo, setTodo] = useState("");
  // const [progress, setProgress] = useState(false);
  // const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // function handleTodoChange(value){
  //   setTodo(value);
  // }

  function handleProgressChange(todo){
    // setProgress(!progress);
    // gettingTodo(todo);
  }
  // function gettingTodo(todo){
  //   setCurrentTodo({...todo});
  //   completingTodo();

  // }
  function handleSubmit(){
    // e.preventDefault();
    if(todo !== ""){
      setTodos([
        ...todos, {
          id: todos.length + 1,
          task: todo,
          progress: false,
        },
      ]);
    }
    setTodo("");
    // setProgress(false);
  }

  function handleDelete(id){
    const removeItem = todos.filter((todo) =>{
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  // function to edit a todo item
  function handleUpdateTodo(id) {
    // here we are mapping over the todos array - the idea is check if the todo.id matches the id we pass into the function
    // if the id's match, use the second parameter to pass in the updated todo object
    // otherwise just use old todo
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? {...todo, progress: !todo.progress} : todo;
    });
    // set editing to false because this function will be used inside a onSubmit function - which means the data was submited and we are no longer editing
    // setIsEditing(false);
    // update the todos state with the updated todo
    setTodos(updatedItem);
  }

  function deleteAll(){
    setTodos(todos.filter(({progress}) => progress === false));
  }

  return (
    <>
    <Header/>
    <div className="container">
      <Switch>
        <Route exact path="/" >
          <ViewAll
            todochange={setTodo}
            progresschange={handleProgressChange}
            submit={handleSubmit}
            delete={handleDelete}
            // progress={progress}
            todos={todos}
            updateTodo={handleUpdateTodo}
          />
        </Route>
        <Route exact path="/active" >
          <ViewActive
            todochange={setTodo}
            progresschange={handleProgressChange}
            submit={handleSubmit}
            delete={handleDelete}
            // progress={progress}
            todos={todos}
            updateTodo={handleUpdateTodo}
          />
        </Route>
        <Route exact path="/completed" >
          <ViewComplete
            todochange={setTodo}
            progresschange={handleProgressChange}
            submit={handleSubmit}
            delete={handleDelete}
            deleteall={deleteAll}
            todos={todos}
            updateTodo={handleUpdateTodo}
          />
        </Route>
      </Switch>
    </div>
    <Footer/>
    </>
  );
}

export default App;
