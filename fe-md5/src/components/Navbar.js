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
                    <nav className="navbar navbar-expand-lg bg-info bg-gradient bg-opacity-10">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/home">
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor"
                                     color={"blue"}
                                     className="bi bi-bootstrap-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"/>
                                    <path
                                        d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z"/>
                                </svg>
                            </Link>

                            <input style={{width: "20%"}} className="form-control me-2" type="search"
                                   placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <Link className="navbar-brand" to="/home">
                                <svg style={{marginLeft: 150}} xmlns="http://www.w3.org/2000/svg" width="35" height="35"
                                     fill="currentColor"
                                     className="bi bi-house-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                                    <path
                                        d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
                                </svg>
                            </Link>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to={"add-blog"}>
                                            <svg style={{marginLeft: 100}} xmlns="http://www.w3.org/2000/svg" width="35"
                                                 height="35"
                                                 fill="currentColor" className="bi bi-house-add-fill"
                                                 viewBox="0 0 16 16">
                                                <path
                                                    d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 1 1-1 0v-1h-1a.5.5 0 1 1 0-1h1v-1a.5.5 0 0 1 1 0Z"/>
                                                <path
                                                    d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                                                <path
                                                    d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
                                            </svg>
                                        </Link>
                                    </li>
                                </ul>
                                <button style={{marginLeft: 10}} type="submit" className="btn btn-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                         className="bi bi-person-circle" style={{marginRight: 10}} viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                        <path fill-rule="evenodd"
                                              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                    </svg>
                                    {user.username}
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