import { Router } from "express";
import { customerController } from "./customer.controller";
import validateRequest from "../../middlewares/validateRequest";
import { customerValidations } from "./customer.validation";

const router = Router();

router.post('/', validateRequest(customerValidations.createCustomerValidationSchema), customerController.createCustomerIntoDB);
router.get('/', customerController.getAllCustomersFromDB);
router.get('/:id', customerController.getSingleCustomerFromDB);
router.put('/:id', customerController.updateCustomerIntoDB);
router.delete('/:id', customerController.deleteCustomerFromDB);

export const customerRouter = router;