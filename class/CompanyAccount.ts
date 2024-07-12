import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  protected companyStatus : boolean = true

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value : number) => {
    if(this.companyStatus){
      console.log('Voce pegou um empréstimo de', value)
      console.log("Seu saldo agora e de ",this.balance += value )
    }
  }
}
