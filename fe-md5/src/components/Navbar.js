import {Link} from "react-router-dom";
export default function Navbar() {
    return (
        <div >
            <div className="row">
                <div className="col-12" >
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
                                        <Link className="nav-link active" aria-current="page" to="add-blog">Add Blog</Link>
                                    </li>
                                </ul>
                                <Link style={{color: "white", textDecoration: "none"}} to={'/'}>
                                    <button style={{marginLeft: 110}} type="submit" className="btn btn-primary">Logout
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>)
}