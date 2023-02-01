const { v4 } = require('uuid');

const contacts = [
	{
		id: v4(),
		name: 'John Doe',
		email: 'john.doe@gmail.com',
		phone: '555-555-5555',
		category_id: v4(),
	},
];

class ContactsRepository {
	findAll() {
		return new Promise((resolve) => {
			resolve(contacts);
		});
	}
}

module.exports = new ContactsRepository();
