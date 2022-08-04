const generateUniqueId = require("generate-unique-id");

const generateDeliveryDate = () => {
    const currentDate = Date.now();
    const randomDate = Math.random() * 604800000 - 259200000 + 259200000; // a random date between 3 to 7 days

    const deliveryDateString = new Date(currentDate + randomDate).toDateString();
    return deliveryDateString.substring(0, 3) + ", " + deliveryDateString.substring(4, 10);
};

export const ProductsStore = [
    {
        id: generateUniqueId(),
        name: "Hazelnut Instant Coffee 100g",
        brand: "Countrybean",
        rating: 2.9,
        rate: 799,
        discount: 73,
        eta: generateDeliveryDate(),
        description:
            "FROM THE HOUSE OF COUNTRY BEAN- Enjoy your favourite Hazelnut instant coffee in a new packaging. Grown in the hills of Coorg, our Hazelnut instant coffee is made with a blend of premium arabica beans. Every cup of hazelnut arabica coffee has a smooth, nutty flavour and a strong, creamy finish that lingers on your tastebuds. Make a cup of frothy coffee, whether its your morning black coffee or hot coffee, your evening cappuccino or cold coffee with our hazelnut instant coffee.",
        offers: [
            {
                id: 1,
                offer: "Apply now & get ₹500 back + rewards worth ₹1700",
            },
            {
                id: 2,
                offer: "Get GST invoice and save up to 28% on business purchases.",
            },
        ],
        category: ["coffee"],
    },
    {
        id: generateUniqueId(),
        name: "boAt Airdopes 121v2 Earbuds",
        brand: "Boat",
        rating: 4.4,
        rate: 1299,
        discount: 57,
        eta: generateDeliveryDate(),
        description:
            "Playback - Airdopes 121v2 offers a nonstop playback of up to 3.5H with each charge and an additional 10.5H playtime with the included charging case. Lightweight With a dual tone finish on a lightweight ergonomic design weighing just around 4g per earbud, get ready to groove in full flow with Airdopes 121v2v2 TWS earbuds.",
        offers: [
            {
                id: 1,
                offer: "Get GST invoice and save up to 28% on business purchases.",
            },
            {
                id: 2,
                offer: "Apply now & get ₹500 back + rewards worth ₹1700",
            },
        ],
        category: ["mobiles", "electronics", "computers"],
    },
    {
        id: generateUniqueId(),
        name: "Logitech G413 TKL SE Mechanical Gaming Keyboard",
        brand: "Logitech",
        rating: 4.8,
        rate: 5995,
        discount: 23,
        eta: generateDeliveryDate(),
        description:
            "Take your gaming skills to the next level: The Logitech G413 TKL SE is a tenkeyless keyboard with gaming-first features and the durability and performance necessary to compete. PBT keycaps: Heat- and wear-resistant, this compact gaming keyboard features the most durable material used in keycap design",
        offers: [
            {
                id: 1,
                offer: "Get GST invoice and save up to 28% on business purchases.",
            },
            {
                id: 2,
                offer: "Apply now & get ₹500 back + rewards worth ₹1700",
            },
        ],
        category: ["computers", "electronics"],
    },
    {
        id: generateUniqueId(),
        name: "Logitech G413 TKL SE Mechanical Gaming Keyboard",
        brand: "Logitech",
        rating: 4.8,
        rate: 5995,
        discount: 23,
        eta: generateDeliveryDate(),
        description:
            "Take your gaming skills to the next level: The Logitech G413 TKL SE is a tenkeyless keyboard with gaming-first features and the durability and performance necessary to compete. PBT keycaps: Heat- and wear-resistant, this compact gaming keyboard features the most durable material used in keycap design",
        offers: [
            {
                id: 1,
                offer: "Get GST invoice and save up to 28% on business purchases.",
            },
            {
                id: 2,
                offer: "Apply now & get ₹500 back + rewards worth ₹1700",
            },
        ],
        category: ["computers", "electronics"],
    },

];
