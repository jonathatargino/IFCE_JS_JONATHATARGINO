import { PersistencyProtocol } from "../entities/interfaces/PersistencyProtocol";

export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log("Pedido salvo com sucesso");
  }
}
