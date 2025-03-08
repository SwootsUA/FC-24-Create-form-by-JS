'use strict';

function createElement(
    tag,
    {classes = [], attributes = {}, properties = {}, textContent = ''} = {}
) {
    const el = document.createElement(tag);
    if (classes.length) el.classList.add(...classes);
    Object.keys(attributes).forEach(a => el.setAttribute(a, attributes[a]));
    Object.assign(el, properties);
    if (textContent) el.textContent = textContent;
    return el;
}

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

const form = createElement('form');

const header_container = createElement('div', {classes: ['heading-container']});

const header = createElement('h1', {textContent: text.header});
const header_addition = createElement('p', {textContent: text.header_addition});

header_container.append(header, header_addition);

const text_inputs_container = createElement('div', {
    classes: ['text-inputs-container'],
});

const first_name_input = createElement('input', {
    properties: {
        required: true,
        type: 'text',
        placeholder: text.first_name_input,
    },
});

const last_name_input = createElement('input', {
    properties: {
        required: true,
        type: 'text',
        placeholder: text.last_name_input,
    },
});

const display_name_input = createElement('input', {
    properties: {
        required: true,
        type: 'text',
        placeholder: text.display_name_input,
    },
});

const email_input = createElement('input', {
    properties: {
        required: true,
        type: 'email',
        placeholder: text.email_input,
    },
});

const password_input = createElement('input', {
    properties: {
        required: true,
        type: 'password',
        placeholder: text.password_input,
    },
});

const confirm_password_input = createElement('input', {
    properties: {
        required: true,
        type: 'password',
        placeholder: text.confirm_password_input,
    },
});

text_inputs_container.append(
    first_name_input,
    last_name_input,
    display_name_input,
    email_input,
    password_input,
    confirm_password_input
);

const radio_inputs_container = createElement('div', {
    classes: ['radio-inputs-container'],
});

const radio_input_group1 = createElement('div', {
    classes: ['radio-input-group'],
});
const radio_input_group2 = createElement('div', {
    classes: ['radio-input-group'],
});

const radio_input1 = createElement('input', {
    properties: {
        type: 'radio',
        id: 'buyer',
        value: 'buyer',
        name: 'user-type',
        required: true,
    },
});

const radio_input2 = createElement('input', {
    properties: {
        type: 'radio',
        id: 'seller',
        value: 'seller',
        name: 'user-type',
        required: true,
    },
});

const radio_label1 = createElement('label', {attributes: {for: 'buyer'}});

const radio_label2 = createElement('label', {attributes: {for: 'seller'}});

const buyer = createElement('div', {textContent: text.buyer});
const seller = createElement('div', {textContent: text.seller});

const buyer_addition = createElement('p', {textContent: text.buyer_addition});
const seller_addition = createElement('p', {textContent: text.seller_addition});

radio_label1.append(buyer, buyer_addition);
radio_label2.append(seller, seller_addition);

radio_input_group1.append(radio_input1, radio_label1);
radio_input_group2.append(radio_input2, radio_label2);

radio_inputs_container.append(radio_input_group1, radio_input_group2);

const checkbox_input_group = createElement('div', {
    classes: ['checkbox-input-group'],
});

const allow_marketing = createElement('input', {
    properties: {
        type: 'checkbox',
        id: 'allow-marketing',
        name: 'allow-marketing',
    },
});

const allow_marketing_label = createElement('label', {
    attributes: {for: 'allow-marketing'},
    textContent: text.allow_marketing,
});

checkbox_input_group.append(allow_marketing, allow_marketing_label);

const submit_button = createElement('button', {
    classes: ['submit-button'],
    properties: {type: 'submit'},
    textContent: text.submit_button,
});

form.append(
    header_container,
    text_inputs_container,
    radio_inputs_container,
    checkbox_input_group,
    submit_button
);

container.appendChild(form);
