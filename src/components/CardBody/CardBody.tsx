import useUsersData from "./CardBody.hook";
import UserInfo from "../UserInfo/UserInfo";
import CSS from "./CardBody.module.scss";

const CardBody: React.FC = () => {
  const usersData = useUsersData();

  return (
    <div className={CSS.CardBody}>
      <ul id="result" className={CSS.CardBody__usersList}>
        {usersData.map((user) => (
          <UserInfo userData={user} key={user.registered.date} />
        ))}
      </ul>
    </div>
  );
};

export default CardBody;
