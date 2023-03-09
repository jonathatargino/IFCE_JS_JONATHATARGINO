/* eslint-disable */
import {
  CustomerProtocol,
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
  CostumerOrder,
} from "./interfaces/CustomerProtocol";

// Property 'cnpj' is missing in type 'IndividualCostumer' but required in type 'CustomerProtocol'. -: IndivialCostumer obrigado a ter cpnj
export class IndividualCostumer implements CustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
  cnpj: string; // Não precisa

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
    this.cnpj = "";
  }
}

export class EnterpriseCostumer {
  firstName: string; // Não precisa
  lastName: string; // Não precisa
  cpf: string; // Não precisa
  cnpj: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
    this.cnpj = "";
  }
}

// Devemos fazer interfaces que tenham exatamente aquilo que a classe precisa.

export class IndividualCostumer2
  implements IndividualCustomerProtocol, CostumerOrder
{
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }

  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCostumer2
  implements EnterpriseCustomerProtocol, CostumerOrder
{
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  getName(): string {
    return this.name;
  }
  getIDN(): string {
    return this.cnpj;
  }
}
