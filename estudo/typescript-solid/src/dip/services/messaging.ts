import { MessagingProtocol } from "../entities/interfaces/MessagingProtocol";

export class Messaging implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log("Mensagem enviada: " + msg);
  }
}
