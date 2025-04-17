import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";
import { bikeServices } from "./bike.services";


const createBikeIntoDB = catchAsync(async (req: Request, res: Response) => {
    const result = await bikeServices.createBikeIntoDB(req.body);
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "Bike created successfully",
        data: result
    });
})
const getAllBikesFromDB = catchAsync(async (req: Request, res: Response) => {
    const result = await bikeServices.getAllBikesFromDB();
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "Bike fetched successfully",
        data: result
    });
})
const getSingleBikeFromDB = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await bikeServices.getSingleBikeFormDB(id);
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "Bike fetched successfully",
        data: result
    });
})

export const bikeController = {
    createBikeIntoDB,
    getAllBikesFromDB,
    getSingleBikeFromDB
}