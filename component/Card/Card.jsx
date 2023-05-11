// next imports
import Image from "next/image";

// images imports
import PolygonLogo from "../../assets/images/polygon.svg";
import Gatewayproof from "../../assets/images/gatewayproof.svg";
import GatewayproofOverlay from "../../assets/images/gatewayproofoverlay.svg";
import Group from "../../assets/images/group.svg";
import Newquest from "../../assets/images/newquest.svg";
import Timer from "../../assets/images/timer.svg";
import Userone from "../../assets/images/userone.svg";

// styles imports
import styles from "./Card.module.scss";

export const Card = () => {
  return (
    <div className={styles.CardWrapper}>
      <div className={styles.CardHeader}>
        <div className={styles.BrandLogo}>
          <Image alt="logo" src={PolygonLogo} />
          <span>Polygon</span>
        </div>
        <div className={styles.Timer}>
          <Image alt="timer" src={Timer} className={styles.TimerIcon} />
          <span className={styles.TimeInfo}>16 days left</span>
          <div className={styles.NewQuestIcon}>
            <Image alt="timer" src={Newquest} />
          </div>
        </div>
      </div>
      <div className={styles.CardBody}>
        <h2>Spinblade 100 MATIC Giveaway</h2>
        <div className={styles.GatewayWrapper}>
          <div className={styles.GatewayIcon}>
            <Image alt="timer" src={GatewayproofOverlay} />
            <Image alt="timer" src={Gatewayproof} />
          </div>
          <p>Spinblade MATIC Giveaway Proof</p>
        </div>
      </div>
      <div className={styles.CardFooter}>
        <Image alt="timer" src={Group} className={styles.GroupIcon} />
        <div className={styles.UsersWrapper}>
          <Image alt="timer" src={Userone} />
          <Image alt="timer" src={Userone} />
          <Image alt="timer" src={Userone} />
        </div>
        <span>+12.4K</span>
      </div>
    </div>
  );
};
