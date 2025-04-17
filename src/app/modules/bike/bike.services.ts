import { prisma } from "../../utils/prisma";


const createBikeIntoDB = async (payload: any) => {
    const result = await prisma.bike.create({
        data: payload
    })
    return result
}

const getAllBikesFromDB = async () => {
    const result = await prisma.bike.findMany();
    return result
}
const getSingleBikeFormDB = async (bikeId: string) => {
    const result = await prisma.bike.findUnique({
        where: {
            bikeId
        }
    })
    return result
}
export const bikeServices = {
    createBikeIntoDB,
    getAllBikesFromDB,
    getSingleBikeFormDB
}