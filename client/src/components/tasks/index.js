import React, {useEffect, useState} from "react";
import Axios from "axios";
import {Link} from "react-router-dom";

function Index () {
    const [tasks,setTasks] = useState([]);
    
    useEffect(() => {
        Axios.get("/api/tasks")
        .then(result => setTasks(result.data))
        .catch(err => console.error(err));
    }, []);
    
    return (
        <div className="container">
            <header>
                <h1>
                    All Tasks
                </h1>
            </header>
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Task Description</th>
                            <th>Completion Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(task => (
                            <tr key={task._id}>
                                <td>
                                    <Link to={`/tasks/${task._id}`}>{task.title}</Link>
                                </td>
                                <td>
                                    {task.status}
                                </td>
                                <td><Link to={`/tasks/${task._id}/edit`}>edit</Link>
                                |
                                <Link to={`/tasks/${task._id}/delete`}>Delete</Link></td>
                            </tr>
                        ))}
                    </tbody>    
                </table>
            </div>
        </div>
    
    );
}

export default Index;