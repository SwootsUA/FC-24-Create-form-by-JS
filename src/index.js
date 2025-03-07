'use strict';

const text = {
    header: 'Create an account',
    header_addition: 'We always keep your name and email address private.',
    buyer: 'Join As a Buyer',
    buyer_addition:
        'I am looking for a Name, Logo or Tagline for my business, brand or product.',
    seller: 'Join As a Creative or Marketplace Seller',
    seller_addition:
        'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.',
    allow_marketing:
        'Allow Squadhelp to send marketing/promotional offers from time to time',
    submit_button: 'Create account',
    first_name_input: 'First name',
    last_name_input: 'Last name',
    display_name_input: 'Display Name',
    email_input: 'Email Address',
    password_input: 'Password',
    confirm_password_input: 'Password Confirmation',
};

const container = document.querySelector('.container');

const form = document.createElement('form');

const header_container = document.createElement('div');
header_container.classList.add('heading-container');

const header = document.createElement('h1');
header.textContent = text.header;
const header_addition = document.createElement('p');
header_addition.textContent = text.header_addition;

header_container.append(header, header_addition);

const text_inputs_container = document.createElement('div');
text_inputs_container.classList.add('text-inputs-container');

const first_name_input = document.createElement('input');
first_name_input.required = true;
first_name_input.type = 'text';
first_name_input.placeholder = text.first_name_input;

const last_name_input = document.createElement('input');
last_name_input.required = true;
last_name_input.type = 'text';
last_name_input.placeholder = text.last_name_input;

const display_name_input = document.createElement('input');
display_name_input.required = true;
display_name_input.type = 'text';
display_name_input.placeholder = text.display_name_input;

const email_input = document.createElement('input');
email_input.required = true;
email_input.type = 'email';
email_input.placeholder = text.email_input;

const password_input = document.createElement('input');
password_input.required = true;
password_input.type = 'password';
password_input.placeholder = text.password_input;

const confirm_password_input = document.createElement('input');
confirm_password_input.required = true;
confirm_password_input.type = 'password';
confirm_password_input.placeholder = text.confirm_password_input;

text_inputs_container.append(
    first_name_input,
    last_name_input,
    display_name_input,
    email_input,
    password_input,
    confirm_password_input
);

const radio_inputs_container = document.createElement('div');
radio_inputs_container.classList.add('radio-inputs-container');

const radio_input_group1 = document.createElement('div');
const radio_input_group2 = document.createElement('div');
radio_input_group1.classList.add('radio-input-group');
radio_input_group2.classList.add('radio-input-group');

const radio_input1 = document.createElement('input');
radio_input1.type = 'radio';
radio_input1.id = 'buyer';
radio_input1.value = 'buyer';
radio_input1.name = 'user-type';
radio_input1.required = true;

const radio_input2 = document.createElement('input');
radio_input2.type = 'radio';
radio_input2.id = 'seller';
radio_input2.value = 'seller';
radio_input2.name = 'user-type';
radio_input2.required = true;

const radio_label1 = document.createElement('label');
radio_label1.setAttribute('for', 'buyer');

const radio_label2 = document.createElement('label');
radio_label2.setAttribute('for', 'seller');

const buyer = document.createElement('div');
buyer.innerText = text.buyer;
const seller = document.createElement('div');
seller.innerText = text.seller;
const buyer_addition = document.createElement('p');
buyer_addition.innerText = text.buyer_addition;
const seller_addition = document.createElement('p');
seller_addition.innerText = text.seller_addition;

radio_label1.append(buyer, buyer_addition);
radio_label2.append(seller, seller_addition);

radio_input_group1.append(radio_input1, radio_label1);
radio_input_group2.append(radio_input2, radio_label2);

radio_inputs_container.append(radio_input_group1, radio_input_group2);

const checkbox_input_group = document.createElement('div');
checkbox_input_group.classList.add('checkbox-input-group');

const allow_marketing = document.createElement('input');
allow_marketing.type = 'checkbox';
allow_marketing.id = 'allow-marketing';
allow_marketing.name = 'allow-marketing';

const allow_marketing_label = document.createElement('label');
allow_marketing_label.setAttribute('for', 'allow-marketing');
allow_marketing_label.innerText = text.allow_marketing;

checkbox_input_group.append(allow_marketing, allow_marketing_label);

const submit_button = document.createElement('button');
submit_button.type = 'submit';
submit_button.classList.add('submit-button');
submit_button.innerText = text.submit_button;

form.append(
    header_container,
    text_inputs_container,
    radio_inputs_container,
    checkbox_input_group,
    submit_button
);
container.appendChild(form);
