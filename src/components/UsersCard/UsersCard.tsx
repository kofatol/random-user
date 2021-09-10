import CardBody from "../CardBody";
import CardHeader from "../CardHeader";
import useUsersData from "./UsersCard.hook";
import CSS from "./UsersCard.module.scss";

const UsersCard: React.FC = () => {
  const { visibleUsers, onUsersSearch, isLoading } = useUsersData();

  return (
    <div className={CSS.UsersCard}>
      <CardHeader onInputChange={onUsersSearch} />
      <CardBody users={visibleUsers} isLoading={isLoading} />
    </div>
  );
};

export default UsersCard;
