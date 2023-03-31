import React from "react";

const Checkout = () => {
  return (
    <div className="checkout-container">
      <div className="checkout-summary">
        <h2>Order Summary</h2>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product A</td>
              <td>$10.00</td>
              <td>2</td>
              <td>$20.00</td>
            </tr>
            <tr>
              <td>Product B</td>
              <td>$15.00</td>
              <td>1</td>
              <td>$15.00</td>
            </tr>
            <tr>
              <td>Product C</td>
              <td>$20.00</td>
              <td>3</td>
              <td>$60.00</td>
            </tr>
          </tbody>
        </table>
        <div className="subtotal">
          <span>Subtotal</span>
          <span>$95.00</span>
        </div>
        <div className="taxes">
          <span>Taxes</span>
          <span>$9.50</span>
        </div>
        <div className="shipping">
          <span>Shipping</span>
          <span>$5.00</span>
        </div>
        <div className="total">
          <span>Total</span>
          <span>$109.50</span>
        </div>
      </div>

      <div className="checkout-form">
        <form>
          <h2>Customer Information</h2>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name" name="first-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" name="last-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" required />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <select id="country" name="country" required>
                <option value="">Select a country</option>
                <option value="us">Kenya</option>
                <option value="ca">Uganda</option>
                <option value="mx">Tanzania</option>
                {/* add more options as needed */}
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" required />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input type="text" id="state" name="state" required />
            </div>
            <div className="form-group">
              <label htmlFor="postal-code">Postal Code</label>
              <input type="text" id="postal-code" name="postal-code" required />
            </div>
          </div>
          <h2>Payment Info</h2>
          <div className="form-group">
            <label htmlFor="payment-method">Payment Method</label>
            <select id="payment-method" name="payment-method" required>
              <option value="">--Please select--</option>
              <option value="test-gateway">Test Gateway</option>
              <option value="credit-card">Credit Card</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="ccn">Credit Card Number</label>
            <input
              type="tel"
              id="ccn" name="ccn"
              inputmode="numeric"
              pattern="[0-9\s]{13,19}"
              autocomplete="cc-number"
              maxlength="19"
              placeholder="xxxx xxxx xxxx xxxx"
            />
            <label htmlFor="billing-address">Billing address</label>
            <input type="text" id="billing-address" name="billing-address" />
          </div>
          <div className="form-group">
            <label htmlFor="month-year">Month and year</label>
            <input type="month" id="month-year" name="month-year" />
          </div>
          <button type="submit">Complete checkout and pay</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
