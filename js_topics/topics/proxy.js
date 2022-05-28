const person = { name: "Nazar", email: "pashazade.nazar@gmail.com", age: 20 }; // "Target" object

const handler = {
    get(target, key) {
        return target[key] || "DefaultValue";
    },

    set(target, key, newValue) {
        switch (key) {
            case "age":
                if (!Number.isInteger(newValue))
                    throw new TypeError("The age is not an integer");

                if (newValue > 200 && newValue < 0)
                    throw new RangeError("The age seems invalid");

            case "email":
                if (!newValue.includes("@")) throw new Error("Email is invalid");

            case "name":
                newValue = newValue.toUpperCase();
        }

        target[key] = newValue;
    },

    deleteProperty(target, key) {
        if (key in target) delete target[key];
        return key in target ? "Property deleted" : "Invalid property name";
    }
};

// personProxy.age = 36;
// console.log(personProxy.age); //36
// console.log(personProxy.country); //DefaultValue

// personProxy.age = "45";
// console.log(personProxy.age); //The age is not an integer

// delete personProxy.age;
// console.log(personProxy.age);  // DefaultValue