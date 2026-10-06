const obj = {
    name: "John",
    address: {
        city: "Dhaka",
        location: {
            lat: 23.8
        }
    }
};

const copy = deepClone(obj);

copy.address.location.lat = 100;

console.log(obj.address.location.lat);
// Should still be 23.8