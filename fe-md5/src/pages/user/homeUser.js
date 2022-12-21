import Navbar from "../../components/Navbar";
import {Outlet} from "react-router-dom";

export function HomeUser(){
    return (
        <>
            <div className={'row'}>
                <div className="col-12"></div>
                <Navbar></Navbar>
            </div>
            <div className="row">
                <div className="col-12">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}