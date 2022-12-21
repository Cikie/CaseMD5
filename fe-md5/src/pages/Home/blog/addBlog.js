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
                                <textarea className={"form-control"} style={{height:120,width:"100%",borderRadius:10}}  id="exampleInputPassword1"
                                       name={'content'}/>
                            </div>

                            <select style={{marginLeft:110}} className={"btn btn-primary"}>
                                <option>Choice One!!</option>
                                <option>Select 1</option>
                                <option>Select 2</option>
                            </select>

                            <div className="mb-3" style={{textAlign:"center"}}>
                                <Field style={{}} type="file" name={'upload'}/>
                                <button className={"btn btn-primary"}>Add File</button>
                            </div>
                            <button style={{width: "100%"}} type="submit" className="btn btn-primary">Add Blog
                            </button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default AddBlog