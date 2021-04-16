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
        <h1 className='desc'> 自定义 Hook 必须以 use 开头,不遵循的话，由于无法判断某个函数是否包含对其内部 Hook 的调用，React 将无法自动检查你的 Hook 是否违反了 Hook 的规则。</h1>
        <h1>现在页面的大小是：{size.width}*{size.height}</h1>
    </>
}

export default App
