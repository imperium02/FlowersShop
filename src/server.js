import { createServer, Model } from "miragejs";

export function makeServer(environment = { environment: "test" }) {
  return createServer({
    environment,
    models: {
      flower: Model,
    },

    routes() {
      this.get("/api/flowers/", () => [
        { id: "1", name: "Lek", color: "Apap", price: 8.49 },
        { id: "2", name: "Lek", color: "Gripex", price: 9.99 },
        { id: "3", name: "Lek", color: "Rutinoscorbin", price: 4.49 },
      ]);

      this.get("/api/prescription/", () => [
        {
          id: "4",
          name: "Antybiotyk",
          color: "Anty1",
          price: 34.54,
          number: "430654",
        },
        {
          id: "5",
          name: "Antybiotyk",
          color: "Anty2",
          price: 23.35,
          number: "537257",
        },
      ]);
    },
  });
}
