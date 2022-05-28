//
const findCammonSubStr = (words) => {
    const shortestWord = words.find(
        (s) => s.length == Math.min(...words.map((s) => s.length))
    );

    const allCombinations = [];
    const results = [];

    for (let i = 0; i < shortestWord.length; i++) {
        for (let j = 0; j < shortestWord.length - i; j++) {
            allCombinations.push(shortestWord.slice(i, shortestWord.length - j));
        }
    }

    for (const c of allCombinations) {
        let flag = false;

        for (let j = 0; j < words.length; j++) {
            flag = words[j].includes(c);
            if (!flag) break;
        }
        if (flag) {
            results.push(c);
        }
    }

    const maxStr = results.find(
        (s) => s.length == Math.max(...results.map((s) => s.length))
    );

    console.log(maxStr); // zer
};

findCammonSubStr(["Azerbaycan", "Nezer", "Bezerga", "Hbbkzerihlin"]);