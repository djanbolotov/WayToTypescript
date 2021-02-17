export class Invoice {
    constructor(from, details, amount) {
        this.from = from;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.from} owed $${this.amount} for ${this.details}`;
    }
}
