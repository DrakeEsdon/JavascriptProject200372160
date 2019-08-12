import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import Axios from "axios";

function New () {
    const [inputs, setInputs] = useState({});
    const [redirect, setRedirect] = useState(false);
    
    function handleInputChange (event) {
        event.persist();
        const {name, value} = event.target;
        
        
        setInputs(inputs => {
            console.log(inputs);
            return{
                ...inputs, 
                [name]: value
            };
        });
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        
        Axios.post("/api/tasks", {
            task: {
                title: inputs.title,
                content: inputs.content,
                status: inputs.status
            }
        })
            .then(resp => setRedirect(true))
            .catch(err => console.log(err));
    }
    
    if (redirect){
        return <redirect to="/tasks" />;
    }
    
    return(
        <div className="container">
            <header>
                <h1>New Task</h1>
            </header>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Task Title</label>
                        <input className="form-control" name="title" required onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Task Content</label>
                        <input className="form-control" name="content" required onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                        <select className="form-control" name="status" required onChange={handleInputChange}>
                            <option value="completed">Completed</option>
                            <option value="started">Started</option>
                            <option value="toBeCompleted">To Be Completed</option>
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

export default New;