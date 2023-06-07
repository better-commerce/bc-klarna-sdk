import { Api } from "../api";
import { IPayment } from "../base/contracts/IPayment";
import { RequestMethod } from "../constants/enums/RequestMethod";
import { IOrderLine } from "../models/IOrderLine";
import { IPaymentIntent } from "../models/IPaymentIntent";
import { sanitizeAmount } from "../utils/app-util";

export class Payment implements IPayment {

    /**
     * Initiate a payment. 
     * API Reference - https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-1-initiate-a-payment/
     * @param data {IPaymentIntent}
     * @returns 
     */
    async initIntent(data: IPaymentIntent): Promise<any> {
        try {
            const inputData = {
                ...data,
                order_amount: sanitizeAmount(data?.order_amount),
                order_tax_amount: sanitizeAmount(data?.order_tax_amount),
                order_lines: data?.order_lines?.map((x: IOrderLine) => ({
                    type: x?.type,
                    reference: x?.reference,
                    name: x?.name,
                    quantity: x?.quantity,
                    unit_price: sanitizeAmount(x?.unit_price),
                    tax_rate: sanitizeAmount(x?.tax_rate),
                    total_amount: sanitizeAmount(x?.total_amount),
                    total_discount_amount: sanitizeAmount(x?.total_discount_amount),
                    total_tax_amount: sanitizeAmount(x?.total_tax_amount),
                    image_url: x?.image_url,
                    product_url: x?.product_url,
                })),
            };
            const paymentIntentResult = await Api.call("payments/v1/sessions", RequestMethod.POST, inputData);
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
            console.log("createOneTimePaymentOrder [data]", data);
            const inputData = {
                ...rest,
                order_amount: sanitizeAmount(data?.order_amount),
                order_tax_amount: sanitizeAmount(data?.order_tax_amount),
                order_lines: data?.order_lines?.map((x: IOrderLine) => ({
                    type: x?.type,
                    reference: x?.reference,
                    name: x?.name,
                    quantity: x?.quantity,
                    unit_price: sanitizeAmount(x?.unit_price),
                    tax_rate: sanitizeAmount(x?.tax_rate),
                    total_amount: sanitizeAmount(x?.total_amount),
                    total_discount_amount: sanitizeAmount(x?.total_discount_amount),
                    total_tax_amount: sanitizeAmount(x?.total_tax_amount),
                    image_url: x?.image_url,
                    product_url: x?.product_url,
                })),
            };
            const paymentOrderResult = await Api.call(`payments/v1/authorizations/${authorizationToken}/order`, RequestMethod.POST, inputData);
            return paymentOrderResult;
        } catch (error) {
            return { hasError: true, error: error };
        }
    }

    /**
     * Get the details of an order. An order that has the given order id.
     * API Reference - https://docs.klarna.com/api/ordermanagement/#operation/getOrder
     * @param data {String}
     * @returns 
     */
    async getDetails(data: any): Promise<any> {
        try {
            const orderResult = await Api.call(`ordermanagement/v1/orders/${data}`, RequestMethod.GET);
            return orderResult;
        } catch (error) {
            return { hasError: true, error: error };
        }
    }
}