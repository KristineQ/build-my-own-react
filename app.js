import Aeact from "./Aeact/Aeact.js";

// * 如果想创建document element就用document.creatElement,我们要创建一个Aeact element, 就要用Aeact.creatElement
// const App = Aeact.createElement("div", { title: "hello" }, "hello Aeact !!🥺");

// * react使用babel去complier jsx to createElement，
// * 可以直接看babel源码 https://github.com/babel/babel/blob/main/packages/babel-plugin-transform-react-jsx-source/src/index.js
const App = <div title="hello">hello react </div>;

export default App;