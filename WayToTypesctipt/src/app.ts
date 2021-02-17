import { Invoice } from './Classes/Invoice.js';
import { ListTemplate } from './Classes/ListTemplate.js';
import { Payment } from './Classes/payment.js';
import {hasFormatter} from './interfaces/hasFormatter.js';


const ul = document.querySelector('ul') as HTMLUListElement;
const list = new ListTemplate(ul);

const form = document.querySelector(".brain") as HTMLFormElement;
const select = document.querySelector('.typer') as HTMLSelectElement;
const from_input = document.querySelector('.from-input') as HTMLInputElement;
const details_input = document.querySelector('.details-input') as HTMLInputElement;
const amount_input = document.querySelector('.amount_input') as HTMLInputElement;
 
form.addEventListener('submit', (e: Event) =>{
    e.preventDefault();
    
    let doc: hasFormatter;

    let values: [string, string, number];
    values = [from_input.value, details_input.value, amount_input.valueAsNumber];

    if(select.value === 'Payment'){
        doc = new Payment(...values);
    }else{
        doc = new Invoice(...values);
    }
    

    list.render(doc, select.value, 'end');
})

