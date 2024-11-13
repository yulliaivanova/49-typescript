import ReactDOM from "react-dom/client";
import "./index.css";
import Lesson06 from "./lessons/lesson06/Lesson06";
import Lesson07 from "./lessons/lesson07/Lesson07";
import MyButton from "./сomponents/myButton/MyButton";
import Lesson04 from "./lessons/lesson_04/Lesson04";
import Lesson05 from "./lessons/lesson_05/Lesson05";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    {/* <Lesson06 /> */}
    {/* <Lesson04/> */}
    {/* <Lesson07/> */}
    <Lesson05/>
    <MyButton />
  </>
);
