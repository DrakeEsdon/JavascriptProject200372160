import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function Delete(props) {
    useEffect(() => {
        Axios.post('/api/tasks/destroy', { id: props.match.params.id });
    }, [props]);

    return <Redirect to="/tasks" />;
}

export default Delete;