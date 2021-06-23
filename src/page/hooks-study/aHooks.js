import React from "react";
import { useToggle } from 'ahooks'


function App(){

    const [show,{toggle}] = useToggle()
    
    return <div className="ahook">
        <button onClick={()=>toggle()}>toggle开关</button>
        {show&&<h3>开灯</h3>}
        {!show&&<h3>关灯</h3>}
    </div>
}

export default App
