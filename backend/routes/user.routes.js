import {Router} from "express"
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAutherized from "../midlewere/isAutherized.js";

const router = Router();

router.post('/register' , register);
router.post('/login' , login);
router.post('/profile/update' ,isAutherized, updateProfile);
router.get('/logout' , logout)

export default router;