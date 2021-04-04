import { createServer, Model } from "miragejs";

export function makeServer(environment = { environment: "test" }) {
  return createServer({
    environment,
    models: {
      flower: Model,
    },

    routes() {
      this.get("/api/flowers/", () => [
        { id: "1", name: "rose", color: "yellow" },
        { id: "2", name: "rose", color: "red" },
        { id: "3", name: "rose", color: "purple" },
      ]);
    },
  });
}
