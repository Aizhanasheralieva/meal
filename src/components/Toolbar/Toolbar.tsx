import { NavLink } from "react-router-dom";

const Toolbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
          <NavLink to="/" className="text-decoration-none">
            <span className="navbar-brand mb-0 text-white fs-1">
              Calorie Tracker
            </span>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Toolbar;
