import { useContext } from "react";
import "./SideBar.css";

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
        className="sidebar__link-button"
        onClick={onEditProfileClick}
      >
        Change profile data
      </button>
      <button
        type="button"
        className="sidebar__link-button"
        onClick={onSignOut}
      >
        Log out
      </button>
    </aside>
  );
}
