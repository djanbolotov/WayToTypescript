import {hasFormatter} from '../interfaces/hasFormatter.js'

export class Invoice implements hasFormatter {

    constructor(
        readonly from: string, 
        public details: string, 
        private amount: number
        ){}

    format(){
        return `${this.from} owed $${this.amount} for ${this.details}`;
    }
}