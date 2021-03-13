import { useEffect, useState } from "react";

const Icon = () => {
    const [heights, setHeights] = useState([4,2,3,1])
    const anyHeight = () => Math.ceil(Math.random() * 4)
    
    useEffect(() => {
        setTimeout(()=>{
            setHeights([anyHeight(), anyHeight(), anyHeight(), anyHeight()])
        }, 400)
    }, [heights])
    console.log(heights)

    return <div className="flex h-36 justify-center content-center py-4 transform rotate-180">
        {heights.map((h, i) => <div key={i} className={`h-${heights[i]* 4} w-3 ml-3 rounded-xl bg-${i===0? "black": i === 1 ? "red-700": i === 2 ? "green-700": "blue-700"} transition-all duration-500`}></div>)}
    </div>
}

export default Icon;