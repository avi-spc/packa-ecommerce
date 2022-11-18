const generateUniqueId = require('generate-unique-id');

const generateDeliveryDate = () => {
	const currentDate = Date.now();
	const randomDate = Math.random() * 604800000 - 259200000 + 259200000; // a random date between 3 to 7 days

	const deliveryDateString = new Date(currentDate + randomDate).toDateString();
	return deliveryDateString.substring(0, 3) + ', ' + deliveryDateString.substring(4, 10);
};

export const ProductsStore = [
	{
		id: generateUniqueId(),
		name: 'Hazelnut Instant Coffee 100g',
		brand: 'Countrybean',
		rating: 2.9,
		rate: 799,
		discount: 73,
		eta: generateDeliveryDate(),
		image: 'https://veganfoodhut.com/wp-content/uploads/2020/07/Country-Bean-Instant-Coffee-Powder-Hazelnut-Flavoured-Coffee-60-g-0-1.jpg',
		description:
			'FROM THE HOUSE OF COUNTRY BEAN- Enjoy your favourite Hazelnut instant coffee in a new packaging. Grown in the hills of Coorg, our Hazelnut instant coffee is made with a blend of premium arabica beans. Every cup of hazelnut arabica coffee has a smooth, nutty flavour and a strong, creamy finish that lingers on your tastebuds. Make a cup of frothy coffee, whether its your morning black coffee or hot coffee, your evening cappuccino or cold coffee with our hazelnut instant coffee.',
		offers: [
			{
				id: 1,
				offer: 'Apply now & get ₹500 back + rewards worth ₹1700'
			},
			{
				id: 2,
				offer: 'Get GST invoice and save up to 28% on business purchases.'
			}
		],
		category: ['coffee', 'beverage', 'drink', 'food', 'pantry', 'countrybean']
	},
	{
		id: generateUniqueId(),
		name: 'boAt Airdopes 121v2 Earbuds',
		brand: 'Boat',
		rating: 4.4,
		rate: 1299,
		discount: 57,
		eta: generateDeliveryDate(),
		image: 'https://m.media-amazon.com/images/I/5161KgWnNEL._SY450_.jpg',
		description:
			'Playback - Airdopes 121v2 offers a nonstop playback of up to 3.5H with each charge and an additional 10.5H playtime with the included charging case. Lightweight With a dual tone finish on a lightweight ergonomic design weighing just around 4g per earbud, get ready to groove in full flow with Airdopes 121v2v2 TWS earbuds.',
		offers: [
			{
				id: 1,
				offer: 'Get GST invoice and save up to 28% on business purchases.'
			},
			{
				id: 2,
				offer: 'Apply now & get ₹500 back + rewards worth ₹1700'
			}
		],
		category: [
			'mobiles',
			'electronics',
			'accessories',
			'earphones',
			'airdopes',
			'peripherals',
			'boat'
		]
	},
	{
		id: generateUniqueId(),
		name: 'Logitech G413 TKL SE Mechanical Gaming Keyboard',
		brand: 'Logitech',
		rating: 4.8,
		rate: 5995,
		discount: 23,
		eta: generateDeliveryDate(),
		image: 'https://m.media-amazon.com/images/I/61aHJIjnH6L._SY450_.jpg',
		description:
			'Take your gaming skills to the next level: The Logitech G413 TKL SE is a tenkeyless keyboard with gaming-first features and the durability and performance necessary to compete. PBT keycaps: Heat- and wear-resistant, this compact gaming keyboard features the most durable material used in keycap design',
		offers: [
			{
				id: 1,
				offer: 'Get GST invoice and save up to 28% on business purchases.'
			},
			{
				id: 2,
				offer: 'Apply now & get ₹500 back + rewards worth ₹1700'
			}
		],
		category: ['computers', 'electronics', 'keyboard', 'peripherals', 'gaming', 'logitech']
	},
	{
		id: generateUniqueId(),
		name: 'Knorr Classic Chicken Delite Soup, 42g',
		brand: 'Knorr',
		rating: 4,
		rate: 8,
		discount: 3,
		eta: generateDeliveryDate(),
		image: 'https://m.media-amazon.com/images/I/610tV6KT5hL._SX679_.jpg',
		description:
			"Made with Real Chicken and 100% real vegetables. Contains no added preservatives. Ready to eat in 3 simple steps. Serves 4. Goes well with: White Sauce Pasta or Red Sauce Pasta. Chef's Tip: Garnish with grated cheese & garlic and serve with pan fried bread pieces",
		offers: [
			{
				id: 1,
				offer: 'Get GST invoice and save up to 28% on business purchases.'
			},
			{
				id: 2,
				offer: 'Apply now & get ₹500 back + rewards worth ₹1700'
			}
		],
		category: ['soup', 'beverage', 'drink', 'food', 'pantry', 'knorr']
	},
	{
		id: generateUniqueId(),
		name: 'Dennis Lingo Men Shirt',
		brand: 'Dennis',
		rating: 4,
		rate: 499,
		discount: 28,
		eta: generateDeliveryDate(),
		image: 'https://m.media-amazon.com/images/I/61JipNNbkZL._UX522_.jpg',
		description:
			'About the Brand DENNIS LINGO - Finding Basic Menswear for daily use can be hard among todays Over priced Fast fashion world, where trends change daily. That’s why we started Dennis Lingo, to create a one stop shop for premium essential clothing for everyday use at lowest prices and bring Basics back in trend.',
		offers: [
			{
				id: 1,
				offer: 'Get GST invoice and save up to 28% on business purchases.'
			},
			{
				id: 2,
				offer: 'Apply now & get ₹500 back + rewards worth ₹1700'
			}
		],
		category: ['clothing', 'shirt', 'wearables', 'men shirt', 'cotton', 'dennis']
	},
	{
		id: generateUniqueId(),
		name: 'Logitech MX Master 3S Mouse',
		brand: 'Logitech',
		rating: 4.2,
		rate: 10995,
		discount: 15,
		eta: generateDeliveryDate(),
		image: 'https://m.media-amazon.com/images/I/616ljqKS+xL._SX569_.jpg',
		description:
			'Any-surface tracking - now 8K DPI: Use MX Master 3S cordless computer mouse to work on any surface - even glass (1) - with the upgraded 8000 DPI sensor with customizable sensitivity',
		offers: [
			{
				id: 1,
				offer: 'Get GST invoice and save up to 28% on business purchases.'
			},
			{
				id: 2,
				offer: 'Apply now & get ₹500 back + rewards worth ₹1700'
			}
		],
		category: ['computers', 'electronics', 'mouse', 'peripherals', 'gaming', 'logitech']
	},
	{
		id: generateUniqueId(),
		name: 'RiteBite Max Protein 7 Grain Breakfast Cookies',
		brand: 'RiteBite',
		rating: 4.8,
		rate: 220,
		discount: 5,
		eta: generateDeliveryDate(),
		image: 'https://m.media-amazon.com/images/I/61bmWIjrZkL._SX679_PIbundle-12,TopRight,0,0_AA679SH20_.jpg',
		description:
			'CLEAN INDULGENCE: Indulge in our Max Protein cookies while meeting your diet goals. Each bite only takes you towards your goal. These delicious protein cookies have the right amount of carbs, protein and whole lot of flavor.',
		offers: [
			{
				id: 1,
				offer: 'Apply now & get ₹500 back + rewards worth ₹1700'
			},
			{
				id: 2,
				offer: 'Get GST invoice and save up to 28% on business purchases.'
			}
		],
		category: ['biscuit', 'wafers', 'edible', 'food', 'pantry', 'ritebite']
	},
	{
		id: generateUniqueId(),
		name: 'Parle-g Original Glucose Biscuit, 800g',
		brand: 'Parle-g',
		rating: 4.4,
		rate: 79,
		discount: 11,
		eta: generateDeliveryDate(),
		image: 'https://m.media-amazon.com/images/I/51aoGaG0p-L.jpg',
		description:
			'Parle-G has been a source of all round nourishment for the nation since 1939. As its unique taste expanded over the globe. Filled with goodness of wheat and milk. Shelf Life: 5 Months',
		offers: [
			{
				id: 1,
				offer: 'Apply now & get ₹500 back + rewards worth ₹1700'
			},
			{
				id: 2,
				offer: 'Get GST invoice and save up to 28% on business purchases.'
			}
		],
		category: ['biscuit', 'wafers', 'edible', 'food', 'pantry', 'parleg']
	}
];
