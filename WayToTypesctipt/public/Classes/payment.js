export class Payment {
    constructor(from, details, amount) {
        this.from = from;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.from}is owes $${this.amount} for ${this.details}`;
    }
}
