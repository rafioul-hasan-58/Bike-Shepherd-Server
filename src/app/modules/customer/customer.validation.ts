import { string, z } from "zod";

const createCustomerValidationSchema = z.object({
    name: string(),
    email: string(),
    phone: string()
})
const updateCustomerValidationSchema = z.object({
    name: string().optional(),
    email: string().optional(),
    phone: string().optional()
})

export const customerValidations = {
    createCustomerValidationSchema,
    updateCustomerValidationSchema
}