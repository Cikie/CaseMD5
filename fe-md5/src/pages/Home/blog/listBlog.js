import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBlogs} from "../../../services/blogServices";
import {login} from "../../../services/userServices";
import {Form, Formik} from "formik";

function ListBlog() {
    const dispatch = useDispatch();
    const blogs = useSelector(state => {
        return state.blogs.blogs
    })

    useEffect(() => {
        dispatch(getBlogs())
    }, [])

    useEffect(() => {
        dispatch(login({
            userName: 'cao',
            password: '123456'
        }));
    }, [])
    return (
        <>
            <div>
                <Formik initialValues={{
                    name: ''
                }}

                        onSubmit={() => {

                        }}>
                    <Form>
                        <div className="main">
                            <div className={"row"}>
                                <div className="col-3">
                                    <div className="left">
                                        <div className="menu1">List Blog More Like</div>
                                        <div className="menu2">More Comment</div>
                                    </div>
                                </div>
                                    <div className="mid">
                                        <div className="col-6" style={{textAlign:"center"}}>
                                                <div className="col-12">
                                                <table className="table table-striped">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">ID</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col">Quantity</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        blogs.map((item, index) => (
                                                            <tr>
                                                                <th scope="row">{index + 1}</th>
                                                                <td>{item.name}</td>
                                                                <td>{item.price}</td>
                                                                <td>{item.quantity}</td>
                                                            </tr>
                                                        ))
                                                    }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                <div className="col-3">
                                    <div className="right">
                                        <div className="right-content1"></div>
                                        <div className="right-content2"></div>
                                        <div className="right-content3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>

    )
}

export default ListBlog;


