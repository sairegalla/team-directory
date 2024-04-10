import { useContext } from "react";
import "./Header.css";
import listContext from "../ListProvider";

const Header = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  const { searchText, setSearchText } = useContext(listContext);
  return (
    <div className="header">
      <h1 className="app-name">Team</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};

export default Header;
