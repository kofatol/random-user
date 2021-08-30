import CSS from "./CardHeader.module.scss";

const CardHeader: React.FC = () => {
  return (
    <header className={CSS.CardHeader}>
      <h2 className={CSS.CardHeader__title}>Random User Filter</h2>
      <small className={CSS.CardHeader__subtitle}>
        Search by name and/or location
      </small>
      <input
        type="text"
        id="filter"
        placeholder="Search for a user"
        className={CSS.CardHeader__searchbar}
      />
    </header>
  );
};

export default CardHeader;
