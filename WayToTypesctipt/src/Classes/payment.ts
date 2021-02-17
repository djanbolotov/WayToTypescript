import {hasFormatter} from '../interfaces/hasFormatter.js'

export class Payment implements hasFormatter {


    constructor(
        private from: string, 
        public details: string, 
        private amount: number
        ){}

    format(){
        return `${this.from}is owes $${this.amount} for ${this.details}`;
    }
}
