const { KlarnaEnvironment, Payment } = require("../dist");

KlarnaEnvironment.init("PK73987_e7a735db38e5", "h9CzUwm0pBhEhLOl");
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
new Payment().initIntent(data)
    .then(response => {
        console.log(JSON.stringify(response))
    });