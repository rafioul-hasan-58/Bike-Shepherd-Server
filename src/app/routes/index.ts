import { Router } from "express";
import { customerRouter } from "../modules/customer/customer.routes";
import { bikeRouter } from "../modules/bike/bike.routes";
import { serviceRouter } from "../modules/servicing/servicing.routes";

const router = Router();

const moduleRoutes = [
    {
        path: '/customers',
        route: customerRouter
    },
    {
        path: '/bikes',
        route: bikeRouter
    },
    {
        path: '/services',
        route: serviceRouter
    }
]
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router