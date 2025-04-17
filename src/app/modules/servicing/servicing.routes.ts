import { Router } from "express";
import { serviceController } from "./servicing.controller";
import validateRequest from "../../middlewares/validateRequest";
import { serviceValidations } from "./servicing.validations";


const router = Router();

router.post('/', validateRequest(serviceValidations.createServiceValidationSchema), serviceController.createServiceIntoDB);
router.get('/', serviceController.getAllServicesFromDB);
router.put('/:id', validateRequest(serviceValidations.updateServiceValidationSchema), serviceController.updateServiceIntoDB);
router.get('/status', serviceController.getAllOverdueServices);

export const serviceRouter = router;