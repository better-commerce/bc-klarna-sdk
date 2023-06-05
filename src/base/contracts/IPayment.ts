export interface IPayment {
    initIntent(data: any): any;
    getDetails(data: any): any;
}