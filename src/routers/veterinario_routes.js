import express from 'express';
import {
  login,
  registro,
  confirmEmail,
  listarVeterinarios,
  recuperarPassword,
  comprobarTokenPasword,
  nuevoPassword,
  perfil,
  actualizarPassword,
  detalleVeterinario,
  actualizarPerfil,
} from '../controllers/veterinario_controller.js';
import verificarAutenticacion from '../middlewares/autenticacion.js';

const router = express.Router();

router.post('/login', login);
router.post('/registro', registro);
router.get('/confirmar/:token', confirmEmail);
router.get('/veterinarios', listarVeterinarios);
router.post('/recuperar-password', recuperarPassword);
router.get('/recuperar-password/:token', comprobarTokenPasword);
router.post('/nuevo-password/:token', nuevoPassword);

router.get('/perfil', verificarAutenticacion, perfil);
router.put('/veterinario/actualizarpassword', verificarAutenticacion, actualizarPassword);
router.get('/veterinario/:id', verificarAutenticacion, detalleVeterinario);
router.put('/veterinario/:id', verificarAutenticacion, actualizarPerfil);

export default router;
