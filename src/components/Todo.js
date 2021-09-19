import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Form } from 'react-bootstrap';


export default function Todo({ todo, index, markTodo, removeTodo }) {
  
    return (
      <div
        className="todo"
      >
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
        <div>
          <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
          <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
        </div>
      </div>
    );
  }