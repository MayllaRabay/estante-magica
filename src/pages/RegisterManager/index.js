import FormContainer from '../../components/FormContainer';
import IconManager from '../../assets/icon-manager.svg';

function RegisterManager() {
  return (
    <FormContainer
      img={IconManager}
      title="Criar conta de gestor(a)"
      role="manager"
    />
  );
}

export default RegisterManager;