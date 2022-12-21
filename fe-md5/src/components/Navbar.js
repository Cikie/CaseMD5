import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

export default function Navbar() {
    const dispatch = useDispatch();
    const user = useSelector(state => {
        return state.user.currentUser
    })
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg bg-light">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/home">Navbar</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to={"add-blog"}>Add
                                            Blog</Link>
                                    </li>

                                </ul>
                                <button style={{marginLeft: 10}} type="submit" className="btn btn-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                         className="bi bi-person-circle" style={{marginRight:10}} viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                        <path fill-rule="evenodd"
                                              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                    </svg>
                                    {user.userName}
                                </button>
                                <Link style={{color: "white", textDecoration: "none"}} to={'/'}>
                                    <button style={{marginLeft: 10}} type="submit" className="btn btn-primary">Logout
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>)
}