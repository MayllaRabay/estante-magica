import { FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { useState } from 'react';
import visibilityOff from '../../assets/form/eye-close.svg';
import visibility from '../../assets/form/eye-open.svg';

function PasswordInput(props) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <FormControl>
      <OutlinedInput
        id={props.id}
        type={passwordVisible ? "text" : "password"}
        color="secondary"
        placeholder="Senha de 6 dígitos"
        {...props.register()}
        endAdornment={
          <InputAdornment position="end">
            <IconButton 
              aria-label="alternar visibilidade da senha"
              onClick={() => setPasswordVisible(!passwordVisible)}
              sx={{ width: '1.5rem' }}
            >
              {passwordVisible 
                ? <img src={visibility} alt="senha visível" />
                : <img src={visibilityOff} alt="senha escondida" />
              }
            </IconButton>
          </InputAdornment>
        }
        error={props.error}
      />
    </FormControl>
  );
};

export default PasswordInput;