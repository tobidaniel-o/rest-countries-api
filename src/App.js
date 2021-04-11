import UserSelect from "./UserSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
// import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <header className="header">
        <div className="wrapper">
          <div className="headerDetails">
            <h1>Where in the world?</h1>
            <div className="darkMode">
              <FontAwesomeIcon icon={faMoon} className="faMoon" />
              <span>Dark Mode</span>
            </div>
          </div>
        </div>
      </header>
      <UserSelect />
    </>
  );
};

export default App;
