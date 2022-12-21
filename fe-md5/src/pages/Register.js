import {Link, useNavigate} from "react-router-dom";
import "../style/loginCss.css"
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {register} from "../services/userServices";

export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRegister = async (values) => {
        let checkRegister = await dispatch(register(values))
        if(checkRegister.payload.data.check){
            alert("Dang ky thanh cong!!!")
            navigate("/")
        }else {
            alert("Dang ky that bai!!!")

            navigate("/register")
        }
    }
    return (
        <>

            <div className="row">
                <div className="offset-3 col-6 mt5 box">
                    <Formik
                        initialValues={{
                            userName: '',
                            password: ''
                        }}
                        onSubmit={(values) => {
                            handleRegister(values)
                        }}>
                        <Form>
                            <h1 className={'title'} style={{textAlign: "center"}}>Register</h1>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
                                <Field type="text" className="form-control" name={'userName'}
                                       aria-describedby="emailHelp"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <Field type="password" className="form-control" name={'password'}/>
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