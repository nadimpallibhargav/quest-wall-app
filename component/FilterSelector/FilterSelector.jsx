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

const FilterSelector = () => {

    const[dropdownOpen, setdropdownOpen] = useState(false)

  return (
    <div className={[styles.SelectorWrapper, dropdownOpen ? styles.SelectorActive : null].join(' ')}>
      <FilterButton className={filterBtnStyles.BtnActive} onFilterBtnClick={() => setdropdownOpen(!dropdownOpen)}>
        More <span className={filterBtnStyles.BtnIconWrapper}><Image alt="image" src={downarrow} /></span>
      </FilterButton>
      <ul>
        <li className={styles.ListActive}>
          <Image alt="image" src={proofIcon} /> <span>Proof</span>
        </li>
        <li>
          <Image alt="image" src={waitlistIcon} /> <span>Waitlist</span>
        </li>
        <li>
          <Image alt="image" src={nftIcon} /> <span>NFT</span>
        </li>
      </ul>
    </div>
  );
};

export default FilterSelector;
