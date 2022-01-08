import FormContainer from '../../components/FormContainer';
import IconParents from '../../assets/icon-parents.svg'

function RegisterParents() {
  return (
    <FormContainer
      img={IconParents}
      title="Olá, responsável!"
      role="parents"
    />
  );
}

export default RegisterParents;