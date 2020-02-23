import React from 'react'
import '../post/Post.css'

const Post = props =>{
    return(
        <div className="post">
            <div className="card" style={{width: "100%", height: "100%"}}>
                <img src="https://placeimg.com/100/200/tech" className=" " alt="dumay" />
                    <div className="card-body">
                        <p>UserId : {props.userId}</p>
                        <h5 className="card-text title" onClick={()=>props.goDetail(props.data.id)}>{props.data.title}</h5>
                       <p className="card-text desc">{props.data.body}</p>
                       <button className="btn btn-warning text-light mr-2" onClick={()=>props.update(props.data)}> update </button>
                       <button className="btn btn-danger" onClick={()=>props.remove(props.data.id)}>Delete</button>
                </div>
            </div>
        </div>  
    )
}

export default Post