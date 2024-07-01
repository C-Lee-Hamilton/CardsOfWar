import "../styles/Cards.css";
import Cardback from "../media/card.png";
import Cardnone from "../media/x.png";
const PlayerCards: React.FC = () => {
  return (
    <div className="P_stack">
      <button
        className="P_card"
        style={{ backgroundImage: `url(${Cardback})` }}
      ></button>
    </div>
  );
};
export default PlayerCards;
