import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';
import Register from './pages/Register';
import RegisterManager from './pages/RegisterManager';
import RegisterParents from './pages/RegisterParents';
import RegisterTeacher from './pages/RegisterTeacher';

function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route path="cadastro-professor" element={<RegisterTeacher />} />
        <Route path="cadastro-gestor" element={<RegisterManager />} />
        <Route path="cadastro-responsavel" element={<RegisterParents />} />
      </Routes>
    </Router>
  );
}

export default MyRouter;