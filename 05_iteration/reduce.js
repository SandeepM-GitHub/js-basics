const nums = [1, 2, 3, 4, 5, 6, 7]

const Total = nums.reduce( (acc, curr) => {
    // console.log(`Accumulator value: ${acc} and Current value: ${curr}`);
    return acc + curr
}, 0)
// console.log(Total);

const shopCart = [
    {
        "item_name": "Wireless Mouse",
        "price": 25.99
    },
    {
        "item_name": "Bluetooth Headphones",
        "price": 49.99
    },
    {
        "item_name": "Laptop Stand",
        "price": 35.50
    },
    {
        "item_name": "USB-C Hub",
        "price": 19.99
    },
    {
        "item_name": "Portable Charger",
        "price": 29.99
    },
    {
        "item_name": "Smartphone Case",
        "price": 14.99
    },
    {
        "item_name": "External Hard Drive",
        "price": 79.99
    },
    {
        "item_name": "LED Desk Lamp",
        "price": 22.50
    },
    {
        "item_name": "Mechanical Keyboard",
        "price": 89.99
    },
    {
        "item_name": "Gaming Mouse Pad",
        "price": 12.99
    }
]

const cartTotal = shopCart.reduce( (acc, item) => acc + item.price,  0)

console.log(cartTotal);

