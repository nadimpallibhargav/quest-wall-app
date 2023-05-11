// next, react imports
import { useState } from "react";
import Image from "node_modules/next/image";

// components imports
import { FilterButton } from "component/FilterButton/FilterButton";

// styles imports
import styles from "./FilterSelector.module.scss";
import filterBtnStyles from "../FilterButton/FilterButton.module.scss";

// images imports
import proofIcon from "../../assets/images/prooficon.svg";
import waitlistIcon from "../../assets/images/waitlist.svg";
import nftIcon from "../../assets/images/nftIcon.svg";
import downarrow from "../../assets/images/downarrow.svg";

const FilterSelector = ({ onChangeFilter,selectedMenuBtn }) => {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(0);

  return (
    <div
      className={[
        styles.SelectorWrapper,
        dropdownOpen ? styles.SelectorActive : null,
      ].join(" ")}
    >
      <FilterButton
        className={selectedMenuBtn === 5 ? filterBtnStyles.BtnSelected : ""}
        onFilterBtnClick={() => setdropdownOpen(!dropdownOpen)}
      >
        More{" "}
        <span className={filterBtnStyles.BtnIconWrapper}>
          <Image alt="image" src={downarrow} />
        </span>
      </FilterButton>
      <ul>
        <li
          className={selectedMenu === 1 ? styles.ListActive : ""}
          onClick={() => {
            setSelectedMenu(1);
          onChangeFilter(5)}}
        >
          <Image alt="image" src={proofIcon} /> <span>Proof</span>
        </li>
        <li
          className={selectedMenu === 2 ? styles.ListActive : ""}
          onClick={() => {
            setSelectedMenu(2);
          onChangeFilter(5)}}
        >
          <Image alt="image" src={waitlistIcon} /> <span>Waitlist</span>
        </li>
        <li
          className={selectedMenu === 3 ? styles.ListActive : ""}
          onClick={() => {
            setSelectedMenu(3);
          onChangeFilter(5)}}
        >
          <Image alt="image" src={nftIcon} /> <span>NFT</span>
        </li>
      </ul>
    </div>
  );
};

export default FilterSelector;
