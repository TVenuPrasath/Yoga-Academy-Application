import React from 'react';
import './Payment.css';

const Payment = () => {
    return (
        <div className="payment-container">
            <div className="payment-header">
                <h2>Secure Checkout</h2>
            </div>
            <div className="payment-content">
                <div className="payment-form">
                    <h3>Payment Details</h3>
                    <form>
                        <div className="form-group">
                            <label>Cardholder Name</label>
                            <input type="text"  required placeholder="John Doe" />
                        </div>
                        <div className="form-group">
                            <label>Card Number</label>
                            <input type="text" required placeholder="1234 5678 9123 4567" />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Expiry Date</label>
                                <input type="text"   required placeholder="MM/YY" />
                            </div>
                            <div className="form-group">
                                <label>CVV</label>
                                <input type="text" required placeholder="123" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Billing Address</label>
                            <input type="text" required placeholder="1234 Main St" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email"  required placeholder="example@example.com" />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="text" placeholder="+1234567890" />
                        </div>
                        <button type="submit" className="payment-button">Confirm Payment</button>
                    </form>
                </div>
                <div className="order-summary">
                    <h3>Order Summary</h3>
                    <p>Product Name: Yoga For Beginners</p>
                    {/* <p>Quantity: 1</p> */}
                    <p>Total: $50.00</p>
                </div>
            </div>
        </div>
    );
}

export default Payment;
