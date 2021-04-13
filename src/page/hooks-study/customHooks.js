import React, { useState, useEffect, useCallback } from "react";

function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  },[]);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return ()=>{
        console.log("卸载");
        window.removeEventListener('resize',onResize)
    }
  }, [onResize]);
  
  return size;
}

function App(){

    const size = useWinSize();
    
    return <>
        <h1>现在页面的大小是：{size.width}*{size.height}</h1>
    </>
}

export default App
