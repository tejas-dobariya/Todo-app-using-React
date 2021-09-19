import React from "react";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormTodo from './FormTodo'
import Todo from './Todo'

export default function Application(props) {


    const [todos, setTodos] = React.useState([
        {
          text: "This is a sample todo",
          isDone: false
        }
      ]);
    
      const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
      };
    
      const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);
      };
    
      const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };

    return (
    <>
    <div className={`app bg-${props.mode==='dark'?'dark':'light'}`}>
     <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input type="checkbox" onClick={props.toggleMode} className="form-check-input" id="flexSwitchDefault"/>
        <label className="form-check-label " htmlFor="flexSwitchDefault">Enable DarkMode</label>
      </div>
      <div className="container">
        <h1 className={`text-center mb-4 text-${props.mode==='light'?'dark':'light'}`}>Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div className={`text-${props.mode==='light'?'dark':'dark'}`}>
        {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div> 
    </div>
    </>
    )
}

