const { KlarnaEnvironment, Payment } = require("../dist");

KlarnaEnvironment.init("PK73987_e7a735db38e5", "h9CzUwm0pBhEhLOl");
new Payment().getDetails("f20da212-79ca-460f-b490-9958c7acfd52")
    .then(response => {
        console.log(JSON.stringify(response))
    });