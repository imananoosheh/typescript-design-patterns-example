/*
Usually the best practice is when working with big data
*/
const original = { name: "jeff" };

const reactive = new Proxy(original, {
    get(target, key) {
        console.log("Tracking: ", key);
        return target[key];
    },
    set(target, key, value) {
        console.log("updating UI...");
        return Reflect.set(target, key, value);
    },
});

reactive.name; // 'Tracking: name'

reactive.name = "bob"; // 'updating UI...'
