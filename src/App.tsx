import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="text-lg font-bold">Hello world</div>
      <div className="flex items-center gap-2 my-2 justify-center">
        <Button>Submit</Button>
        <Button variant={"secondary"}>Submit</Button>
        <Button variant={"outline"}>Submit</Button>
        <Button variant={"link"}>Submit</Button>
        <Button variant={"ghost"}>Submit</Button>
        <Button variant={"destructive"}>Submit</Button>
      </div>
    </>
  );
}

export default App;
