const number = 123456.789;

const options = {
    style: "currency",
    currency: "EUR"
        // useGrouping: false
        // maximumSignificantDigits: 5
};

new Intl.NumberFormat("de-DE", options).format(number); //123.456,79 €
new Intl.NumberFormat("de-DE", options).format(number); //123.456,79 €