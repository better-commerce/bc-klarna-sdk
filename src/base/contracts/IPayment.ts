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

    /**
     * Retrieve an order. Retrieve the full checkout order resource content.
     * API Reference - https://docs.klarna.com/api/checkout/#operation/readOrderMerchant
     * @param data {String}
     * @returns 
     */
    getDetails(data: any): any;
}