import './App.css';
import Login from "./pages/Login";
import {Route, Routes} from "react-router-dom";
import Register from "./pages/Register";
import {HomeUser} from "./pages/user/homeUser";
import {AdminHome} from "./pages/admin/adminHome";
import AddBlog from "./pages/user/blog/addBlog";
import {ListBlog} from "./pages/user/blog/listBlog";

function App() {
    return (
        <>
            <div className="container-fluid"></div>
            <Routes>
                <Route path={'/'} element={<Login/>}></Route>
                <Route path={'/home'} element={<HomeUser/>}>
                    <Route path={'add-blog'} element={<AddBlog/>}></Route>
                    <Route path={''} element={<ListBlog/>}></Route>
                </Route>
                <Route path={'/admin'} element={<AdminHome/>}/>
                <Route path={'/register'} element={<Register/>}/>
            </Routes>
        </>
    )
}

export default App;
