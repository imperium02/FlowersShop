import { createServer, Model } from "miragejs";

export function makeServer(environment = { environment: "test" }) {
  return createServer({
    environment,
    models: {
      flower: Model,
    },

    routes() {
      this.namespace = "api";

      this.resource("flower");
    },
  });
}
