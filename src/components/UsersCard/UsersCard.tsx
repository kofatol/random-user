import CardBody from "../CardBody";
import CardHeader from "../CardHeader";
import useUsersData from "./UsersCard.hook";
import CSS from "./UsersCard.module.scss";

const UsersCard: React.FC = () => {
  const { visibleUsers, onUsersSearch } = useUsersData();

  return (
    <div className={CSS.UsersCard}>
      <CardHeader onInputChange={onUsersSearch} />
      <CardBody users={visibleUsers} />
    </div>
  );
};

export default UsersCard;
