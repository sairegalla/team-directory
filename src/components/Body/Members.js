import { useContext } from "react";
import listContext from "../ListProvider";
import ProfileTile from "./ProfileTile";
import "./common.css";

const Members = () => {
  const { filteredList } = useContext(listContext);

  return (
    <div className="container">
      <div className="role-title">Members</div>
      {filteredList
        ?.filter((data) => data.role === "member")
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

export default Members;
