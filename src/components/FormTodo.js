import React,{ useState } from 'react'
import { Button, Form } from 'react-bootstrap';



export default function FormTodo({ addTodo ,props }) {
    const [value, setValue] = React.useState("");
    const [mode, setMode] = useState('Dark');

  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <Form onSubmit={handleSubmit}> 
      <Form.Group >
        {/* <Form.Label className={`text-${props.mode==='light'?'dark':'light'}`}><b>Add Todo</b></Form.Label> */}
        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
    );
  }