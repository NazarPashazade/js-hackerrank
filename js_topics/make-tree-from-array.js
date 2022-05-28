const data = [{
        id: 1,
        name: "Test-1",
        parentId: 1
    },
    {
        id: 2,
        name: "Test-1",
        parentId: 1
    },
    {
        id: 3,
        name: "Test-1",
        parentId: 0
    },
    {
        id: 4,
        name: "Test-1",
        parentId: 2
    },
    {
        id: 5,
        name: "Test-1",
        parentId: 2
    },
    {
        id: 6,
        name: "Test-1",
        parentId: 3
    }
];

const makeTree = (arr) => {
    const map = {};
    const result = [];

    arr = arr.map((node, i) => {
        map[node.id] = i;
        node.children = [];
        return node;
    });

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].parentId == 0) {
            result.push(arr[i]);
        } else {
            const index = map[arr[i].parentId];
            arr[index].children.push(arr[i]);
        }
    }

    console.log(result);

    // for (const entity of entities) {
    //     if (entity.parentId != 0) {
    //         result = entity;
    //     } else {
    //         result.push({ entity });
    //     }
    // }
};

makeTree(data);