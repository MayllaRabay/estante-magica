import FormContainer from "../../components/FormContainer";
import IconTeacher from '../../assets/icon-teacher.svg';

function RegisterTeacher() {
  return (
    <FormContainer
      img={IconTeacher}
      title="Criar conta de professor(a)"
      role="teacher"
    />
  );
}

export default RegisterTeacher;