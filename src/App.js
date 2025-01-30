import CommentSection from "./Components/CommentSection"

const comments = {
  1: { id: 1, msg: "👋 Hello World", likes_count: 0, reply: [2, 4] },
  2: { id: 2, msg: "💬 Nice to meet you!", likes_count: 0, reply: [3] },
  3: { id: 3, msg: "🌞 Good Morning!", likes_count: 0, reply: [] },
  4: { id: 4, msg: "🌙 Good Night", likes_count: 0, reply: [] },
  5: { id: 5, msg: "🌙 Hello all", likes_count: 0, reply: [] }
};


const FirstLevelComments = [1,5]; // Top-level comment IDs.

function App() {
  return (
    <div className="App">
      <h2 style={{textAlign:"center"}}>comment section</h2>
      <CommentSection comments={comments} FirstLevelComments={FirstLevelComments} ></CommentSection>
    </div>
  );
}

export default App;
