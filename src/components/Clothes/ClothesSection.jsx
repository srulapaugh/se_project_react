import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

export default function ClothesSection({ clothingItems, onCardClick }) {
  <div className="clothes-section">
    <div>
      <p>Text</p>
      <button>Button</button>
    </div>
  </div>;
  return (
    <ul className="clothes-section__items">
      {clothingItems.map((item) => {
        <ItemCard key={item._id} item={item} onCardClick={onCardClick} />;
      })}
      console.log(clothingItems)
    </ul>
  );
}
