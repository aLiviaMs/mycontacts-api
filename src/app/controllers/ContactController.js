const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
	// Listar todos
	async index(request, response) {
		const contacts = await ContactsRepository.findAll();

		response.json(contacts);
	}

	// Obter UM registro
	async show(request, response) {
		const { id } = request.params;
		const contact = await ContactsRepository.findById(id);

		if (!contact) {
			return response.status(404).json({
				error: 'Contact not found',
			});
		}

		return response.json(contact);
	}

	// Criar novo registro
	async store(request, response) {
		const {
			name, email, phone, category_id,
		} = request.body;

		if (!name) {
			return response.status(400).json({ error: 'Name is required' });
		}

		const contactExists = await ContactsRepository.findByEmail(email);

		if (contactExists) {
			return response.status(400).json({ error: 'This e-mail is already been taken' });
		}

		const contact = await ContactsRepository.create({
			name,
			email,
			phone,
			category_id,
		});

		return response.json(contact);
	}

	update() {
		// Editar um registro
	}

	// Deletar um registro
	async delete(request, response) {
		const { id } = request.params;

		const contact = await ContactsRepository.findById(id);

		if (!contact) {
			return response.status(404).json({
				error: 'Contact not found',
			});
		}

		await ContactsRepository.delete(id);

		return response.sendStatus(204);
	}
}

module.exports = new ContactController();
