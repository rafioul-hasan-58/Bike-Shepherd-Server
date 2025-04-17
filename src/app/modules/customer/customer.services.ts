import { PrismaClient } from "../../../../generated/prisma";
import { ICustomer } from "./customer.interface";


const prisma = new PrismaClient();

const createCustomerIntoDB = async (payload: ICustomer) => {
    const result = await prisma.customer.create({
        data: payload
    })
    return result
}

const getAllCustomersFromDB = async () => {
    const result = await prisma.customer.findMany();
    return result
}
const getSingleCustomerFromDB = async (customerId: string) => {
    const result = await prisma.customer.findUnique({
        where: {
            customerId
        }
    });
    return result
}

const updateCustomerIntoDB = async (customerId: string, payload: Partial<ICustomer>) => {
    const result = await prisma.customer.update({
        where: {
            customerId
        },
        data: payload
    })
    return result
}

const deleteCustomerFromDB = async (customerId: string) => {
    const result = await prisma.customer.delete({
        where: {
            customerId
        }
    })
    return result
}

export const customerServices = {
    createCustomerIntoDB,
    getAllCustomersFromDB,
    getSingleCustomerFromDB,
    updateCustomerIntoDB,
    deleteCustomerFromDB

}