import "./Profile.css";
import ClothesSection from "../Clothes/ClothesSection";
import SideBar from "../SideBar/SideBar";

export default function Profile({
  clothingItems,
  onCardClick,
  handleAddClick,
  onEditProfileClick,
  onSignOut,
  onCardLike,
}) {
  return (
    <section className="profile">
      <SideBar onEditProfileClick={onEditProfileClick} onSignOut={onSignOut} />
      <ClothesSection
        onCardClick={onCardClick}
        clothingItems={clothingItems}
        handleAddClick={handleAddClick}
        onCardLike={onCardLike}
      />
    </section>
  );
}
