import {Router} from "express"
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";
import isAutherized from "../midlewere/isAutherized.js";

const router = Router();

router.post('/register' ,isAutherized, registerCompany);
router.get('/get' ,isAutherized, getCompany);
router.get('/get/:id' ,isAutherized, getCompanyById);
router.put('/update/:id' ,isAutherized, updateCompany);

export default router;