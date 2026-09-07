import styles from "./Card.module.css";

// 타입지정(외부에서도 사용할 수 있음 - export )
export interface CardType {
  idx?: number; //? : 있을수도, 없을수도 있다
  title: string;
  content?: string;
  author?: string;
}

const InfoCard = ({ idx, title, content = "(No Content)", author }: CardType) => {
  return (
    <div className={styles.card} key={idx}>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Author : {author}</p>
    </div>
  );
};

export default InfoCard;
