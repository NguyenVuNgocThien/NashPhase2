//import axios from 'axios';
//import './App.css';

//axios.interceptors.request.use(config => {
//    return config;
//});
//axios.interceptors.response.use(response => {
//    return response;
//}, error => {
//    if (401 === error.response.status) {
//        window.location.href = "/Identity/Account/Login?returnUrl=" + window.location.pathname;
//    } else {
//        return Promise.reject(error);
//    }
//});

//axios.get("/api/users").then(response => console.table(response.data));
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Row, Col, Container } from "react-bootstrap";
import Assignment from "./scenes/assignment";


function App() {
    return (
        <div className="App">
            <Header></Header>
            <Container>
                <Row>
                    <Col xs={3}>
                        <Sidebar></Sidebar>
                    </Col>
                    <Col xs={9}>
                        <Assignment></Assignment>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
