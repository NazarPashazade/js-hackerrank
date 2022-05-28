function processOrderList(orderList, orderId, state) {
    // Write your code here

    return orderList.filter((order) => {
        if (order.id == orderId && state == "Processing") {
            order.state = "Processing";
        }

        if (order.id == orderId && state == "Delivered") {} else {
            return order;
        }
    });
}

const arr = [{
        id: 1,
        state: "Received" //Processing
    },
    {
        id: 2,
        state: "Received" //Delivered  //deleted
    },
    {
        id: 3,
        state: "Received"
    }
];
const result = processOrderList(arr, 1, "Delivered");

console.log(result);