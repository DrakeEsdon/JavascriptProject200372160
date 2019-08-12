import React, {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";
import Axios from "axios";

function Edit(props){
    const [inputs, setInputs] = useState({});
    const [redirect, setRedirect] = useState(false);
    
    useEffect(() => {
        Axios.get('/api/blogs/$(props.match.params.id)')
        .then(result => setInputs(result.data))
        .catch(err => console.error(err));
    }, [props]);
    
    function handleSubmit(event) {
        event.preventDefault();
        
        Axios.post("/api/blogs/update", {
            id: props.match.params.id,
            task: inputs
        })
            .then(resp => setRedirect(true))
            .catch(err => console.error(err));    
    }
    
    function handleInputChange(event) {
        event.persist();
        
        const {name, value} = event.target;
        
        setInputs(inputs => {
           inputs[name] = value;
            return inputs;
        });
    }
    
    if(redirect) return <Redirect to="/tasks" />
    
    return (
        <div className="container">
            <header>
                <h1>Edit Task</h1>
            </header>
            <div>
                <form action="/tasks" method="POST" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            className="form-control"
                            name="title"
                            required="required"
                            onChange={handleInputChange}
                            defaultValue={inputs.title}
                        />
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <input
                            className="form-control"
                            name="content"
                            onChange={handleInputChange}
                            defaultValue={inputs.content}
                        />
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                            <select className="form-control" name="status" required="required" onChange=   {handleInputChange} defaultValue={inputs.status}>
                                <option value="completed">completed</option>
                                <option value="toBeCompleted">To Be Completed</option>
                                <option value="started">Started</option>
                            </select>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-dark" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Edit;