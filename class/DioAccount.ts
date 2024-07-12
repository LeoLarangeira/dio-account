export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value : number) => {
    if(this.validateStatus()){
      if(value === 0 || value < 0){
        throw new Error("Impossivel realizar o deposito")}
        this.balance += value
        console.log("Seu novo saldo e de: ", this.balance  )
    }
  }

  withdraw = (value : number) => {
    if(this.validateStatus()){
      if(value === 0 || value < 0 || value > this.balance){
        throw new Error("Impossivel realizar o saque")}
        this.balance -= value
        console.log("Seu novo saldo e de: ", this.balance  )
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
