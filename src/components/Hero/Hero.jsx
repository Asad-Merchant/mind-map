import React, { useState } from 'react'
import TypewriterComponent from 'typewriter-effect'
import { FaArrowRight } from "react-icons/fa";
import { GoogleGenerativeAI } from '@google/generative-ai';
import './Hero.css'



const Hero = ({setData}) => {
// AIzaSyDUXlLXgIWd_r-IXBRHmPEyut0IEdp6pa0
    const [userInput, setUserInput] = useState("")
    const [loading, setLoading] = useState(false)
    // console.log(userInput)

    const handleSubmit = async () => {
        setData({})
        setLoading(true)
        try {
            const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

            const prompt = `Give the object as JSON in which it contains initialNodes and initialEdges as array. In initialNodes it contains the object with property of id, position which includes x and y, data which includes label. In initialEdges it contains the object with property id, source, target and animated as true. Give it so that I can use it in my react flow. Give if for following and include all things in details create atleast 15 nodes you can include more if required: ${userInput}. Give the json code only no comments and nothing else`;

            const result = await model.generateContent(prompt);
            // console.log(JSON.parse(result.response.text().replace('```json','').replace('```','')));
            setData(JSON.parse(result.response.text().replace('```json','').replace('```','')))
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

  return (
    <div className='hero'>
        <h1>🧠 <span>Generate Mind Maps <br />Using AI</span></h1>
        <div className='hero-type'>
            <TypewriterComponent
                options={{
                    strings: [
                        "Visualize your thoughts effortlessly.",
                        "Create interactive mind maps in seconds.",
                        "Turn ideas into structured insights.",
                        "Organize, connect, and innovate with ease."
                    ],
                    autoStart: true,
                    loop: true,
                    pauseFor: 2000
                }}
            />
        </div>
        <div className='hero-input'>
            <input value={userInput} type="text" placeholder='Type your prompt and watch your mind map come to life!' onChange={(e)=>setUserInput(e.target.value)} />
            <FaArrowRight className='btn' onClick={handleSubmit}/>
        </div>
        {
            loading && <div className="loader"></div> 
        }
        
    </div>
  )
}

export default Hero
