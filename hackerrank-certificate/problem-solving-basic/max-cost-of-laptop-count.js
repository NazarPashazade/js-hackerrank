function maxCost(cost, labels, dailyCount) {
    let sum = 0;
    let counter = 0;

    for (let i = 0; i < cost.length; i++) {
        sum += cost[i];

        if (labels[i] == "legal") {
            counter++;
        }

        if (counter == dailyCount) {
            break;
        }
    }

    if (counter == 0) {
        sum = 0;
    }

    return sum;
}

// const labels = ["legal", "illegal", "legal", "illegal", "legal"];
// const costs = [2, 5, 3, 11, 1];

const labels = ["legal", "legal", "illegal", "legal", "legal"];
const costs = [0, 3, 2, 3, 4, 5];

// const labels = ["illegal"];
// const costs = [2, 1];

console.log(maxCost(costs, labels, 2));