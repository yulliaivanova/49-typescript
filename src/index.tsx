import ReactDOM from "react-dom/client";
import "./index.css";
import Lesson06 from "./lessons/lesson06/Lesson06";
import Lesson07 from "./lessons/lesson07/Lesson07";
import MyButton from "./сomponents/myButton/MyButton";
import Lesson04 from "./lessons/lesson_04/Lesson04";
import Lesson05 from "./lessons/lesson_05/Lesson05";
import Lesson08 from "./lessons/lesson08/Lesson08";
import FetchDog from "./сomponents/fetchDog/FetchDog";
import FetchFox from "./сomponents/fetchFox/FetchFos";
import Lesson09 from "./lessons/lesson09/Lesson09";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    {/* <Lesson06 /> */}
    {/* <Lesson04/> */}
    {/* <Lesson07/> */}
    {/* <Lesson05/> */}
    {/* <Lesson08/> */}
    {/* <MyButton /> */}
    {/* <FetchDog/> */}
    {/* <FetchFox/> */}
    <Lesson09/>
  </>
);
