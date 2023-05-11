// next imports
import Image from 'node_modules/next/image'

// components imports
import { Card } from 'component/Card/Card'
import { SearchButton } from 'component/SearchButton/SearchButton'
import { FilterButton } from 'component/FilterButton/FilterButton'
import { RadiusButton } from 'component/RadiusButton/RadiusButton'
import FilterSelector from 'component/FilterSelector/FilterSelector'
import { CardEmpty } from 'component/CardEmpty/CardEmpty'

// images imports
import twitterIcon from '../assets/images/twitter.svg'
import dollorIcon from '../assets/images/dolor.svg'

// styles imports
import styles from '@/styles/Home.module.scss'
import filterBtnStyles from '../component/FilterButton/FilterButton.module.scss'

export default function Home() {
  return (
    <section className={styles.QuestsSection}>
      <div className='container'>
        <div className={styles.SearchWrapper}>
          <h1>Quests (23)</h1>
          <SearchButton />        
        </div>
        <div className={styles.QuestsFilters}>
          <FilterButton BtnName='All' />
          <FilterButton BtnName='On Chain' className={filterBtnStyles.BtnSelected} />
          <FilterButton BtnName='Social' className={filterBtnStyles.BtnActive}>
            <span className={filterBtnStyles.BtnIconWrapper}><Image alt='image' src={twitterIcon} /></span>
          </FilterButton>
          <FilterButton BtnName='Token'>
            <span className={filterBtnStyles.BtnIconWrapper}><Image alt='image' src={dollorIcon} /></span>
          </FilterButton >
          <FilterSelector />
        </div>  
      </div>
      <div className='FullContainer'>
        <div className={styles.QuestsWrapper}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <CardEmpty />
        </div>
        <div className={styles.ViewMore}>
          <RadiusButton BtnName='View more' />
        </div>
      </div>
      
    </section>
  )
}