import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
console.log("Initial Balance ==> ", peopleAccount.balance)
peopleAccount.deposit(100)
console.log("Balance after deposit of 100 bucks ==> ", peopleAccount.balance)
peopleAccount.withdraw(50)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(100)
console.log(companyAccount)