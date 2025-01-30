import React from "react";
import RenderComment from "./RenderComment";
function CommentSection(props)
{
    const [Comment,setComment]=React.useState("")
    function addComment()
    {
        let commentId = Object.keys(props.comments).length + 1;
        let message = Comment;
        props.comments[commentId] = {
            id: commentId,
            msg: message,
            likes_count: 0,
            reply:[]
        }
        setComment("");
        //update first level comments
        props.FirstLevelComments.push(commentId);


    }
    const inputtextstyle={display: "flex",
        columnGap: "3px"
    }
    
    return (<div style={{ display: "flex", flexDirection: "column", width: "fit-content", margin: "auto",    paddingLeft: "20%",

    paddingRight: "20%",
    paddingBottom: "5%",
    paddingTop: "5%",
    backgroundColor: "dimgray",
    borderRadius: "10px"}}>
        <div style={inputtextstyle}>
            <input type="text" name="inputcomment" placeholder="share your comment" onChange={(e)=>setComment(e.target.value)} value={Comment}></input>
            <button onClick={addComment}>submit</button>
        </div>
        <h3>comment:</h3>
        {console.log(props.comments)}
        {props.FirstLevelComments.map((commentid) => (
            <RenderComment comments={props.comments} comment={props.comments[commentid]}></RenderComment>
        )
      
  )}
    </div>)
}
export default CommentSection;