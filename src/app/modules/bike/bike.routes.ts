import { Router } from "express";
import { bikeController } from "./bike.controller";
import { bikeValidations } from "./bike.validations";
import validateRequest from "../../middlewares/validateRequest";


const router = Router();

router.post('/', validateRequest(bikeValidations.createBikeValidationSchema), bikeController.createBikeIntoDB);
router.get('/', bikeController.getAllBikesFromDB)
router.get('/:id', bikeController.getSingleBikeFromDB)

export const bikeRouter = router;