"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Invoice = /** @class */ (function () {
    function Invoice(a, c, d) {
        this.amount = a;
        this.client = c;
        this.details = d;
    }
    Invoice.prototype.format = function () {
        return this.client + " ows $" + this.amount + "  " + this.details;
    };
    return Invoice;
}());
var first = new Invoice(1200, "Askabek", "in one month");
console.log(first);
