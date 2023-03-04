const dadosCliente: [number, string] = [1, "Neto"]; // [number, string]

dadosCliente[0] = 100; // dadosCliente[0] só pode ser reatribuido a valores do tipo number
dadosCliente[1] = "Carlos"; // dadosCliente[1] só pode ser reatribuido a valores do tipo string
// dadosCliente = [100, "Carlos"]

// Tupla: Array imutável (readonly), que impossibilita de ser alterado após receber seus valores iniciais.
const dadosClienteImutavel: readonly [number, string] = [1, "Neto"];

// dadosClienteImutavel[0] = 100; // dadosCliente[0] só pode ser reatribuido a valores do tipo number
// dadosClienteImutavel[1] = "Carlos"; // dadosCliente[1] só pode ser reatribuido a valores do tipo string

// readonly array
const array: readonly string[] = ["Luiz", "Otávio"];

// Cannot assign to '0' because it is a read-only property.

export default {};
