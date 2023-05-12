// next imports
import Image from "node_modules/next/image";

// components imports
import { Card } from "component/Card/Card";
import { SearchButton } from "component/SearchButton/SearchButton";
import { FilterButton } from "component/FilterButton/FilterButton";
import { RadiusButton } from "component/RadiusButton/RadiusButton";
import FilterSelector from "component/FilterSelector/FilterSelector";
import { CardEmpty } from "component/CardEmpty/CardEmpty";

// images imports
import twitterIcon from "../assets/images/twitter.svg";
import dollorIcon from "../assets/images/dolor.svg";
import chainIcon from "../assets/images/chainicon.svg";

// styles imports
import styles from "@/styles/Home.module.scss";
import filterBtnStyles from "../component/FilterButton/FilterButton.module.scss";
import { useEffect, useState } from "react";

export default function Home() {
  const [filterSelected, setFilterSelected] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchApis();
  }, []);

  const fetchApis = async () => {
    const response = await fetch(
      "https://dev-api.wall.app/api/v1/core/campaigns/"
    );
    const responseData = await response.json();
    setData(responseData?.results);
  };

  return (
    <section className={styles.QuestsSection}>
      <div className="container">
        <div className={styles.SearchWrapper}>
          <h1>Quests (23)</h1>
          <SearchButton />
        </div>
        <div className={styles.QuestsFilters}>
          <FilterButton
            onFilterBtnClick={() => setFilterSelected(1)}
            BtnName="All"
            className={filterSelected === 1 ? filterBtnStyles.BtnSelected : ""}
          />
          <FilterButton
            onFilterBtnClick={() => setFilterSelected(2)}
            BtnName="On Chain"
            className={filterSelected === 2 ? filterBtnStyles.BtnSelected : ""}
          >
            <span className={filterBtnStyles.BtnIconWrapper}>
              <Image alt="image" src={chainIcon} />
            </span>
          </FilterButton>
          <FilterButton
            onFilterBtnClick={() => setFilterSelected(3)}
            BtnName="Social"
            className={filterSelected === 3 ? filterBtnStyles.BtnSelected : ""}
          >
            <span className={filterBtnStyles.BtnIconWrapper}>
              <Image alt="image" src={twitterIcon} />
            </span>
          </FilterButton>
          <FilterButton
            onFilterBtnClick={() => setFilterSelected(4)}
            BtnName="Token"
            className={filterSelected === 4 ? filterBtnStyles.BtnSelected : ""}
          >
            <span className={filterBtnStyles.BtnIconWrapper}>
              <Image alt="image" src={dollorIcon} />
            </span>
          </FilterButton>
          <FilterSelector
            onChangeFilter={(e) => setFilterSelected(e)}
            selectedMenuBtn={filterSelected}
          />
        </div>
      </div>
      <div className="FullContainer">
        <div className={styles.QuestsWrapper}>
          {data.map((quest, i) => {
            return (
              <Card
                key={i}
                endTime={quest.ending_in}
                companyName={quest.project_info.name}
                companyLogo={quest.project_info.project_display_image}
                rewardData={quest?.campaign_reward_data}
                questTitle={quest?.name}
                usersData={quest?.quester_details}
                timerStatus={quest?.ending_in}
              />
            );
          })}

          <CardEmpty />
          <CardEmpty />
        </div>
        <div className={styles.ViewMore}>
          <RadiusButton BtnName="View more" />
        </div>
      </div>
    </section>
  );
}
