import "./styles.css";
import PinInput from "./PinInput";
export default function App() {
  return (
    <div className="App">
      <h1>Pin input</h1>
      <PinInput
        PIN={"000000"}
        handleError={() => console.log(false)}
        handleSuccess={() => console.log(true)}
      />
    </div>
  );
}
