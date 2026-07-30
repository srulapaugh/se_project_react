import "./ItemCard.css";

function ItemCard({ item }) {
  return (
    <li className="card">
      <img className="card__image" src={item.link} alt={item.name} />
      <h2 className="card__name">{item.name}</h2>
    </li>
  );
}

export default ItemCard;
