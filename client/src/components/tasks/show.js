import React, {useState, useEffect} from "react";
import Axios from "axios";

function Show(props){
    const [task, setTasks] = useState([]);
    
    useEffect(() => {
        Axios.get('/api/blogs/${props.match.params.id}')
        .then(result => setTasks(result.Task))
        .catch(err => console.error(err));
    }, [props ]);
    
    return(
        <div className="container">
            <header>
                <h1>{task.title}</h1>
            </header>
            <div>
                {task.content}
            </div>
        </div>
    );
}

export default Show;