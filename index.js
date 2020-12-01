import Aeact from "./Aeact/Aeact.js";
import App from "./App.js";

// *App 是一个函数的参数，不能是JSX，只能是在JS类型中的类型 -> 一个对象
Aeact.render(App, document.getElementById("app"));
