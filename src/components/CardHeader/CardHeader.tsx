import { CardHeaderProps } from "./CardHeader.model";
import CSS from "./CardHeader.module.scss";

const CardHeader: React.FC<CardHeaderProps> = (props) => {
  const { onInputChange } = props;

  return (
    <header className={CSS.CardHeader}>
      <h2 className={CSS.CardHeader__title}>Random User Filter</h2>
      <small className={CSS.CardHeader__subtitle}>Search users by name</small>
      <input
        type="text"
        id="filter"
        placeholder="Search for a user"
        className={CSS.CardHeader__searchbar}
        onChange={onInputChange}
      />
    </header>
  );
};

export default CardHeader;
