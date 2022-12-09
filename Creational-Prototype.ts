const zombie = {
    eatBrains() {
        return "yum 🧠";
    },
};

const chad = Object.create(zombie, { name: { value: "chad" } });

//  Old practice
chad.__proto__;
//  Best Practice
Object.getPrototypeOf(chad);

const babyChad = Object.create(chad, { baby: { value: true } });
