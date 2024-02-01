import logo from "./logo.svg";
import MessageForm from "./components/MessageForm";
import { useState } from "react";
import EachMessage from "./components/EachMessage";

function App() {
  const [message, setMessages] = useState("");

  return (
    <div className="App">
      <MessageForm setMessages={setMessages} />
      <EachMessage message={message} />
    </div>
  );
}

export default App;
