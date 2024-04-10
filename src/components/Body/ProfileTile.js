import "./common.css";
const ProfileTile = (props) => {
  const { firstName, lastName, email, image } = props;
  return (
    <>
      <div className="smallCardContainer">
        <div className="imageContainer">
          <img className="image" src={image} alt={`${firstName} ${lastName}`} />
        </div>
        <div className="titleDescriptionContainer">
          <div className="name">{`${firstName} ${lastName}`}</div>
          <div className="email">{email}</div>
        </div>
      </div>
    </>
  );
};

export default ProfileTile;
