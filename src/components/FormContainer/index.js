import Form from '../Form';
import styles from './styles.module.scss';

function FormContainer({ img, title, role }) {
  return(
    <div className={styles.content__wrapper}>
      <div className={styles.img__container}>
        <img src={img} alt="" />
      </div>
      <h1>{title}</h1>
      {(role === "teacher" || role === "manager")
        ? <h4>Se você já tiver uma conta, <span>faça seu login</span>.</h4>
        : <p>Só é possível aplicar o projeto por uma escola. Mas você pode acompanhar tudo de perto, recebendo nossos conteúdos!</p>
      }
      <Form role={role}/>
    </div>
  );
}

export default FormContainer;