import { Invoice } from './Classes/Invoice.js';
import { ListTemplate } from './Classes/ListTemplate.js';
import { Payment } from './Classes/payment.js';
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
const form = document.querySelector(".brain");
const select = document.querySelector('.typer');
const from_input = document.querySelector('.from-input');
const details_input = document.querySelector('.details-input');
const amount_input = document.querySelector('.amount_input');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [from_input.value, details_input.value, amount_input.valueAsNumber];
    if (select.value === 'Payment') {
        doc = new Payment(...values);
    }
    else {
        doc = new Invoice(...values);
    }
    list.render(doc, select.value, 'end');
});
