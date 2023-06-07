const { KlarnaEnvironment, Payment } = require("../dist");

KlarnaEnvironment.init("PK73987_e7a735db38e5", "h9CzUwm0pBhEhLOl");

/*
{
    tax: 1.8333,
    withTax: 20.99,
    withoutTax: 19.1567,
}
*/
const data = {
    "intent":"buy",
    "purchase_country":"GB",
    "purchase_currency":"GBP",
    "locale":"en",
    "order_amount":111,
    "order_tax_amount":0,
    "order_lines":[
        {
            "type":"physical",
            "reference":"Order 4518c296-2805-ee11-b1c2-000d3a211cf7 for basket bba015cf-0ade-4330-b77d-0350c3d3825b OrderPaymentId 318060-1109433",
            "name":"122-KARM-I-NATURLIG-BOK-POLERAD-ALUMINIUM-OLJAD-EK(1)",
            "quantity":1,
            "unit_price":111,
            "tax_rate":0,
            "total_amount":111,
            "total_discount_amount":0,
            "total_tax_amount":0,
            "image_url":"http://localhost:3000/product/products/kallemo-aluminium1-122-1-122-karm-i-naturlig-bok-polerad-aluminium-oljad-ek",
            "product_url":"http://localhost:3000/product/products/kallemo-aluminium1-122-1-122-karm-i-naturlig-bok-polerad-aluminium-oljad-ek"
        }
    ]
};
new Payment().initIntent(data)
    .then(response => {
        console.log(JSON.stringify(response))
    });