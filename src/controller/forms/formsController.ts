import { throwError } from '../../helper/throw-error'
import { DynamicFormModel } from '../../models/formsModel/formModel'

export const getAllForms = async (data: any) => {
	try {
		const result = await DynamicFormModel.find({}).lean()
		return result
	} catch (error) {
		throwError(error)
	}
}

export const createForm = async (data: any) => {
	try {
		const { formName, fields } = data

		if (!formName || !fields) {
			throwError(404, 'FormName and Fields are required')
		}

		// Validate the incoming data against your DynamicForm schema
		const dynamicForm = new DynamicFormModel({ formName, fields })
		const validationError = dynamicForm.validateSync()

		if (validationError) {
			throwError(400, 'Validation Error', validationError.message)
		}

		// Save the form data
		const savedForm = await dynamicForm.save()
		return savedForm
	} catch (error) {
		console.error(error)
		throwError(500, 'Internal Server Error', 'INTERNAL_SERVER_ERROR')
	}
}
