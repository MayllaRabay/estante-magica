import { useState } from 'react';
import helpIcon from '../../assets/form/icon-help.svg';
import styles from './styles.module.scss';

function HelpButton() {
  const [isVisible, setIsVisible] = useState(false);

  function handleIsVisible() {
    setIsVisible(!isVisible);
  };
  
  return(
    <div className={styles.content__wrapper}>
      <button type="button" onClick={handleIsVisible}>
        <img src={helpIcon} alt="ajuda" />
      </button>
      {isVisible &&
        <div className={styles.modal__helper}>
          <div>Por que precisamos do seu número de celular?</div>
          <p>
            Nós fazemos um acompanhamento do seu projeto pelo WhatsApp. 
            Vamos enviar as orientações de cada etapa e tirar suas dúvidas por lá!
          </p>
        </div>
      }
    </div>
  );
}

export default HelpButton;