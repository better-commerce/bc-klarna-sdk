import { Endpoints } from "../../constants/Endpoints";

/**
 * Class {KlarnaEnvironment}
 */
export class KlarnaEnvironment {

    // Static variables
    /**
     * Field to store the user id.
     * @property {string}
     */
    static userId: string;

    /**
     * Field to store the password.
     * @property {string}
     */
    static password: string;

    /**
     * Field to store the paypal base url.
     * @property {string}
     */
    static baseUrl: string;

    static init(userId: string, password: string, useSandBox = true) {
        KlarnaEnvironment.userId = userId;
        KlarnaEnvironment.password = password;

        if (useSandBox) {
            KlarnaEnvironment.baseUrl = Endpoints.Base.SANDBOX_URL;
        } else {
            KlarnaEnvironment.baseUrl = Endpoints.Base.PRODUCTION_URL;
        }
        return this;
    }

    /**
     * Returns the public key.
     * @return {string}
     */
    static getUserId(): string {
        return KlarnaEnvironment.userId;
    }

    /**
     * Returns the secret key.
     * @return {string}
     */
    static getPassword(): string {
        return KlarnaEnvironment.password;
    }

    /**
     * Returns the base url.
     * @return {string}
     */
    static getBaseUrl(): string {
        return KlarnaEnvironment.baseUrl;
    }
}