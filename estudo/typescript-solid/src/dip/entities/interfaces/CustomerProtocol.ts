export interface CustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
  cnpj: string;
}

export interface IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;
}

// Vai ser implementado nas classes de costumer.
export interface CostumerOrder {
  getName(): string;
  getIDN(): string;
}
