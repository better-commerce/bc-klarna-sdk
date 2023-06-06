import { IPaymentIntent } from "../../models/IPaymentIntent";

export interface IPayment {

    /**
     * Initiate a payment.
     * @param data {IPaymentIntent}
     */
    initIntent(data: IPaymentIntent): any;

    /**
     * Create a one-time payment order.
     * @param data {Object}
     */
    createOneTimePaymentOrder(data: any): any;
    getDetails(data: any): any;
}