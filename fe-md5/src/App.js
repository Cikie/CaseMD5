import './App.css';
import Login from "./pages/Login";
import {Route, Routes} from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home/Home";
import ListBlog from "./pages/Home/blog/listBlog";
import AddBlog from "./pages/Home/blog/addBlog";
function App() {
    return (
        <>
            <div className="container-fluid"></div>
            <Routes>
                <Route path={''} element={<Login/>}/>
                <Route path={'register'} element={<Register/>}/>
                <Route path={'home'} element={<Home/>}>
                    <Route path={''} element={<ListBlog/>}></Route>
                    <Route path={'add-blog'} element={<AddBlog/>}></Route>
                </Route>
            </Routes>
        </>
    )
}

export default App;
