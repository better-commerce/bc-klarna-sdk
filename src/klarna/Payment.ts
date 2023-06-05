import { Api } from "../api";
import { IPayment } from "../base/contracts/IPayment";
import { RequestMethod } from "../constants/enums/RequestMethod";
import { IPaymentIntent } from "../models/IPaymentIntent";

export class Payment implements IPayment {

    async initIntent(data: IPaymentIntent): Promise<any> {
        try {
            const paymentIntentResult = await Api.call("payments/v1/sessions", RequestMethod.POST, data);
            return paymentIntentResult;
        } catch (error) {
            return { hasError: true, error: error };
        }
    }

    async getDetails(data: any): Promise<any> {
        throw new Error("Not Implemented.");
    }
}