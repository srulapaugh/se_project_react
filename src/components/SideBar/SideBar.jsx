import { useContext } from "react";
import "./SideBar.css";
import avatar from "../../assets/avatarpic.png";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function SideBar({ onEditProfileClick, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        {currentUser.avatar ? (
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="sidebar__avatar"
          />
        ) : (
          <div className="sidebar__avatar-placeholder">
            {currentUser.name?.[0]?.toUpperCase()}
          </div>
        )}
        <p className="sidebar__username">{currentUser.name}</p>
      </div>
      <button
        type="button"
        className="sidebar__edit-button"
        onClick={onEditProfileClick}
      >
        Edit profile
      </button>
      <button
        type="button"
        className="sidebar__signout-button"
        onClick={onSignOut}
      >
        Sign out
      </button>
    </aside>
  );
}
