let formHTML = `
    <div class="form-content-container">
        <div class="heading-container">
            <h1>Create an account</h1>
            <p>We always keep your name and email address private.</p>
        </div>

        <div class="text-inputs-container">
            <input type="text" placeholder="First name" required>
            <input type="text" placeholder="Last name" required>
            <input type="text" placeholder="Display Name" required>
            <input type="email" placeholder="Email Address" required>
            <input type="password" placeholder="Password" required>
            <input type="password" placeholder="Password Confirmation" required>
        </div>

        <div class="radio-inputs-container">
            <div class="radio-input-group">
                <input type="radio" name="buyer-or-seller-selector" required>
                <div>
                    <div>Join As a Buyer</div>
                    <p>I am looking for a Name, Logo or Tagline for my business, brand or product.</p>
                </div>
            </div>
            <div class="radio-input-group">
                <input type="radio" name="buyer-or-seller-selector" required>
                <div>
                    <div>Join As a Creative or Marketplace Seller</div>
                    <p>I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.</p>
                </div>
            </div>
        </div>

        <div class="checkbox-input-group">
            <input type="checkbox" name="allow-marketing">
            <label for="allow-marketing">Allow Squadhelp to send marketing/promotional offers from time to time</label>
        </div>

        <button type="submit" class="submit-button">Create account</button>
    </div>
`;

let container = document.querySelector('.container');

let form = document.createElement('form');
form.innerHTML = formHTML;

container.appendChild(form);

// TODO: Change styles to use grid instead of flex (maybe)
// TODO: Remove "div.form-content-container" and move it styles to a form
// TODO: Think about: do i need to separate heading from a form or not and why so
