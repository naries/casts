import { useEffect, useState } from "react";

const MinifiedIcon = () => {
    const [heights, setHeights] = useState([4,2,3,1])
    const anyHeight = () => Math.ceil(Math.random() * 4)
    
    useEffect(() => {
        setTimeout(()=>{
            setHeights([anyHeight(), anyHeight(), anyHeight(), anyHeight()])
        }, 400)
    }, [heights])
    console.log(heights)

    return <div className="flex h-16 justify-center content-center py-1 transform ">
        {heights.map((h, i) => <div key={i} className={`h-${heights[i]* 2} w-1 ml-1 rounded-xl bg-${i===0? "black": i === 1 ? "red-700": i === 2 ? "green-700": "blue-700"} transition-all duration-500`}></div>)}
    </div>
}

export default MinifiedIcon;