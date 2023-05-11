// next imports
import Image from 'next/image'

// images imports
import SearchIcon from '../../assets/images/searchicon.svg'

// styles imports
import styles from './SearchButton.module.scss'

export const SearchButton = () => {
  return (
    <div className={styles.SearchButtonWrapper}>
      <button>
        <Image alt="search image" src={SearchIcon} />
      </button>
      <input placeholder="Search Quest or Project" />
    </div>
  );
};