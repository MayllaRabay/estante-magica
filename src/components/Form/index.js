import { Checkbox, MenuItem, Select, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import flagBrazil from '../../assets/form/flag-brazil.svg';
import flagColombia from '../../assets/form/flag-colombia.svg';
import flagMexico from '../../assets/form/flag-mexico.svg';
import checkedIcon from '../../assets/form/icon-check.svg';
import uncheckedIcon from '../../assets/form/icon-uncheck.svg';
import { formatPhone } from '../../utils/formatters';
import Button from '../Button';
import HelpButton from '../HelpButton';
import PasswordInput from '../PasswordInput';
import styles from './styles.module.scss';

function Form({ role }) {
  const { formState: { errors }, handleSubmit, register } = useForm();
  const navigate = useNavigate();

  const [countryCode, setCountryCode] = useState("+55");
  const [phone, setPhone] = useState("");
  const [schoolType, setSchoolType] = useState("");

  const mockEmails = [
    "email@email.com",
    "teste@email.com.",
    "maylla@email.com",
    "estante-magica@email.com.br",
    "marcelo@admin.com.br",
    "luiz@admin.com.br",
  ];

  function onSubmit(data) {
    const isEmailNew = mockEmails.findIndex((email) => email === data.email);
    
    if(role === "parents") {
      navigate("/cadastro-responsavel/sucesso");
    }

    if(role === "teacher") {
      if(isEmailNew === -1) {
        navigate("/cadastro-professor/sucesso");
      } else {
        navigate("/cadastro-professor/erro-email");
      }
    }

    if(role === "manager") {
      if(isEmailNew === -1) {
        navigate("/cadastro-gestor/sucesso");
      } else {
        navigate("/cadastro-gestor/erro-email");
      }
    }
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
    fontFamily: 'Source Sans Pro',
    height: '2.49rem'
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
          <TextField 
            id="name"
            type="text"
            color="secondary" 
            placeholder="Nome completo"
            variant="outlined"
            {...register("name", { required: true })}
            error={!!errors.name}
          />
          {errors.name && <div className={styles.error__message}>Campo obrigatório</div>}
        </div>

        <div className={styles.form__block}>
          <div className={styles.form__field}>
            <label htmlFor="phone">
              <div className={styles.phone__label}>
                Celular 
                <HelpButton />
              </div>
            </label>
            <div className={styles.phone__field}>
              <Select 
                id="countryCode"
                color="secondary"
                sx={menuItemStyle}
                {...register("countryCode")}
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                error={!!errors.countryCode}
              >
                {countryCodes.map((option) => (
                  <MenuItem key={option.value} value={option.value} sx={menuItemStyle}>
                    <div className={styles.phone__label}>
                      <img src={option.flag} alt={option.alt} />
                      <div>{option.value}</div>
                    </div>
                  </MenuItem>
                ))}
              </Select>
              <TextField 
                id="phone"
                type="text"
                color="secondary" 
                placeholder="(00) 00000-0000"
                variant="outlined"
                fullWidth
                {...register("phone", { required: true, minLength: 14, maxLength: 14, pattern: /^[0-9()-]+$/i })}
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                inputProps={{ maxLength: 14 }}
                error={!!errors.phone}
              />
            </div>
            <div className={styles.error__message}>
              {errors.phone?.type === 'required' && "Campo obrigatório"}
              {(errors.phone?.type === 'minLength' || errors.phone?.type === 'maxLength')
                && "O telefone deve conter entre 10 a 11 caracteres"}
              {errors.phone?.type === 'pattern' && "O telefone deve conter apenas números"}
            </div>
          </div>

          {(role === "teacher" || role === "manager") &&
            <div className={styles.form__field}>
              <label htmlFor="schoolType">Tipo da escola</label>
              <Select
                id="schoolType"
                color="secondary"
                displayEmpty
                sx={menuItemStyle}
                {...register("schoolType", { required: true })}
                value={schoolType}
                onChange={(e) => setSchoolType(e.target.value)}
                error={!!errors.schoolType}
              > 
                <MenuItem disabled value="" sx={menuItemStyle}>
                  <div style={{ color: 'var(--color-gray-200)' }}>Selecione a escola</div>
                </MenuItem>
                {schoolTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value} sx={menuItemStyle}>
                    {option.value}
                  </MenuItem>
                ))}
              </Select>
              {errors.schoolType && <div className={styles.error__message}>Campo obrigatório</div>}
            </div>
          }
        </div>

        <div className={styles.form__field}>
          <label htmlFor="email">E-mail</label>
          <TextField
            id="email"
            type="text"
            color="secondary" 
            placeholder="email@email.com.br"
            variant="outlined"
            {...register("email", { required: true })}
            error={!!errors.email}
          />
          {errors.email && <div className={styles.error__message}>Campo obrigatório</div>}
        </div>

        {(role === "teacher" || role === "manager") &&
          <div className={styles.form__field}>
            <label htmlFor="password">Senha</label>
            <PasswordInput
              id="password"
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
            <Checkbox 
              id="terms"
              color="secondary"
              size="medium"
              icon={<img src={uncheckedIcon} alt="" />}
              checkedIcon={<img src={checkedIcon} alt="" />}
              {...register("terms", { required: true })}
              sx={{ marginLeft: "-0.5rem"}}
            />
          </div>
          {errors.terms && <div className={styles.error__message}>Campo obrigatório</div>}
        </div>
        
        <div className={styles.button__wrapper}>
          <Button main={true} type="submit" text="Cadastrar" label="cadastrar"  />
          <Button main={false} text="Voltar" label="voltar" onClick={backButton} />
        </div>
      </form>
    </ThemeProvider>
  );
}

export default Form;