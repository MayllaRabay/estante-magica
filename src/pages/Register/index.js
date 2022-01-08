import NavItem from '../../components/NavItem';
import styles from './styles.module.scss';
import IconTeacher from '../../assets/icon-teacher.svg';
import IconManager from '../../assets/icon-manager.svg';
import IconParents from '../../assets/icon-parents.svg';

function Register() {
  return (
    <div className={styles.content__wrapper}>
      <h1>Cadastre-se como:</h1>
      <nav>
        <NavItem route="cadastro/professor" img={IconTeacher} title="Professor(a)" />
        <NavItem route="cadastro/gestor" img={IconManager} title="Gestor(a)" />
        <NavItem route="cadastro/responsavel" img={IconParents} title="Responsável" />
      </nav>
      <footer>Já tem uma conta? <button>Faça seu login.</button></footer>
    </div>
  );
}

export default Register;