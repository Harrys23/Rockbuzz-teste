import { Server, Model, Factory } from "miragejs";
import faker from "faker";

export function makeServer(environment = "development") {
	return new Server({
		environment,

		models: {
			user: Model,
		},

		factories: {
			user: Factory.extend({
				userName() {
					return faker.internet.userName();
				},

				avatar() {
					return faker.image.avatar();
				},

				name() {
					return faker.name.findName();
				},

				tweet() {
					return faker.lorem.lines();
				},

				favorites: 0,
				liked: false,
			}),
		},

		seeds(server) {
			server.createList("user", 10);
		},

		routes() {
			this.namespace = "api";
			this.get("users");
			this.put("/users/:id", (schema, request) => {
				let id = request.params.id;
				let attrs = this.normalizedRequestAttrs();

				return schema.contacts.find(id).update(attrs);
			});
		},
	});
}
