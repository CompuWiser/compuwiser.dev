import { FC } from "react";
import styles from "./Page404.module.scss";

export const Page404: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.error}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.desc}>Page not found</h2>
      </div>
    </div>
  );
};
