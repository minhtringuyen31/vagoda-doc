import { useState } from "react";
import styles from "./title.module.css";

import React from "react";

const Title = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>WELCOME TO OFFICICAL</div>
      <div className={styles.title}>VAGODA DOCUMENTATION</div>
      <div className={styles.description}>
        This page provides a comprehensive overview of Vagoda, covering its
        technologies, theories, research methods, and applications across the
        Vagoda platform. Explore the integration of Gen AI into E-commerce
        platforms specifically, as well as its applications across all fields of
        life in general.
      </div>
    </div>
  );
};

export default Title;
