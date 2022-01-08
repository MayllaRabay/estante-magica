import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

function NavItem({ route, img, title }) {
  return(
    <NavLink to={route} style={{ textDecoration: 'none' }} className={styles.item__wrapper}>
      <div className={styles.img__container}>
        <img src={img} alt="" />
      </div>
      <h4>{title}</h4>
    </NavLink>
  );
}

export default NavItem;