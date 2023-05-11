// styles imports
import styles from "./RadiusButton.module.scss";

export const RadiusButton = ({ BtnName }) => {
  return (
    <button className={styles.RadiusButton}>
      {BtnName}
    </button>
  );
};
