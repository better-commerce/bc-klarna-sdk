# BetterCommerce Klarna NodeJS SDK

BetterCommerce's Klarna NodeJS SDK enables BC client applications to integrate with Klarna merchant API system. It publishes an interface to interact with [Klarna API v1](https://docs.klarna.com/api) endpoints.

Use below command for package installation:

```
npm install @better-commerce/bc-klarna-sdk
```

## Architecture Diagram

![Architecture Diagram](/assets/app-architecture.png)

## SDK Initialization

**Use following snippet to initialize the SDK:**

```
KlarnaEnvironment.init("<userId>", "<password>");
```

## Usage Example

### Create Payment Intent

```
const data = {
    "intent": "buy",
    "purchase_country": "GB",
    "purchase_currency": "GBP",
    "locale": "en-GB",
    "order_amount": 10,
    "order_tax_amount": 0,
    "order_lines": [{
        "type": "physical",
        "reference": "19-402",
        "name": "Battery Power Pack",
        "quantity": 1,
        "unit_price": 10,
        "tax_rate": 0,
        "total_amount": 10,
        "total_discount_amount": 0,
        "total_tax_amount": 0,
        "image_url": "https://www.exampleobjects.com/logo.png",
        "product_url": "https://www.estore.com/products/f2a8d7e34"
    }]
};
const result = await new Payment.initIntent(data);
```

### Response

```
{
  "client_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJzZXNzaW9uX2lkIiA6ICIw",
  "payment_method_categories": [
    {
      "asset_urls": {
        "descriptive": "https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg",
        "standard": "https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg"
      },
      "identifier": "klarna",
      "name": "Pay with Klarna"
    }
  ],
  "session_id": "0b1d9815-165e-42e2-8867-35bc03789e00"
}
```
