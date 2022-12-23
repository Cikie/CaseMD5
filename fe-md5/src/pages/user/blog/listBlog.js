import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBlogs} from "../../../services/blogServices";
import {addLikes, getLikes} from "../../../services/likeService";
import {Form, Formik} from "formik";
import {Outlet, useNavigate} from "react-router-dom";

export function ListBlog() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const countLike = useRef(0);
    const [sumLikes,setSumLike]=useState(0)
    const blogs = useSelector(({blogs}) => {
        return blogs.blogs;
    });
    const likes = useSelector(({likes}) => {
        console.log(likes.likes)
        return likes.likes
    })

    useEffect(() => {
        dispatch(getBlogs())
    }, []);
    useEffect(() => {
        dispatch(getLikes())
    }, [])
    return (
        <>
            {
                blogs.map(blog => {

                        likes.map((item) => {
                            if (item.idBlogId === blog.id) {
                                countLike.current = countLike.current + 1;
                            }
                        })

                    return (
                        <>
                            <h1>{blog.title}</h1>
                            <p>{blog.content}</p>
                            <img src={blog.img} alt={"anh loi"}/><br/>
                            <button
                                className={"ml-3"}
                                onClick={(values) => {
                                    values = {
                                        idBlog: blog.id,
                                        idUser: +localStorage.getItem("idUser")
                                    }
                                    dispatch(addLikes(values))
                                    console.log(countLike.current)
                                }}
                            > Like
                            </button>
                            <h3>Like:{countLike.current}</h3>
                        </>
                    )
                })
            }
        </>
    )
}