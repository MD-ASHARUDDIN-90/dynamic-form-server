import { Router } from 'express';
import { createForm, getAllForms } from '../../controller/forms/formsController';


const router = Router();

router.post('/', (req, res) => {
	res.handle(getAllForms, [req.body]);
});
router.post('/create', (req, res) => {
	res.handle(createForm, [req.body]);
});

export default router;