import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBlogs} from "../../../services/blogServices";
import {Form, Formik} from "formik";
import {blogCss} from "../../../style/blogCss.css"


export function ListBlog() {
    // const [blogs,setBlogs]=useState()
    const dispatch = useDispatch();
    const blogs = useSelector(({blogs}) => {
        console.log(blogs.blogs)
        return blogs.blogs;
    });
    useEffect(() => {
        dispatch(getBlogs())
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
                            <div className={"row col-12"}>
                                <div className="left  bg-info bg-gradient bg-opacity-10">
                                    <div className="col-3">
                                        <div className="menu1">List Blog More Like</div>
                                        <div className="menu2">More Comment</div>
                                    </div>
                                </div>
                                <div className="mid bg-info bg-gradient bg-opacity-10">
                                    <div className="col-6 flex flex-col overflow-auto">
                                            <table className="table table-striped">
                                                <tbody>
                                                {
                                                    blogs.map((blog, index) => (
                                                        <tr>
                                                            <div>
                                                                <div>
                                                                    <img
                                                                        src={require('../../../style/mark-zuckerberg-tung-tu-mat-dong-sang-lap-whatsapp-2.jpg')}
                                                                        alt={'error'}
                                                                        style={{
                                                                            width: 50,
                                                                            height: 50,
                                                                            borderRadius: 30,
                                                                            marginLeft: 100
                                                                        }}/>
                                                                    <div>
                                                                        <h1>{blog.title}</h1>
                                                                        <p style={{marginLeft: 100}}
                                                                           className={""}>{new Date().toLocaleString()}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <img src={blog.img} alt={"anh loi"}/>
                                                            <p>{blog.content}</p>
                                                            <button>Like</button>
                                                            :{blog.like}<br/>
                                                            <button>Comment</button>
                                                        </tr>
                                                    ))
                                                }
                                                </tbody>
                                            </table>
                                    </div>
                                </div>
                                <div className="col-3 bg-info bg-gradient bg-opacity-10">
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