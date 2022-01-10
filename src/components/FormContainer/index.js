import Form from '../Form';
import HeaderBox from '../HeaderBox';

function FormContainer({ img, title, role }) {
  return(
    <HeaderBox img={img} title={title}>
      {(role === "teacher" || role === "manager")
        ? <h4>Se você já tiver uma conta, <span>faça seu login</span>.</h4>
        : <p>
            Só é possível aplicar o projeto por uma escola. 
            Mas você pode acompanhar tudo de perto, recebendo nossos conteúdos!
          </p>
      }
      <Form role={role}/>
    </HeaderBox>
  );
}

export default FormContainer;