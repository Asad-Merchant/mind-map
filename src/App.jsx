import { useState } from 'react'
import './App.css'
import MindMap from './MindMap'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

function App() {

    const [data, setData] = useState({})

  return (
    <>
      <Navbar />
      <div className='app'>
        <Hero setData={setData} />
        {data && data.initialNodes && data.initialEdges &&
            <div className='mindmap-container'>
                <MindMap data={data} />
            </div>
        }
      </div>
      
    </>
  )
}

export default App
