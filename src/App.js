import React from 'react';

// const baseURL = 'http://157.122.54.189:9060';
// const baseURL = 'https://api-haoke-web.itheima.net';

// 这个变量厉害了，自动根据运行 npm run start 或 npm run build 自动选择不同的值
const baseURL = process.env.REACT_APP_BASEURL;
console.log(baseURL);
console.log(process.env);


const App = () => {
  return <>
    <h1>node层面变量</h1>
  </>;
};

export default App;