import { throwError } from "../../helper/throw-error"
import { DynamicFormModel } from "../../models/formsModel/formModel";


export const getAllForms = async(data : any)=>{
    try {
        console.log(data);
        return
    } catch (error) {
        throwError(error)
    }
}

export const createForm = async(data : any)=>{
    try {   
             console.log(data);
        
            const { formName, fields } = data;
        
            // Validate the incoming data against your DynamicForm schema
            const dynamicForm = new DynamicFormModel({ formName, fields });
            const validationError = dynamicForm.validateSync();
            if (validationError) {
              throwError(validationError)
            }
        
            // Save the form data
            const savedForm = await dynamicForm.save();
            return savedForm
    } catch (error) {
            throwError(error)
    }
}