const date = new Date();

new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date); //  Saturday, February 19, 2022
new Intl.DateTimeFormat("az-AZ", { dateStyle: "full" }).format(date); //  19 fevral 2022, şənbə

const a = new Intl.DisplayNames(["en"], { type: "region" }).of("all"); //  United States

const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

rtf.format(-1, "day"); //     yesterday
rtf.format(-1, "year"); //    last year
rtf.format(-1, "hour"); //    1 hour ago
rtf.format(5, "second"); //  in 5 seconds
rtf.format(4, "month"); //  in 4 months
rtf.format(0, "day"); //  today

console.log({ a });