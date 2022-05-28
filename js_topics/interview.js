var obj1 = { a: 1 };

var obj2 = {
    a: 2,
    foo1: function() {
        console.log(this.a);
    },
    foo2: function() {
        setTimeout(function() {
            // console.log(this);
            console.log(this.a);
        }, 0);
    },
    foo3: () => {
        console.log(this.a);
    }
};

var a = this;
obj2.foo1();
obj2.foo2();
obj2.foo3();

//

/**
 * 
Given a non-empty array of integers, every element appears twice except for one. Find that single one.
Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
Example 1:      Input: [2,2,1]              Output: 1
Example 2:      Input: [4,1,2,1,2]          Output: 4
*/

///
///
///

///  n2 +n
const solution = (arr) => {
    const results = [];

    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        let counter = 0;

        for (let j = 0; j < arr.length; j++) {
            if (value == arr[j]) {
                counter++;
            }
        }

        results.push({ value, counter });
    }

    return results.find((r) => r.counter == 1).value;
};

// console.log(solution([2, 2, 1])); // 1
// console.log(solution([4, 2, 1, 2, 1])); // 4
// console.log(solution([1, 2, 4, 1, 2, 3, 4])); // 3
// console.log(solution([1, 1, 1, 1, 1, 1, 2])); // 2