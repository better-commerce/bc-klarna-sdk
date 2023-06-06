import { Api } from "../api";
import { IPayment } from "../base/contracts/IPayment";
import { RequestMethod } from "../constants/enums/RequestMethod";
import { IPaymentIntent } from "../models/IPaymentIntent";

export class Payment implements IPayment {

    /**
     * Initiate a payment. 
     * API Reference - https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-1-initiate-a-payment/
     * @param data {IPaymentIntent}
     * @returns 
     */
    async initIntent(data: IPaymentIntent): Promise<any> {
        try {
            const paymentIntentResult = await Api.call("payments/v1/sessions", RequestMethod.POST, data);
            return paymentIntentResult;
        } catch (error) {
            return { hasError: true, error: error };
        }
    }

    /**
     * Create a one-time payment order. Once Klarna authorizes the purchase, use the authorization token to create an order and complete the one-time payment.
     * API Reference - https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-3-create-an-order/create-a-one-time-payment-order/
     * @param data {Object}
     * @returns 
     */
    async createOneTimePaymentOrder(data: any): Promise<any> {
        try {
            const { authorizationToken, ...rest } = data;
            const paymentIntentResult = await Api.call(`payments/v1/authorizations/${authorizationToken}/order`, RequestMethod.POST, { ...rest });
            return paymentIntentResult;
        } catch (error) {
            return { hasError: true, error: error };
        }
    }

    async getDetails(data: any): Promise<any> {
        throw new Error("Not Implemented.");
    }
}