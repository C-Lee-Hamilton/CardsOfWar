import "../styles/Gameboard.css";
import PlayerCards from "./PlayerCards.tsx";
import OpponentCards from "./OpponentCards.tsx";
import Cardback from "../media/card.png";
import Cardnone from "../media/x.png";

const Gameboard: React.FC = () => {
  return (
    <div className="Gameboard">
      <OpponentCards />

      <div className="Display">
        <div className="spent_div">
          <img className="spent_face" src={Cardnone} />
        </div>

        <div className="P1_card">
          <h4 className="Card_label">Player</h4>
          <div className="P1_card_face"></div>
        </div>

        <div className="Op_card">
          <h4 className="Card_label">Opponent</h4>
          <div className="Op_card_face"></div>
        </div>

        <div className="spent_div">
          <img className="spent_face" src={Cardnone} />
        </div>
      </div>

      <PlayerCards />
    </div>
  );
};
export default Gameboard;
