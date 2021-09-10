import Spinner from "../Spinner";
import UserInfo from "../UserInfo/UserInfo";
import { CardBodyProps } from "./CardBody.model";
import CSS from "./CardBody.module.scss";

const CardBody: React.FC<CardBodyProps> = (props) => {
  const { users, isLoading } = props;

  return (
    <div className={CSS.CardBody}>
      {isLoading && <Spinner />}
      <ul id="result" className={CSS.CardBody__usersList}>
        {users.map((user) => (
          <UserInfo userData={user} key={user.registered.date} />
        ))}
      </ul>
    </div>
  );
};

export default CardBody;
