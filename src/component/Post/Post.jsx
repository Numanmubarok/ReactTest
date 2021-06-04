import React from 'react'
import './../../container/BlogPost/BlogPost.css'
const Post = (props) => {
    return (
        <div className="post">
                    <div className="img-thumb">
                        <img src="https://placeimg.com/200/150/tech" alt="imgTech"/>
                    </div>
                    <div className="content">
                        <p className="title">{props.title}</p>
                        <p className="desc">{props.desc}</p>
                        <button className='btn-remove' onClick={props.onClick} >Remove</button>
                    </div>
                </div>
    )
}
export default Post