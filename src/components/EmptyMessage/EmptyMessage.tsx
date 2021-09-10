import CSS from "./EmptyMessage.module.scss";

const EmptyMessage: React.FC = () => {
  return (
    <div className={CSS.EmptyMessage}>
      <p className={CSS.EmptyMessage__text}>No users were found :(</p>
    </div>
  );
};

export default EmptyMessage;
