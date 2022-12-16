import {Link} from "react-router-dom";
import "../style/loginCss.css"
import {Form, Formik} from "formik";

export default function Login() {
    return (
        <>
            <div className="row">
                <div className="offset-3 col-6 mt5 box">
                    <Formik
                        initialValues={{
                            userName: '',
                            passWord: ''
                        }}
                        onSubmit={() => {

                        }}>
                        <Form>
                            <h1 className={'title'} style={{textAlign: "center"}}>Register</h1>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Re text Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>

                            <button style={{width: '100%'}} type="submit" className="btn btn-primary">Register</button>
                            <Link style={{color: "white", textDecoration: "none"}} to={'/'}>
                                <button style={{marginLeft: 110}} type="submit" className="btn btn-primary">Login
                                </button>
                            </Link>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}