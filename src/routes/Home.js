import React from "react";
import axios from "axios";
import "./Home.css";
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <Link className="link" to='/game'>
                <h1>💜</h1>
                </Link>
            </div>
        );
    }
}

export default Home;