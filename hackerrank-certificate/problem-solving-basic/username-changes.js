function possibleChanges(usernames) {
    return usernames.map((username) => {
        const newUserName = Array.from(username)
            .sort((a, b) => (a > b ? 1 : -1))
            .join("");

        return username == newUserName ? "NO" : "YES";
    });
}

console.log(possibleChanges(["zfoo", "bar", "baz"]));