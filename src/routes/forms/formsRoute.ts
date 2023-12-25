import { Router } from 'express';
import { createForm, getAllForms } from '../../controller/forms/formsController';


const router = Router();

router.get('/', (req, res) => {
	res.handle(getAllForms , [req.query], 'list');
});
router.post('/create', (req, res) => {
	res.handle(createForm, [req.body]);
});

export default router;