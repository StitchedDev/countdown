import styles from "../styles/Home.module.scss";
import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import TimeRemaining from "../components/TimeRemaining/TimeRemaining";

export default function Home() {
  const [headerMessages, setHeaderMessages] = useState<string[]>([
    "Time passes on...",
    "It'll be here before you know it",
    "Y'know... time passes slower if you watch it",
  ]);
  const [currentHeader, setCurrentHeader] = useState<string>("");

  useEffect(() => {
    grabHeaderMessage();
  }, []);

  const grabHeaderMessage = () => {
    let randomIndex = Math.floor(Math.random() * headerMessages.length);

    setCurrentHeader(headerMessages[randomIndex]);
  };

  return (
    <div className={styles.countdownContainer}>
      {/* The current header and the goal date selected*/}
      <h1 className={styles.header}>{currentHeader}</h1>

      <TimeRemaining />
      {/* Link to goal date change page */}
      <div className={styles.changeGoalDateContainer}>
        <Link href="/change-goal-date" className={styles.removeTextDecoration}>
          Change Goal Date
        </Link>
      </div>
    </div>
  );
}
