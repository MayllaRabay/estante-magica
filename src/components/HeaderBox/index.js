import styles from './styles.module.scss';

function HeaderBox(props) {
  return(
    <div className={styles.content__wrapper}>
      <div className={styles.img__container}>
        <img src={props.img} alt="" />
      </div>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
}

export default HeaderBox;