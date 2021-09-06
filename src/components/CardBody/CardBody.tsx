import useUsersData from "./CardBody.hook";
import CSS from "./CardBody.module.scss";

const CardBody: React.FC = () => {
  const usersData = useUsersData();

  return (
    <div className={CSS.CardBody}>
      <ul id="result" className={CSS.CardBody__usersList}>
        {usersData.map((user) => {
          const id = user.registered.date;
          const avatar = user.picture.medium;
          const fullName = `${user.name.first} ${user.name.last}`;
          const city = user.location.city;
          const country = user.location.country;

          return (
            <li className={CSS.UserInfo} key={id}>
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
        })}
      </ul>
    </div>
  );
};

export default CardBody;
