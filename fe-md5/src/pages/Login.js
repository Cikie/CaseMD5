import {Link, useNavigate} from "react-router-dom";
import "../style/loginCss.css"
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {login} from "../services/userServices";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleLogin = async (values) => {
        let checkLogin = await dispatch(login(values))
        console.log(checkLogin)
        if (checkLogin.payload.data.token) {
            if (checkLogin.payload.data.userName === values.userName) {
                if (checkLogin.payload.data.role) {
                    navigate('/admin')
                } else {
                    return navigate('/home')
                }
            }
        } else {
            alert('Sai cmnr')
            values.userName = ''
            values.password = ''
        }
    }
    return (
        <div>
            <div className="row">
                <div className="offset-3 col-6 mt5 box">
                    <Formik
                        initialValues={{
                            userName: '',
                            password: ''
                        }}
                        onSubmit={(values) => {
                            handleLogin(values)
                        }}>
                        <Form>
                            <h1 className={'title'} style={{textAlign: "center"}}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor"
                                    color={"blue"}
                                    className="bi bi-facebook" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                </svg> Login</h1>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">UserName</label>
                                <Field type="text" className="form-control" id="exampleInputEmail1" name={'userName'}/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <Field type="password" className="form-control" id="exampleInputPassword1"
                                       name={'password'}/>
                            </div>
                            <button style={{width: "100%"}} type="submit" className="btn btn-primary">Login
                            </button>
                            <Link style={{color: "white", textDecoration: "none"}} to={'register'}>
                                <button style={{marginLeft: 110}} type="submit" className="btn btn-primary">Register
                                </button>
                            </Link>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}