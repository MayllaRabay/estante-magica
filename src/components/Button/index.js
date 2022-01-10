import styles from './styles.module.scss';

function Button(props) {
  return(
    <button 
      type={props.type} 
      aria-label={props.label} 
      className={props.main === true ? styles.main__button : styles.secondary__button}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default Button;