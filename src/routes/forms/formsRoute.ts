import { Router } from 'express'
import {
	createForm,
	getAllForms,
	getForm
} from '../../controller/forms/formsController'

const router = Router()

router.get('/', (req, res) => {
	res.handle(getAllForms, [req.query])
})
router.get('/:id', (req, res) => {
	res.handle(getForm, [req.params.id])
})
router.post('/create', (req, res) => {
	res.handle(createForm, [req.body])
})

export default router
