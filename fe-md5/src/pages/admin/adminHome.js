import Navbar from "../../components/Navbar";
import {Link, Outlet} from "react-router-dom";

export function AdminHome(){
    return (
        <>
            <div className={'row'}>
                <div className="col-12"></div>
                <Navbar></Navbar>
            </div>
            <div className="row">
                <div className="col-12">
                    <Link to={'list-user'}>List User</Link> ||
                    <Link to={'list-blog'}>List Blogs</Link>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}