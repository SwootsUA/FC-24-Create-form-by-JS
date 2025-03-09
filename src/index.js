'use strict';

const text = {
    header: 'Create an account',
    headerAddition: 'We always keep your name and email address private.',
    buyer: 'Join As a Buyer',
    buyerAddition:
        'I am looking for a Name, Logo or Tagline for my business, brand or product.',
    seller: 'Join As a Creative or Marketplace Seller',
    sellerAddition:
        'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.',
    allowMarketing:
        'Allow Squadhelp to send marketing/promotional offers from time to time',
    submitButton: 'Create account',
    firstNameInput: 'First name',
    lastNameInput: 'Last name',
    displayNameInput: 'Display Name',
    emailInput: 'Email Address',
    passwordInput: 'Password',
    confirmPasswordInput: 'Password Confirmation',
};

const container = document.querySelector('.container');

const form = document.createElement('form');

const headerContainer = document.createElement('div');
headerContainer.classList.add('heading-container');

const header = document.createElement('h1');
header.textContent = text.header;
const headerAddition = document.createElement('p');
headerAddition.textContent = text.headerAddition;

headerContainer.append(header, headerAddition);

const textInputsContainer = document.createElement('div');
textInputsContainer.classList.add('text-inputs-container');

const firstNameInput = document.createElement('input');
firstNameInput.required = true;
firstNameInput.type = 'text';
firstNameInput.placeholder = text.firstNameInput;

const lastNameInput = document.createElement('input');
lastNameInput.required = true;
lastNameInput.type = 'text';
lastNameInput.placeholder = text.lastNameInput;

const displayNameInput = document.createElement('input');
displayNameInput.required = true;
displayNameInput.type = 'text';
displayNameInput.placeholder = text.displayNameInput;

const emailInput = document.createElement('input');
emailInput.required = true;
emailInput.type = 'email';
emailInput.placeholder = text.emailInput;

const passwordInput = document.createElement('input');
passwordInput.required = true;
passwordInput.type = 'password';
passwordInput.placeholder = text.passwordInput;

const confirmPasswordInput = document.createElement('input');
confirmPasswordInput.required = true;
confirmPasswordInput.type = 'password';
confirmPasswordInput.placeholder = text.confirmPasswordInput;

textInputsContainer.append(
    firstNameInput,
    lastNameInput,
    displayNameInput,
    emailInput,
    passwordInput,
    confirmPasswordInput
);

const radioInputsContainer = document.createElement('div');
radioInputsContainer.classList.add('radio-inputs-container');

const radioInputGroup1 = document.createElement('div');
const radioInputGroup2 = document.createElement('div');
radioInputGroup1.classList.add('radio-input-group');
radioInputGroup2.classList.add('radio-input-group');

const radioInput1 = document.createElement('input');
radioInput1.type = 'radio';
radioInput1.id = 'buyer';
radioInput1.value = 'buyer';
radioInput1.name = 'user-type';
radioInput1.required = true;

const radioInput2 = document.createElement('input');
radioInput2.type = 'radio';
radioInput2.id = 'seller';
radioInput2.value = 'seller';
radioInput2.name = 'user-type';
radioInput2.required = true;

const radioLabel1 = document.createElement('label');
radioLabel1.setAttribute('for', 'buyer');

const radioLabel2 = document.createElement('label');
radioLabel2.setAttribute('for', 'seller');

const buyer = document.createElement('div');
buyer.innerText = text.buyer;
const seller = document.createElement('div');
seller.innerText = text.seller;
const buyerAddition = document.createElement('p');
buyerAddition.innerText = text.buyerAddition;
const sellerAddition = document.createElement('p');
sellerAddition.innerText = text.sellerAddition;

radioLabel1.append(buyer, buyerAddition);
radioLabel2.append(seller, sellerAddition);

radioInputGroup1.append(radioInput1, radioLabel1);
radioInputGroup2.append(radioInput2, radioLabel2);

radioInputsContainer.append(radioInputGroup1, radioInputGroup2);

const checkboxInputGroup = document.createElement('div');
checkboxInputGroup.classList.add('checkbox-input-group');

const allowMarketing = document.createElement('input');
allowMarketing.type = 'checkbox';
allowMarketing.id = 'allow-marketing';
allowMarketing.name = 'allow-marketing';

const allowMarketingLabel = document.createElement('label');
allowMarketingLabel.setAttribute('for', 'allow-marketing');
allowMarketingLabel.innerText = text.allowMarketing;

checkboxInputGroup.append(allowMarketing, allowMarketingLabel);

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.classList.add('submit-button');
submitButton.innerText = text.submitButton;

form.append(
    headerContainer,
    textInputsContainer,
    radioInputsContainer,
    checkboxInputGroup,
    submitButton
);

container.appendChild(form);
