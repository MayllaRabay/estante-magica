import { MenuItem, Select, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import flagBrazil from '../../assets/form/flag-brazil.svg';
import flagColombia from '../../assets/form/flag-colombia.svg';
import flagMexico from '../../assets/form/flag-mexico.svg';
import PasswordInput from '../PasswordInput';
import styles from './styles.module.scss';

function Form({ role }) {
  const { formState: { errors }, handleSubmit, register } = useForm();
  const navigate = useNavigate();

  const [countryCode, setCountryCode] = useState("+55");
  const [schoolType, setSchoolType] = useState();

  function onSubmit(data) {
    console.log(data);
  }

  function backButton() {
    navigate("/");
  }

  const theme = createTheme({
    palette: {
      secondary: {
        main: '#6C57A8',
      }
    }
  });

  const menuItemStyle = {
    color: 'var(--color-gray-400)',
    display: 'flex',
    alignContent: 'center',
    fontFamily: 'Source Sans Pro',
    gap: '0.3rem',
  };

  const countryCodes = [
    {value: "+55", flag: flagBrazil, alt: "Brasil"},
    {value: "+52", flag: flagMexico, alt: "México"},
    {value: "+57", flag: flagColombia, alt: "Colômbia"},
  ];

  const schoolTypes = [
    {value: "Pública Municipal"},
    {value: "Pública Estadual"},
    {value: "Pública Federal"},
    {value: "Privada Comunitária"},
    {value: "Privada Confessional (religiosa)"},
    {value: "Privada Filantrópica"},
  ];

  return(
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form__field}>
          <label htmlFor="name">Nome</label>
          <TextField id="name" type="text" color="secondary" 
            placeholder="Nome completo" variant="outlined"
            {...register("name", { required: true, minLength: 6 })}
            error={!!errors.name}
          />
          {errors.name && <div className={styles.error__message}>Campo obrigatório</div>}
        </div>

        <div className={styles.form__block}>
          <div className={styles.form__field}>
            <label htmlFor="phone">Celular</label>
            <div className={styles.phone__field}>
              <Select id="countryCode" color="secondary"
                {...register("countryCode")}
                value={countryCode} onChange={(e) => setCountryCode(e.target.value)}
                error={!!errors.countryCode}
              >
                {countryCodes.map((option) => (
                  <MenuItem key={option.value} value={option.value} sx={menuItemStyle}>
                    <img src={option.flag} alt={option.alt} />
                    {option.value}
                  </MenuItem>
                ))}
              </Select>
              <TextField id="phone" type="text" color="secondary"
                placeholder="(00) 00000-0000" variant="outlined" fullWidth
                {...register("phone", { required: true, minLength: 11, maxLength: 11 })}
                error={!!errors.phone}
              />
            </div>
            {errors.phone && <div className={styles.error__message}>Campo obrigatório</div>}
          </div>

          {(role === "teacher" || role === "manager") &&
            <div className={styles.form__field}>
              <label htmlFor="schoolType">Tipo da escola</label>
              <Select id="schoolType" color="secondary" 
                {...register("schoolType", { required: true })}
                value={schoolType} onChange={(e) => setSchoolType(e.target.value)}
                error={!!errors.schoolType}
              >
                {schoolTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value} sx={menuItemStyle}>
                    {option.value}
                  </MenuItem>
                ))}
              </Select>
              {errors.school && <div className={styles.error__message}>Campo obrigatório</div>} 
            </div>
          }
        </div>

        <div className={styles.form__field}>
          <label htmlFor="email">E-mail</label>
          <TextField id="email" type="text" color="secondary" 
            placeholder="email@email.com.br" variant="outlined"
            {...register("email", { required: true })}
            error={!!errors.email}
          />
          {errors.email && <div className={styles.error__message}>Campo obrigatório</div>}
        </div>

        {(role === "teacher" || role === "manager") &&
          <div className={styles.form__field}>
            <label htmlFor="password">Senha</label>
            <PasswordInput id="password"
              register={() => register("password", { required: true, minLength: 6 })}
              error={!!errors.password}
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
            <input id="terms" type="checkbox"
              {...register("terms", { required: true })}
            />
          </div>
          {errors.terms && <div className={styles.error__message}>Campo obrigatório</div>}
        </div>
        
        <div className={styles.button__wrapper}>
          <button type="submit" aria-label="cadastrar" className={styles.main__button}>Cadastrar</button>
          <button onClick={backButton} aria-label="voltar" className={styles.secondary__button}>Voltar</button>
        </div>
      </form>
    </ThemeProvider>
  );
}

export default Form;