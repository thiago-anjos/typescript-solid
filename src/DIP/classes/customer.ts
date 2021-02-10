import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
  OrderCustomerHasName,
} from './interfaces/customer-protocol';

export class IndividualCustomer
  implements IndividualCustomerProtocol, OrderCustomerHasName {
  cpf: string;
  firtName: string;
  lastName: string;

  constructor(firtName: string, lastName: string, cpf: string) {
    this.firtName = firtName;
    this.lastName = lastName;
    this.cpf = cpf;
    //a interface está cheia de coisas e isso força o cliente a utilizar coisas e setar valores como '' vazio para poder utilizar aquela interface
    //this.cnpj = '';
  }
  getName(): string {
    return this.firtName + ' ' + this.lastName;
  }
  getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, OrderCustomerHasName {
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
