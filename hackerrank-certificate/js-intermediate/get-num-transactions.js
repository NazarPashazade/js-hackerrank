const https = require("https");

async function getNumTransactions(username) {
    const promise = new Promise((resolve) => {
        https.get(
            `https://jsonmock.hackerrank.com/api/article_users?username=${username}`,
            (res) => {
                res.on("data", (d) => {
                    const data = JSON.parse(d.toString());

                    if (data.data.length) {
                        https.get(
                            `https://jsonmock.hackerrank.com/api/transactions?&userId=${data.data[0].id}`,
                            (res) => {
                                res.on("data", (d) => {
                                    const totalData = JSON.parse(d.toString());
                                    resolve(totalData.total);
                                });
                            }
                        );
                    } else {
                        resolve("Username Not Found");
                    }
                });
            }
        );
    });

    const resp = await promise;
    return resp;
}

const result = getNumTransactions("epagssssssssa");