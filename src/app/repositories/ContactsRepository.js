const { uuid } = require('uuidv4');

const contacts = [
	{
		id: uuid(),
		name: 'John Doe',
		email: 'john.doe@gmail.com',
		phone: '555-555-5555',
		category_id: uuid(),
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
