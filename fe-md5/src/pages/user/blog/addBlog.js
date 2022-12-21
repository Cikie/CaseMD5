import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {storage} from "../../../firebase";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";
import {v4} from "uuid";
import {addBlog} from "../../../services/blogServices";

function AddBlog() {
    //firebase
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    const [img, setImg] = useState("");

    const imagesListRef = ref(storage, "images/");
    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls((prev) => [...prev, url]);
            });
        });
        let newImg = ""
        imageUrls.map((url) => {
            newImg = url
        })
        setImg(newImg)
    };

    useEffect(() => {
        listAll(imagesListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrls((prev) => [...prev, url]);
                });
            });
        });
    }, []);
    //---end---
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => {
        return state.user.currentUser
    })
    let idUser = localStorage.getItem("idUser")
    const handleAddBlogs = async (values) => {
        let data = {...values, idUser, img}
        await dispatch(addBlog(data))
        return navigate('/home')
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
                            console.log(values)
                            handleAddBlogs(values)
                        }}>
                        <Form>
                            <h1 className={'title'} style={{textAlign: "center"}}>Add Blog</h1>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                                <Field type="text" className="form-control" id="exampleInputEmail1" name={'title'}/>
                            </div>
                            {/*<div>*/}
                            {/*    <Field name="status" component="select">*/}
                            {/*        <option value={1}>Public</option>*/}
                            {/*        <option value={0}>Private</option>*/}
                            {/*    </Field>*/}
                            {/*</div>*/}
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Content</label>
                                <Field style={{height: 150}} type="text-field" className="form-control"
                                       id="exampleInputPassword1"
                                       name={'content'}/>
                            </div>
                            <button style={{width: "100%"}} type="submit" className="btn btn-primary">Add Blogs
                            </button>
                        </Form>
                    </Formik>
                    <input
                        type="file"
                        onChange={(event) => {
                            setImageUpload(event.target.files[0]);
                        }}
                    />
                    <button onClick={uploadFile}> Upload Image</button>
                </div>
            </div>
        </div>
    )
}

export default AddBlog;