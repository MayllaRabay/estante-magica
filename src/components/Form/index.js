import { useState } from 'react';

function Form() {
  const [checked, setChecked] = useState(false);
  
  return(
    <>
      <label>
        <input id="checkbox" type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
        Li e aceito os <span>Termos de Uso</span> e a <span>Política de Privacidade</span>.
      </label>
    </>
  );
}

export default Form;