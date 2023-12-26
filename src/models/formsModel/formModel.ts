import mongoose, { Schema, Document } from 'mongoose'

// Define a basic Field interface for common properties
interface Field {
	label: string
	type: string
	isRequired: boolean // Updated to isRequired
}

// Define specific interfaces for each type of field
interface TextField extends Field {
	type: 'text'
	minLength?: number
	maxLength?: number
}

interface TextAreaField extends Field {
	type: 'textarea'
	maxLength?: number
}

interface EmailField extends Field {
	type: 'email'
	isRequired: boolean
	regexValidation?: boolean
}

interface PasswordField extends Field {
	type: 'password'
	isRequired: boolean
	minLength?: number
	maxLength?: number
	regexValidation?: boolean
}

interface RadioField extends Field {
	type: 'radio'
	options: string[]
}

interface CheckboxField<T = any> extends Field {
	type: 'checkbox'
	hasOtherOption: boolean
	otherInput?: T
}

interface DateField extends Field {
	type: 'date'
}

// Define the main Form interface
interface DynamicForm {
	formName: string
	fields: (
		| TextField
		| TextAreaField
		| RadioField
		| CheckboxField<any>
		| DateField
	)[]
}

// Mongoose schema for form fields
const textFieldSchema = new Schema<TextField>({
	label: { type: String, required: true },
	type: { type: String, required: true },
	isRequired: { type: Boolean, required: true }, // Updated to isRequired
	minLength: { type: Number },
	maxLength: { type: Number }
})

const textAreaFieldSchema = new Schema<TextAreaField>({
	label: { type: String, required: true },
	type: { type: String, required: true },
	isRequired: { type: Boolean, required: true }, // Updated to isRequired
	maxLength: { type: Number }
})

const emailFieldSchema = new Schema<EmailField>({
	label: { type: String, required: true },
	type: { type: String, required: true },
	isRequired: { type: Boolean, required: true },
	regexValidation: { type: Boolean }
})

const passwordFieldSchema = new Schema<PasswordField>({
	label: { type: String, required: true },
	type: { type: String, required: true },
	isRequired: { type: Boolean, required: true },
	minLength: { type: Number },
	maxLength: { type: Number },
	regexValidation: { type: Boolean }
})

const radioFieldSchema = new Schema<RadioField>({
	label: { type: String, required: true },
	type: { type: String, required: true },
	isRequired: { type: Boolean, required: true }, // Updated to isRequired
	options: { type: [String], required: true }
})

const checkboxFieldSchema = new Schema<CheckboxField<any>>({
	label: { type: String, required: true },
	type: { type: String, required: true },
	isRequired: { type: Boolean, required: true }, // Updated to isRequired
	hasOtherOption: { type: Boolean, required: true },
	otherInput: { type: Schema.Types.Mixed }
})

const dateFieldSchema = new Schema<DateField>({
	label: { type: String, required: true },
	type: { type: String, required: true },
	isRequired: { type: Boolean, required: true } // Updated to isRequired
})

// Mongoose schema for dynamic form
const dynamicFormSchema = new Schema<DynamicForm>({
	formName: { type: String, required: true },
	fields: [{ type: Schema.Types.Mixed }]
})

// Create mongoose models
const TextFieldModel = mongoose.model<TextField & Document>(
	'TextField',
	textFieldSchema
)
const TextAreaFieldModel = mongoose.model<TextAreaField & Document>(
	'TextAreaField',
	textAreaFieldSchema
)
const EmailFieldModel = mongoose.model<EmailField & Document>(
	'EmailField',
	emailFieldSchema
)
const PasswordFieldModel = mongoose.model<PasswordField & Document>(
	'PasswordField',
	passwordFieldSchema
)
const RadioFieldModel = mongoose.model<RadioField & Document>(
	'RadioField',
	radioFieldSchema
)
const CheckboxFieldModel = mongoose.model<CheckboxField<any> & Document>(
	'CheckboxField',
	checkboxFieldSchema
)
const DateFieldModel = mongoose.model<DateField & Document>(
	'DateField',
	dateFieldSchema
)
const DynamicFormModel = mongoose.model<DynamicForm & Document>(
	'DynamicForm',
	dynamicFormSchema
)

export {
	TextFieldModel,
	TextAreaFieldModel,
	EmailFieldModel,
	PasswordFieldModel,
	RadioFieldModel,
	CheckboxFieldModel,
	DateFieldModel,
	DynamicFormModel
}
