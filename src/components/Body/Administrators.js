import { useContext } from "react";
import listContext from "../ListProvider";
import ProfileTile from "./ProfileTile";
import "./common.css";

const Administrators = () => {
  const { filteredList } = useContext(listContext);

  return (
    <div className="container">
      <div className="role-title">Administrators</div>
      {filteredList
        ?.filter((data) => data.role === "admin")
        .map((data) => {
          return (
            <div key={data.img}>
              <ProfileTile
                firstName={data.first_name}
                lastName={data.last_name}
                email={data.email}
                image={data.img}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Administrators;
