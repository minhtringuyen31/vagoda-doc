import styles from "./figure.module.css";

interface FigureProps {
  content: string;
}

const Figure = (props: FigureProps) => {
  return <div className={styles.container}>{props.content}</div>;
};

export default Figure;
