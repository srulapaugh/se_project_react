import { useContext } from "react";
import "./ItemCard.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  console.log("currentUser in ItemCard:", currentUser);

  const isLiked = item.likes.some((id) => id === currentUser._id);

  const itemLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  const handleLike = () => {
    onCardLike({ id: item._id, isLiked });
  };

  return (
    <li className="card">
      <img
        onClick={() => {
          onCardClick(item);
        }}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
      <div className="card__name">
        <p className="card__name-text">{item.name}</p>
        {currentUser._id && (
          <button
            type="button"
            className={itemLikeButtonClassName}
            onClick={handleLike}
          ></button>
        )}
      </div>
    </li>
  );
}

export default ItemCard;
