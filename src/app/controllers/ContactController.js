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

	store() {
		// Criar novo registro
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
