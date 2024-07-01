import "../styles/Cards.css";
import Cardback from "../media/card.png";
import Cardnone from "../media/x.png";

const OpponentCards: React.FC = () => {
  return (
    <div className="O_stack">
      <button
        className="O_card"
        style={{ backgroundImage: `url(${Cardback})` }}
      ></button>
    </div>
  );
};
export default OpponentCards;
