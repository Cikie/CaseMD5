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
        if (checkLogin.payload.data.token) {
            console.log(checkLogin)
            if (checkLogin.payload.data.userName === values.userName) {
                if (checkLogin.payload.data.role) {
                    return navigate('admin')
                } else {
                    return navigate('home')
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
                            <h1 className={'title'} style={{textAlign: "center"}}>Login</h1>
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
                            <Link style={{color: "white", textDecoration: "none"}} to={'/register'}>
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