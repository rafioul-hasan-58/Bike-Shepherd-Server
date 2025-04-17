import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { servicingServices } from "./servicing.services";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";

const createServiceIntoDB = catchAsync(async (req: Request, res: Response) => {
    const result = await servicingServices.createServiceIntoDB(req.body);
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "Service created successfully",
        data: result
    });
})
const getAllServicesFromDB = catchAsync(async (req: Request, res: Response) => {
    const result = await servicingServices.getAllServicesFromDB();
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Service fetched successfully",
        data: result
    });
})
const updateServiceIntoDB = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await servicingServices.updateServiceIntoDB(id, req.body);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Service updated successfully",
        data: result
    });
})
const getAllOverdueServices = catchAsync(async (req: Request, res: Response) => {
    const result = await servicingServices.getAllOverdueServices();
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Overdue or pending services fetched successfully",
        data: result
    });
})

export const serviceController = {
    createServiceIntoDB,
    getAllServicesFromDB,
    updateServiceIntoDB,
    getAllOverdueServices
}