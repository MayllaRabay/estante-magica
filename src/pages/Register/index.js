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
      <h4>Já tem uma conta? <span>Faça seu login</span>.</h4>
    </div>
  );
}

export default Register;