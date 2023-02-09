import React, { useState } from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";


export default function TodoCreate(props){
    const [title,setTitle] = useState('');
    const {onCreateTodo} = props;
    
    const createTodo = () =>{
        const todo = {
            title,
            status: 'Pending'
        }
        onCreateTodo(todo);
        setTitle('');
    
    }
    const handleEnterSubmission = (e) => {
        if (e.key === 'Enter') {
            createTodo();
        }
    }
   
    return(
        <div>
            <InputGroup className="mb-3">
            <FormControl
                placeholder="Write your todo..."
                aria-label="Write your todo..."
                aria-describedby="basic-addon2"
                value={title}
                onChange={e => setTitle(e.target.value)}
                onKeyDown={e => handleEnterSubmission(e)}
            />
            <Button variant="info" onClick={(e) => createTodo()}>
                <FontAwesomeIcon icon={faPlusCircle} /> New
            </Button>
            
        </InputGroup>
        </div>
    )
}