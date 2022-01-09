import { FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { useState } from 'react';
import VisibilityOff from '../../assets/form/eye-close.svg';
import Visibility from '../../assets/form/eye-open.svg';

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
            <IconButton aria-label="alternar visibilidade da senha"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible 
                ? <img src={Visibility} alt="senha visível" /> 
                : <img src={VisibilityOff} alt="senha escondida" />
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