import React from "react";
import styles from "./chapter.module.css";

interface ChapterProps {
  chapterNumber: number;
  title: string;
  subTitle: string;
}

const Chapter = (props: ChapterProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.chapter}>Chapter {props.chapterNumber}</div>
      <div className={styles.title}> {props.title}</div>
      <div className={styles.divider}></div>
      <div className={styles.subTitle}>{props.subTitle}</div>
    </div>
  );
};

export default Chapter;
