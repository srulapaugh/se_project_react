import "./Profile.css";
import ClothesSection from "../Clothes/ClothesSection";
import SideBar from "../SideBar/SideBar";

export default function Profile({
  clothingItems,
  onCardClick,
  handleAddClick,
  onProfileEditClick,
  onSignOut,
}) {
  return (
    <section className="profile">
      <SideBar onEditProfileClick={onProfileEditClick} onSignOut={onSignOut} />
      <ClothesSection
        onCardClick={onCardClick}
        clothingItems={clothingItems}
        handleAddClick={handleAddClick}
      />
    </section>
  );
}
