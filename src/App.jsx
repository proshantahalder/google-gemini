import { useState } from 'react'
import axios from "axios";
import './App.css'

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer(){
    setAnswer("Loading your answer... \n It might take upto 10 seconds");
    const response = await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCQJoGMfySOEoxEpS49DKO2vjKGSJ3GDxQ",
      method:"post",
      data:{
        contents: [{ parts: [{ text: question }] }]
        }
    });
    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
  }
  
  return (
    <>
      <h1>Google Gemini Chat AI</h1>
      <textarea value={question} onChange={(e)=>setQuestion(e.target.value)} cols={30} rows={5}></textarea><br></br>
      <button onClick={generateAnswer} >Find Answer</button><br></br>
      <p>{answer}</p>

    </>
  )
}

export default App
