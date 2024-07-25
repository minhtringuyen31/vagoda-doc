import { useState } from "react";
import styles from "./title.module.css";

import React from "react";

interface TitleProps {
  title: string;
  subTitle: string;
}

const Title = (props: TitleProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.title}</div>

      <div className={styles.subTitle}>{props.subTitle}</div>
    </div>
  );
};

export default Title;
