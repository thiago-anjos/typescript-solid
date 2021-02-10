// export interface CustomerProtocol {
//   firtName: string;
//   lastName: string;
//   cpf: string;
//   cnpj: string;
// }

// criar uma interface para usar as duas de cima

export interface OrderCustomerHasName {
  getName(): string;
  getIDN(): string;
}

export interface IndividualCustomerProtocol {
  firtName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;
}
