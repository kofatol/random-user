import classNames from "classnames";
import CSS from "./UsersCard.module.scss";

const UsersCard: React.FC = () => {
  return (
    <div className={CSS.UsersCard}>
      <header className={classNames(CSS.UsersCard__header, CSS.Header)}>
        <h2 className={CSS.Header__title}>Random User Filter</h2>
        <small className={CSS.Header__subtitle}>
          Search by name and/or location
        </small>
        <input
          type="text"
          id="filter"
          placeholder="Search for a user"
          className={CSS.Header__searchbar}
        />
      </header>
      <div className={classNames(CSS.UsersCard__body, CSS.CardBody)}>
        <ul id="result" className={CSS.CardBody__usersList}>
          <li className={CSS.UserInfo}>
            <img
              src="https://randomuser.me/api/portraits/women/3.jpg"
              alt="Karen"
              className={CSS.UserInfo__image}
            />
            <div className={CSS.UserInfo__infoWrap}>
              <h3 className={CSS.UserInfo__header}>Karen Smith</h3>
              <p className={CSS.UserInfo__text}>London, UK</p>
            </div>
          </li>
          <li className={CSS.UserInfo}>
            <img
              src="https://randomuser.me/api/portraits/women/3.jpg"
              alt="Karen"
              className={CSS.UserInfo__image}
            />
            <div className={CSS.UserInfo__infoWrap}>
              <h3 className={CSS.UserInfo__header}>Karen Smith</h3>
              <p className={CSS.UserInfo__text}>London, UK</p>
            </div>
          </li>
          <li className={CSS.UserInfo}>
            <img
              src="https://randomuser.me/api/portraits/women/3.jpg"
              alt="Karen"
              className={CSS.UserInfo__image}
            />
            <div className={CSS.UserInfo__infoWrap}>
              <h3 className={CSS.UserInfo__header}>Karen Smith</h3>
              <p className={CSS.UserInfo__text}>London, UK</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UsersCard;
