// next imports
import Image from "next/image";

// images imports
import Group from "../../assets/images/group.svg";
import Newquest from "../../assets/images/newquest.svg";
import Timer from "../../assets/images/timer.svg";
import Timergreen from "../../assets/images/timergreen.svg";
import Timerwhite from "../../assets/images/timerwhite.svg";

// styles imports
import styles from "./Card.module.scss";

export const Card = ({
  timerStatus = "",
  endTime,
  companyName,
  companyLogo,
  questTitle,
  rewardData,
  usersData,
}) => {
  return (
    <div
      className={[
        styles.CardWrapper,
        timerStatus.includes("hours")
          ? styles.CardDone
          : timerStatus.includes("days")
          ? styles.CardNew
          : null,
      ].join(" ")}
    >
      <div className={styles.CardHeader}>
        <div className={styles.BrandLogo}>
          <span className={styles.LogoWrapper}>
            <Image alt="logo" src={companyLogo} width={20} height={20} />
          </span>
          <span>{companyName} </span>
        </div>
        <div className={styles.Timer}>
          <Image
            alt="timer"
            src={
              timerStatus.includes("days")
                ? Timergreen
                : timerStatus.includes("hours")
                ? Timerwhite
                : Timer
            }
            className={styles.TimerIcon}
            width={12}
            height={15}
          />
          <span className={styles.TimeInfo}>{endTime}</span>

          {timerStatus.includes("Ended") ? (
            <div className={styles.QuestDone}>Done</div>
          ) : timerStatus.includes("days") ? (
            <div className={styles.NewQuestIcon}>
              <Image alt="timer" src={Newquest} width={93} height={93} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={styles.CardBody}>
        <h2>{questTitle.length > 25 ? questTitle.slice(0,30) + "..." : questTitle}</h2>

        <div className={styles.GatewayWrapper}>
          <div className={styles.GatewayIcon}>
            <Image
              alt="timer"
              src={rewardData?.reward_image}
              width={94}
              height={94}
            />
          </div>
          <p>{rewardData?.reward_title}</p>
        </div>
      </div>
      <div className={styles.CardFooter}>
        <Image
          alt="timer"
          src={Group}
          className={styles.GroupIcon}
          width={16}
          height={14}
        />
        <div className={styles.UsersWrapper}>
          {usersData?.questers_pics?.map((user, index) => (
            <Image key={index} alt="timer" src={user} width={24} height={24} />
          ))}
        </div>
        <span> + {usersData?.questers_count}</span>
      </div>
    </div>
  );
};
