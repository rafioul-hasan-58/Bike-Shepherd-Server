import { number, string, z } from "zod";

const createBikeValidationSchema = z.object({
    brand: string(),
    model: string(),
    year: number(),
    customerId: string()
})
const updateBikeValidationSchema = z.object({
    brand: string().optional(),
    model: string().optional(),
    year: number().optional(),
    customerId: string().optional()
})

export const bikeValidations = {
    createBikeValidationSchema,
    updateBikeValidationSchema
}