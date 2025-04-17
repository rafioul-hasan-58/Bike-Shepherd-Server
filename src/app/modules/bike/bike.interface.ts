import { Customer } from "../../../../generated/prisma";

export interface IBike {
    bikeId: string;
    brand: 'Honda' | 'Yamaha';
    model: string;
    year: number;
    customer: Customer;
    customerId:string
}