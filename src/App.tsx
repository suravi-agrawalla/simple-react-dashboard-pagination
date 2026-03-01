// import { Button } from "@mui/material";
import "./App.css";
import { useEffect, useState } from "react";
// import ListItem from "./components/ListItem";
// import { EffectPractice } from "./components/EffectPractice";
// import EffectPracticeonly from "./components/EffectPracticeonly";
// import EffectPracticeProject from "./components/EffectPracticeProject";
// import TodoProject from "./components/Todoprojecr/todoProject";
import DebounceUseStateEffect from "./debounceUseeffect";
import ReactForm from "./components/ReactForm";
import ParentComponent from "./components/liftStateProjectSmall/parentComponent";
import PracticeInputRef from "./components/inputRef/PracticeInputRef";
import PracticeInputRef2 from "./components/inputRef/PracticeInputRef2";
import PracticeUselayoutEffect from "./components/useLayouteffect/practiceUselayoutEffect";
import { DebouncePractice } from "./components/debouncePractice/debouncePractcie";
import ParenttComponent from "./components/CallBackExample/ParentComponent";
import UsingCustomHookComponent from "./components/CustomHook/UsingCustomHookComponent";
import UsingUseFetchForCustomerHook from "./components/CustomHook/UsingUseFetchForCustomHook";
import UseMemoExample from "./components/useMemo/UseMemoExample";
import { UserDashBoardComponent } from "./userDashBoardProject/components/UserDashBoardComponent";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("compoent mount");
    if (count == 5) {
      alert("it is 5");
      document.title = "surai";
    }
  });

  const incrementHandle = () => {
    setCount(count + 1);
  };

  const decrementHandle = () => {
    setCount(count - 1);
  };

  const resetHandle = () => {
    setCount(0);
  };

  return (
    <>
      {/* <h1>this is my pratice</h1>
      <Button onClick={incrementHandle}>+</Button>
      <h1>{count}</h1>
      <Button onClick={decrementHandle} disabled={count == 0}>
        -
      </Button>
      <Button onClick={resetHandle}>Reset</Button>
      {count % 2 == 0 && <h1>it is even number</h1>}
      {count % 2 != 0 && <h1>it is odd number</h1>}
      <ListItem /> */}
      {/* <EffectPractice /> */}

      {/* <EffectPracticeonly/> */}

      {/* <EffectPracticeProject /> */}

      {/* <TodoProject/> */}

      {/* <DebounceUseStateEffect /> */}

      {/* <ReactForm />

      <ParentComponent /> */}

      {/* <PracticeInputRef /> */}
      {/* <PracticeInputRef2 /> */}
      {/* <PracticeUselayoutEffect /> */}

      {/* <DebouncePractice /> */}

      {/* <ParenttComponent /> */}

      {/* <UsingCustomHookComponent /> */}
      {/* <UsingUseFetchForCustomerHook /> */}

      {/* <UseMemoExample /> */}

      <UserDashBoardComponent />
    </>
  );
}

export default App;
