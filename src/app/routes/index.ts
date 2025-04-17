import { Router } from "express";
import { customerRouter } from "../modules/customer/customer.routes";

const router = Router();

const moduleRoutes = [
    {
        path: '/customers',
        route: customerRouter
    },
]
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router