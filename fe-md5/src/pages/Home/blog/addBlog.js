import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";

function AddBlog() {
    const dispatch = useDispatch();
    const natigate = useNavigate();
    const user = useSelector(state => {
        console.log(state)
        return state.user.currentUser
    })
    const handleAddBlogs = (values) => {
        let data = {...values, user: {id: user.id}}
        console.log(data)
    }
    return (
        <div>
            <div className="row">
                <div className="offset-3 col-6 mt5 box">
                    <Formik
                        initialValues={{
                            title: '',
                            content: ''
                        }}
                        onSubmit={(values) => {
                            handleAddBlogs(values)
                        }}>
                        <Form>
                            <h1 className={'title'} style={{textAlign: "center"}}>Add Blog</h1>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                                <Field type="text" className="form-control" id="exampleInputEmail1" name={'title'}/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Content</label>
                                <Field style={{height:150}} type="text-field" className="form-control" id="exampleInputPassword1"
                                       name={'content'}/>
                            </div>
                            <button style={{width: "100%"}} type="submit" className="btn btn-primary">Add Blogs
                            </button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default AddBlog