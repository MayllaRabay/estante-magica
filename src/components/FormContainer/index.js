import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

function FormContainer({ img, title, role, form }) {
  const navigate = useNavigate();

  function backButton() {
    navigate("/");
  }

  return(
    <div className={styles.content__wrapper}>
      <div className={styles.img__container}>
        <img src={img} alt="" />
      </div>
      <h1>{title}</h1>
      {role === "teacher" || role === "manager"
        ? <h4>Se você já tiver uma conta, <span>faça seu login</span>.</h4>
        : <p>Só é possível aplicar o projeto por uma escola. Mas você pode acompanhar tudo de perto, recebendo nossos conteúdos!</p>
      }
      <form>
        {form}
        <div className={styles.button__wrapper}>
          <button type="submit" className={styles.main__button}>Cadastrar</button>
          <button onClick={backButton} className={styles.secondary__button}>Voltar</button>
        </div>
      </form>
    </div>
  );
}

export default FormContainer;