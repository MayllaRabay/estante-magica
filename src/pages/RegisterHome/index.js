import iconManager from '../../assets/icon-manager.svg';
import iconParents from '../../assets/icon-parents.svg';
import iconTeacher from '../../assets/icon-teacher.svg';
import NavItem from '../../components/NavItem';
import styles from './styles.module.scss';

function RegisterHome() {
  return (
    <div className={styles.content__wrapper}>
      <h1>Cadastre-se como:</h1>
      <nav>
        <NavItem route="cadastro-professor" img={iconTeacher} title="Professor(a)" />
        <NavItem route="cadastro-gestor" img={iconManager} title="Gestor(a)" />
        <NavItem route="cadastro-responsavel" img={iconParents} title="Responsável" />
      </nav>
      <h4>Já tem uma conta? <span>Faça seu login</span>.</h4>
    </div>
  );
}

export default RegisterHome;