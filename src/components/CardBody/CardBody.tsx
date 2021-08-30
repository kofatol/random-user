import CSS from "./CardBody.module.scss";

const CardBody: React.FC = () => {
  return (
    <div className={CSS.CardBody}>
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
  );
};

export default CardBody;
