    import React from "react";
    import { Link } from "react-router-dom";

    function MainNav () {
        return(
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light"><a className="navbar-brand" href="/">The ToDo List</a><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div
                className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/tasks">View Tasks</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/tasks/new">New Task</Link></li>
                    </ul>
                </div>
            </nav>
        )

    }

    export default MainNav;