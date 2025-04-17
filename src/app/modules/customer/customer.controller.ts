import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { customerServices } from "./customer.services";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";

const createCustomerIntoDB = catchAsync(async (req: Request, res: Response) => {
    const result = await customerServices.createCustomerIntoDB(req.body);
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "Customer created successfully",
        data: result
    });
})
const getAllCustomersFromDB = catchAsync(async (req: Request, res: Response) => {
    const result = await customerServices.getAllCustomersFromDB();
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Customers fetched successfully",
        data: result
    });
})
const getSingleCustomerFromDB = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await customerServices.getSingleCustomerFromDB(id);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Customer fetched successfully",
        data: result
    });
})
const updateCustomerIntoDB = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await customerServices.updateCustomerIntoDB(id, req.body);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Customer updated successfully",
        data: result
    });
})
const deleteCustomerFromDB = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    await customerServices.deleteCustomerFromDB(id);
    res.status(status.OK).json({
        success: true,
        message: "Customer deleted successfully"
    })
})


export const customerController = {
    createCustomerIntoDB,
    getAllCustomersFromDB,
    getSingleCustomerFromDB,
    updateCustomerIntoDB,
    deleteCustomerFromDB
}