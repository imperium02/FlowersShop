import { createServer, Model } from "miragejs";

export function makeServer(environment = { environment: "test" }) {
  return createServer({
    environment,
    models: {
      flower: Model,
    },

    routes() {
      this.get("/api/flowers/", () => [
        { id: "1", name: "Rose", color: "Yellow", price: 3.49 },
        { id: "2", name: "Rose", color: "Red", price: 2.99 },
        { id: "3", name: "Rose", color: "Purple", price: 4.49 },
      ]);
    },
  });
}
