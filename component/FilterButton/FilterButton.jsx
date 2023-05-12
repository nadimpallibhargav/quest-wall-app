// styles imports
import styles from "./FilterButton.module.scss";

export const FilterButton = ({ BtnName, className, children, onFilterBtnClick }) => {
  return (
    <button className={[styles.FilterBtn, className].join(" ")} onClick={onFilterBtnClick} >
      {children}
      {BtnName}
    </button>
  );
};