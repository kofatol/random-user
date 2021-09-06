import { UserInfoProps } from "./UserInfo.model";
import CSS from "./UserInfo.module.scss";

const UserInfo: React.FC<UserInfoProps> = (props) => {
  const { userData } = props;

  const city = userData.location.city;
  const avatar = userData.picture.medium;
  const country = userData.location.country;
  const fullName = `${userData.name.first} ${userData.name.last}`;

  return (
    <li className={CSS.UserInfo}>
      <img
        src={avatar}
        alt={`${fullName} avatar`}
        className={CSS.UserInfo__image}
      />
      <div className={CSS.UserInfo__infoWrap}>
        <h3 className={CSS.UserInfo__header}>{fullName}</h3>
        <p className={CSS.UserInfo__text}>
          City: {city} <br />
          Country: {country}
        </p>
      </div>
    </li>
  );
};

export default UserInfo;
