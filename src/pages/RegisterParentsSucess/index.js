import iconGeneric from '../../assets/icon-generic.svg';
import Button from '../../components/Button';
import HeaderBox from '../../components/HeaderBox';

function RegisterParentsSucess() {
  return(
    <HeaderBox img={iconGeneric} title="Cadastro confirmado!">
      <p>
        Obrigada por incentivar e fazer parte do <strong>
          maior projeto de leitura e escrita da América Latina.
        </strong> Fique de olho em seu e-mail para não perder nossos conteúdos!
      </p>
      <a href="https://www.estantemagica.com.br/" style={{ textDecoration: 'none' }}>
        <Button main={true} text="Voltar para o site" label="voltar para o site principal" />
      </a>
    </HeaderBox>
  );
}

export default RegisterParentsSucess;