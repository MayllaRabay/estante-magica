import { NavLink } from "react-router-dom";

function Register() {
  return (
    <>
      <h1>Home Registro</h1>
      <NavLink to="cadastro/professor">Professor(a)</NavLink>
      <NavLink to="cadastro/gestor">Gestor(a)</NavLink>
      <NavLink to="cadastro/responsavel">Responsável</NavLink>
    </>
  );
}

export default Register;