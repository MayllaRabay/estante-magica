import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';
import RegisterError from './pages/RegisterError';
import RegisterHome from './pages/RegisterHome';
import RegisterManager from './pages/RegisterManager';
import RegisterParents from './pages/RegisterParents';
import RegisterParentsSucess from './pages/RegisterParentsSucess';
import RegisterSucess from './pages/RegisterSucess';
import RegisterTeacher from './pages/RegisterTeacher';

function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<RegisterHome />} />
        
        <Route path="/cadastro-professor" element={<RegisterTeacher />} />
        <Route path="/cadastro-professor/sucesso" element={<RegisterSucess />} />
        <Route path="/cadastro-professor/erro-email" element={<RegisterError />} />

        <Route path="/cadastro-gestor" element={<RegisterManager />} />
        <Route path="/cadastro-gestor/sucesso" element={<RegisterSucess />} />
        <Route path="/cadastro-gestor/erro-email" element={<RegisterError />} />

        <Route path="/cadastro-responsavel" element={<RegisterParents />} />
        <Route path="/cadastro-responsavel/sucesso" element={<RegisterParentsSucess />} />
      </Routes>
    </Router>
  );
}

export default MyRouter;