import './App.css';
import Login from "./pages/Login";
import {Route, Routes} from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home/Home";

function App() {
    return (
        <>
            <div className="container-fluid"></div>
            <Routes>
                <Route path={''} element={<Login/>}/>
                <Route path={'register'} element={<Register/>}/>
                <Route path={'home'} element={<Home/>}>
                    <Route path={''} element={<listBlog/>}></Route>
                    <Route path={'add-blog'} element={<addBlog/>}></Route>
                </Route>
            </Routes>
        </>
    )
}

export default App;
