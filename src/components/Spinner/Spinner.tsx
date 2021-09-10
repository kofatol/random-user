import CSS from "./Spinner.module.scss";

const Spinner: React.FC = () => {
  return (
    <div className={CSS.Spinner}>
      <div className={CSS.Spinner__loader}></div>
    </div>
  );
};

export default Spinner;
