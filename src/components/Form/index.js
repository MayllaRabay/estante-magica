import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

function Form({ role }) {
  const { formState: { errors }, handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  function onSubmit(data) {
    console.log(data);
  }

  function backButton() {
    navigate("/");
  }

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form__field}>
        <label htmlFor="name">Nome</label>
        <input id="name" type="text"
          {...register("name", { required: true, minLength: 6 })}
        />
        {errors.name && <div className={styles.error__message}>Campo obrigatório</div>}
      </div>

      <div className={styles.form__field}>
        <label htmlFor="phone">Celular</label>
        <input id="phone" type="text"
          {...register("phone", { required: true, minLength: 11, maxLength: 11 })}
        />
        {errors.phone && <div className={styles.error__message}>Campo obrigatório</div>}
      </div>

      {(role === "teacher" || role === "manager") &&
        <div className={styles.form__field}>
          <label htmlFor="school">Tipo da escola</label>
          <input id="school" type="dropdown"
            {...register("school", { required: true })}
          />
          {errors.school && <div className={styles.error__message}>Campo obrigatório</div>} 
        </div>
      }

      <div className={styles.form__field}>
        <label htmlFor="email">E-mail</label>
        <input id="email" type="text"
          {...register("email", { required: true })} 
        />
        {errors.email && <div className={styles.error__message}>Campo obrigatório</div>}
      </div>

      {(role === "teacher" || role === "manager") &&
        <div className={styles.form__field}>
          <label htmlFor="password">Senha</label>
          <input id="password" type="text"
            {...register("password", { required: true, minLength: 6 })} 
          />
          <div className={errors.password ? styles.error__message : styles.field__message}>Sua senha deve conter pelo menos 6 dígitos</div>
          {errors.password?.type === "required" && <div className={styles.error__message}>Campo obrigatório</div>}
        </div>
      }
      
      <div className={styles.form__field}>
        <div className={styles.terms__field}>
          <label htmlFor="terms">
            Li e aceito os <span>Termos de Uso</span> e a <span>Política de Privacidade</span>.
          </label>
          <input id="terms" type="checkbox" checked={checked} onChange={() => setChecked(!checked)}
            {...register("terms", { required: true })}
          />
        </div>
        {errors.terms && <div className={styles.error__message}>Campo obrigatório</div>}
      </div>
      
      <div className={styles.button__wrapper}>
        <button type="submit" className={styles.main__button}>Cadastrar</button>
        <button onClick={backButton} className={styles.secondary__button}>Voltar</button>
      </div>
    </form>
  );
}

export default Form;