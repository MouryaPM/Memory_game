import styles from "./SingleCard.module.css";

const SingleCard = ({ card, choicehandle, flipped, disabled }) => {
  const cardClickHandler = () => {
    if (!disabled) choicehandle(card);
  };
  return (
    <div className={styles.card}>
      <div className={flipped ? styles.flipped : ""}>
        <img src={card.src} alt="card-front" className={styles.front} />
        <img
          src="/img/cover.png"
          alt="card-back"
          className={styles.back}
          onClick={cardClickHandler}
        />
      </div>
    </div>
  );
};

export default SingleCard;
