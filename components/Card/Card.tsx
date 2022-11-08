import { CloudIcon, ForwardIcon } from "@heroicons/react/24/solid";
import React, { useEffect } from "react";
import styles from "./card.module.css";
const Card = () => {
  useEffect(() => {
    if (window !== undefined && document !== null) {
      const trailer = document.getElementById("cards");
      if (trailer !== null) {
        // @ts-ignore
        document.getElementById("cards").onmousemove = (e) => {
          // @ts-ignore
          for (const card of document.getElementsByClassName(
            "card_card__xkQ7q"
          )) {
            const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
          }
        };
      }
    }
  }, []);
  return (
    <div className="xl:flex xl:w-full  justify-center items-center">
      <div
        id="cards"
        className="grid gap-4 sm:grid-cols-2 sm:gap-2 xl:grid-cols-3 w-full 2xl:w-[80%]"
      >
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div className="flex justify-between items-center xl:justify-around">
              <h3 className="text-white font-bold text-xl xl:text-2xl">
                Automation
              </h3>
              <ForwardIcon className="text-white w-10 sm:w-20" />
            </div>
            <div className={styles.cardInfoWrapper}>
              <div className={styles.cardInfo}>
                <ForwardIcon className="text-white w-12 hidden xl:inline" />
                <div>
                  <h4 className="text-base text-gray-300 sm:text-white">
                    Doing it manually? save time and offload repetitive work. We
                    do anything from automated sales calls to syncing all
                    relevant customer data into a CRM.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div className="flex justify-between items-center xl:justify-around">
              <h3 className="text-white font-bold text-xl xl:text-2xl">
                Cloud
              </h3>
              <CloudIcon className="text-white w-10 sm:w-20" />
            </div>
            <div className={styles.cardInfoWrapper}>
              <div className={styles.cardInfo}>
                <CloudIcon className="text-white w-12 hidden xl:inline" />
                <div>
                  <h4 className="text-base text-gray-300 sm:text-white">
                    Stop having everything in house and join the thousands of
                    companies that are taking advantage from cloud services
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div className="flex justify-between items-center xl:justify-around">
              <h3 className="text-white font-bold text-xl xl:text-2xl">
                Automation
              </h3>
              <ForwardIcon className="text-white w-10 sm:w-20" />
            </div>
            <div className={styles.cardInfoWrapper}>
              <div className={styles.cardInfo}>
                <ForwardIcon className="text-white w-12 hidden xl:inline" />
                <div>
                  <h4 className="text-base text-gray-300 sm:text-white">
                    Doing it manually? save time and offload repetitive work. We
                    do anything from automated sales calls to syncing all
                    relevant customer data into a CRM.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
