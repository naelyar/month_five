import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch ,useSelector} from "react-redux";
import { getPosts } from "../../store/fetchSlice";


function PostPage () {

    const dispatch = useDispatch()
    const posts = useSelector(state => state.fetchReducer.posts)

    useEffect(() => {
        dispatch(getPosts())

    } , [])

   const getOnePost =(e) =>{
    e.preventDefault()
    console.log(e.target.dataset.id)
   }
    return(
        <div>
        <h1>users</h1>
        {/* {console.log(posts)} */}
    <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                    <th>action</th>

                </tr>
                </thead>
                <tbody>
               {posts.slice(0,10).map(post =>
                <tr>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    <td>
                    <button data-id={post.id} onClick={getOnePost}>
                        watch
                    </button>
                    </td>

                </tr>
)}
               
                </tbody>
            </Table>

            <ul>
                <li>title</li>
                <li>body</li>

            </ul>
        

        </div>
    )
}

export default PostPage;