import "./styles.css";
import Gameboard from "./components/Gameboard.tsx";
export default function App() {
  return (
    <div className="App">
      <h1 className="Header">Cards of War</h1>
      <div className="Container">
        <Gameboard />
      </div>
    </div>
  );
}
