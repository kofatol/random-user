import CardHeader from "../CardHeader";
import CardBody from "../CardBody";
import CSS from "./UsersCard.module.scss";

const UsersCard: React.FC = () => {
  return (
    <div className={CSS.UsersCard}>
      <CardHeader />
      <CardBody />
    </div>
  );
};

export default UsersCard;
