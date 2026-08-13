import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
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
      <h2 className="card__name">{item.name}</h2>
    </li>
  );
}

export default ItemCard;
