import { useNavigate } from 'react-router-dom';
import iconGeneric from '../../assets/icon-generic.svg';
import Button from '../../components/Button';
import HeaderBox from '../../components/HeaderBox';
import styles from './styles.module.scss';

function RegisterError() {
  const navigate = useNavigate();

  function backButton() {
    navigate("/");
  }

  return(
    <>
      <HeaderBox img={iconGeneric} title="Já existe uma conta com este e-mail!">
        <p>Faça login pelo computador ou acesse o aplicativo da Estante Mágica para começar a aplicar o projeto!</p>
        <p>Se quiser criar uma nova conta, utilize um e-mail diferente.</p>
        <div className={styles.content__mobile}>
          <Button main={true} text="Baixar app pela PlayStore" label="ir para PlayStore" />
          <Button main={true} text="Baixar app pela AppStore" label="ir para AppStore" />
          <Button main={false} text="Criar conta nova" label="criar conta nova" onClick={backButton} />
        </div>
        <div className={styles.content__desktop}>
          <a href="https://www.estantemagica.com.br/" style={{ textDecoration: 'none' }}>
            <Button main={true} text="Fazer login" label="fazer login" />
          </a>
          <Button main={false} text="Criar conta nova" label="criar conta nova" onClick={backButton} />
        </div>
      </HeaderBox>
      <a
        className={styles.content__mobile}
        style={{ marginBottom: "2rem" }}
        href="https://www.estantemagica.com.br/"
      >
        Retornar para o site
      </a>
    </>
  );
}

export default RegisterError;