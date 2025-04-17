import { string, z } from "zod";


const createServiceValidationSchema = z.object({
    bikeId: string(),
    serviceDate: string(),
    description: string(),
    status: string()
})
const updateServiceValidationSchema = z.object({
    bikeId: string().optional(),
    serviceDate: string().optional(),
    description: string().optional(),
    status: string().optional()
})

export const serviceValidations = {
    createServiceValidationSchema,
    updateServiceValidationSchema
}