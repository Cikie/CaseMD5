import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBlogs} from "../../../services/blogServices";

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
            {
                blogs.map(blog => (
                    <>
                        <h1>{blog.title}</h1>
                        <img src={blog.img} alt={"anh loi"}/>
                        <p>{blog.content}</p>
                        <button>Like</button>:{blog.like}<br/>
                        <button>Comment</button>
                    </>
                ))
            }
        </>
    )
}