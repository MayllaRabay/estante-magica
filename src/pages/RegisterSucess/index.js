import iconClose from '../../assets/icon-close.svg';
import iconGeneric from '../../assets/icon-generic.svg';
import registerSucess from '../../assets/register-sucess.svg';
import Button from '../../components/Button';
import HeaderBox from '../../components/HeaderBox';
import styles from './styles.module.scss';

function RegisterSucess() {
  return(
    <>
      <div className={styles.content__desktop}>
        <img src={registerSucess} alt="" />
          <button className={styles.close__button}>
            <img src={iconClose} alt="fechar" />
          </button>
          <h1>Parabéns!</h1>
          <p>
            Você faz parte do maior projeto de leitura e escrita da América Latina! 
            Seu próximo passo é <strong>criar sua primeira turma.</strong>
          </p>
      </div>

      <div className={styles.content__mobile}>
        <HeaderBox title="Parabéns!" img={iconGeneric}>
          <p>
            Você faz parte do maior projeto de leitura e escrita da América Latina! 
            Seu próximo passo é <strong>criar sua primeira turma.</strong>
          </p>
          <p>
            Baixe o aplicativo da Estante Mágica ou faça login pelo computador.
          </p>
          <Button main={true} text="Baixar app pela PlayStore" label="ir para PlayStore" />
          <Button main={true} text="Baixar app pela AppStore" label="ir para AppStore" />
        </HeaderBox>
        <a 
          className={styles.content__mobile} 
          style={{ marginBottom: "2rem" }} 
          href="https://www.estantemagica.com.br/"
        >
          Retornar para o site
        </a>
      </div>
    </>
  );
}

export default RegisterSucess;