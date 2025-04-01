import React, {useCallback, useEffect} from 'react'
import ReactFlow, {
    addEdge,
    MiniMap,
    Background,
    Controls,
    useNodesState,
    useEdgesState,
    ReactFlowProvider
} from 'reactflow'
import "reactflow/dist/style.css"

const MindMap = ({data}) => {

    // const initialNodes = [
    //     {
    //       id: "1",
    //       position: { x: 250, y: 5 },
    //       data: { label: "🧠 Main Topic" },
    //       style: { backgroundColor: "#4ade80", color: "black", fontWeight: "bold" },
    //     },
    //     {
    //       id: "2",
    //       position: { x: 100, y: 100 },
    //       data: { label: "💡 Sub Topic 1" },
    //       style: { backgroundColor: "#facc15", color: "black", fontWeight: "bold" },
    //     },
    //     {
    //       id: "3",
    //       position: { x: 400, y: 100 },
    //       data: { label: "📌 Sub Topic 2" },
    //       style: { backgroundColor: "#f43f5e", color: "white", fontWeight: "bold" },
    //     },
    //   ];
      
      
    //   const initialEdges = [
    //     { id: "e1-2", source: "1", target: "2", animated: true },
    //     { id: "e1-3", source: "1", target: "3", animated: true },
    //   ];

    console.log(data);
    
    const bgColor = [
      "#1abc9c", // Turquoise
      "#2ecc71", // Emerald
      "#3498db", // Peter River
      "#9b59b6", // Amethyst
      "#f39c12", // Orange
      "#e74c3c", // Alizarin
      "#34495e", // Wet Asphalt
      "#16a085", // Sea Green
      "#2980b9", // Belize Hole
      "#8e44ad"  // Wisteria
    ]

    const edgeColors = [
      "#FF5733", // Red
      "#33FF57", // Green
      "#3357FF", // Blue
      "#FF33A1", // Pink
      "#A133FF", // Purple
      "#FF8C33", // Orange
    ];

      const [nodes, setNodes, onNodesChange] = useNodesState([])
      const [edges, setEdges, onEdgesChange] = useEdgesState(data.initialEdges)

      useEffect(() => {
        if (data.initialNodes) {
            setNodes(data.initialNodes.map(node => ({
                ...node,
                style: {
                    backgroundColor: bgColor[Math.floor(Math.random() * bgColor.length)],
                    color: "white",
                    borderRadius: "8px",
                    padding: "10px"
                }
            })));
        }
        if (data.initialEdges) {
          setEdges(data.initialEdges.map(edge => ({
              ...edge,
              animated: true,
              style: {
                  stroke: edgeColors[Math.floor(Math.random() * edgeColors.length)],
                  strokeWidth: 2,
              }
          })));
      }
    }, [data]);

  return (
    <ReactFlowProvider>
        <div style={{width: '100%', height: '80vh'}}>
            <ReactFlow 
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                fitView
            />
            <MiniMap />
            <Controls />
            {/* <Background  /> */}
        </div>
    </ReactFlowProvider>
  )
}

export default MindMap