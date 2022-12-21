import "../../../style/Blogs.css"
import {Form, Formik} from "formik";
import Navbar from "../../../components/Navbar";

export default function Admin() {
    return (
        <>
            <div>
                <Formik initialValues={{
                    name:''
                }}

                        onSubmit={() => {

                }}>
                    <Form>
                      <Navbar></Navbar>
                        <div className="main">
                            <div className="left">
                                <div className="menu1"></div>
                                <div className="menu2"></div>
                            </div>
                            <div className="mid">

                            </div>
                            <div className="right">
                                <div className="right-content1"></div>
                                <div className="right-content2"></div>
                                <div className="right-content3"></div>
                            </div>
                        </div>
                        <div className="footer"></div>
                    </Form>
                </Formik>
            </div>
        </>
    )
}