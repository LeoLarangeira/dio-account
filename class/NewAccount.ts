import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount{
    deposit: (value: number) => this;

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);

        this.deposit = (value: number) => {
            this.balance += (value + 10)
            console.log(`Você depositou ${value}`);
            return this;
        };
    }
}