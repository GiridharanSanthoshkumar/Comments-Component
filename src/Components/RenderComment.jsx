import { useState } from "react";
import "./styles.css";
import { FaThumbsUp, FaReply } from "react-icons/fa"; // Install with `npm install react-icons`

function RenderComment(props) {
    const [replyButtonClicked, setreplyButtonClicked] = useState(false);
    const [replyValue, setreplyValue] = useState("");
    const [likedComments, setLikedComments] = useState(new Set());
    function showInputBox()
    {
        setreplyButtonClicked(true)

    }
    function increaselike(commentId)
    {
       const updatedLikedComments = new Set(likedComments);
        
        if (updatedLikedComments.has(commentId)) {
            // If already liked, unlike it
            props.comments[commentId].likes_count -= 1;
            updatedLikedComments.delete(commentId);
        } else {
            // If not liked, like it
            props.comments[commentId].likes_count += 1;
            updatedLikedComments.add(commentId);
        }

        setLikedComments(updatedLikedComments);
    }
    function closeinputBox()
    {
setreplyButtonClicked(false)
    }
    function submitReply(parentId)
    {
        //create a unique comment id 
        let replyId = Object.keys(props.comments).length+1;
        
        //add the new reply to the flat comment structure
        props.comments[replyId] = {
            id: replyId,
            msg: replyValue,
            likes_count: 0,
            reply:[]
        }
        //close the input BOX
        //add the reply to the current comment
        props.comments[parentId].reply.push(replyId);
        closeinputBox()
        console.log(replyValue);
        console.log(props.comments);
    }
    return (
        <div style={{ marginTop: "10px", paddingLeft: "30px" }}>
            {//comment Box (displays comment content and likes and reply button)
            }
    <div className="commentBox">
            <p>{props.comment.msg}</p>
            <div className="likes-reply">
                    <span><FaThumbsUp onClick={() => increaselike(props.comment.id)} /> {props.comment.likes_count}</span>
                    {!replyButtonClicked && (
                    <button onClick={showInputBox}>
                        <FaReply /> Reply
                    </button>
                        )}
             </div>
            {replyButtonClicked && (
                <div style={{ paddingLeft: "20px",paddingTop: "20px" }}>
                <input type="text" name="reply" className="reply" onChange={(e) => setreplyValue(e.target.value)} />
                <button onClick={() => submitReply(props.comment.id)}>Submit</button>
                </div>
                )}
    </div>

            {// traversal of replys:
                //recursion termination when no replies
                props.comment.reply.map(replyid => (
                //recursive call (DFS)
                <RenderComment comments={props.comments } comment={props.comments[replyid]}></RenderComment>
            ))
            
            }  
    </div>)
    
   }
   export default RenderComment;