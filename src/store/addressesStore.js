const generateUniqueId = require("generate-unique-id");

export const AddressesStore = [
    {
        customerId: generateUniqueId(),
        customerName: "Avdhesh Yadav",
        customerAddress: "7/394, Vikas Nagar, Lucknow, Uttar Pradesh, 226022, India",
        customerPhone: "6666667766",
    },
    {
        customerId: generateUniqueId(),
        customerName: "Wamiqa Gabbi",
        customerAddress: "359-B Center Street, Mohali, Punjab, 235612, India",
        customerPhone: "5636667968",
    },
];
