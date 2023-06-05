import { KlarnaEnvironment } from "../base/config/KlarnaEnvironment";
import { RequestMethod } from "../constants/enums/RequestMethod";
import fetcher from "./util/fetcher";

/**
 * Class {Api}
 */
export class Api {

    static async call(url: string, method: string, params?: any, cookies?: any): Promise<any> {

        let options = {
            url,
            method,
            cookies,
            baseUrl: KlarnaEnvironment.baseUrl,
        };

        if (params) {
            if (method?.toUpperCase() === RequestMethod.GET) {
                options = {
                    ...options,
                    ...{ params: params },
                };
            } else if (method?.toUpperCase() === RequestMethod.POST) {
                options = {
                    ...options,
                    ...{ data: params },
                };
            }
        }

        return await fetcher(options);
    }
}