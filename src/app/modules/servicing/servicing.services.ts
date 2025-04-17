import { prisma } from "../../utils/prisma"


const createServiceIntoDB = async (payload: any) => {
    const result = await prisma.serviceRecord.create({
        data: payload
    })
    return result
}

const getAllServicesFromDB = async () => {
    const result = await prisma.serviceRecord.findMany();
    return result
}
const updateServiceIntoDB = async (serviceId: string, payload: any) => {
    const isServiceExists = await prisma.serviceRecord.findUnique({
        where: {
            serviceId
        }
    })
    if (!isServiceExists) {
        throw new Error("Service not found!")
    }
    const result = await prisma.serviceRecord.update({
        where: {
            serviceId
        },
        data: payload
    })
    return result
}

const getAllOverdueServices = async () => {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
    const result = await prisma.serviceRecord.findMany({
        where: {
            AND: [
                {
                    OR: [
                        {
                            status: 'pending'
                        },
                        {
                            status: 'inProgress'
                        }
                    ]
                },
                {
                    serviceDate: {
                        lt: sevenDaysAgo
                    }
                }
            ]
        }
    });
    return result
}
export const servicingServices = {
    createServiceIntoDB,
    getAllServicesFromDB,
    updateServiceIntoDB,
    getAllOverdueServices
}