import MessageForm from "./components/MessageForm";
import { useState } from "react";
import EachMessage from "./components/EachMessage";

function App() {
  const [message, setMessages] = useState("");
  const [showForm, setShowForm] = useState(true);

  return (
    <div className="App">
      {showForm  ? (
        <MessageForm setMessages={setMessages} setShowForm={setShowForm} />
      ) : (
        <>
          <h2>Your set message</h2>
          <EachMessage message={message} />
          <button className="btn" onClick={() => setShowForm(true)}>
            Create New Mesaage
          </button>
        </>
      )}
    </div>
  );
}

export default App;
