import React from 'react';
import './RefundPolicy.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Policy = () => {
  return (
    <div>
        <Navbar/>
        <div className="policy-container">
        <h2>Refund and Return Policy</h2>
        <ol>
            <li>
            Our services are non-refundable, all classes and class packs have an expiry date. 
            If the services are not used within the prescribed time they will expire and no 
            refund will be made for any unused portion of the package. All memberships are 
            pre-paid and non-refundable.
            </li>
            <li>
            For retail products, any undamaged product, simply return it with its included 
            accessories and packaging along with the original receipt within 7 days of the 
            date you purchased the product, and we will exchange it or offer a refund to 
            the original payment method.
            </li>
        </ol>
        <h2>Fees</h2>
        <ol start="14">
            <li>
            We reserve the right to change Fees at any time. In the event that Fees are to 
            be changed, we will make reasonable attempts to provide you with written notice 
            of change to Fees to your nominated email address. The notice period for the 
            change of Fees will be no less than 1 calendar month from the date you receive 
            notice. Notice of the change to any Fees is deemed to have been received by you 
            2 working days after we have sent written notice to you by email.
            </li>
        </ol>
        <h2>Membership cancellation, suspension and restriction</h2>
        <ol start="15">
            <li>
            If you hold a Membership, your Membership will be automatically renewed at the 
            conclusion of the Membership duration. Memberships are billed upfront every month. 
            You are free to cancel your Membership at any time, giving at least 7 days notice 
            prior to your next payment date. Should you give notice of cancellation with less 
            than 7 days until your next payment date, you will still be charged for the next 
            month. No refunds are payable on any fees which have been paid by you for your 
            Membership. Cancel online (if paid via credit card) or contact us (if paid via 
            direct debit).
            </li>
            <li>
            We may cancel your Membership immediately and at any time by giving you written 
            notice where you breach a fundamental term of this Agreement.
            </li>
            <li>
            You may suspend your Membership at any time. We require notification in advance 
            in writing (via email) 7 days prior to the start date of your desired suspension.
            <p>We have a minimum suspension period of 14 days, should you ask for a suspension 
            of 13 days or less we will not honour the request.</p>
            </li>
        </ol>
        </div>
        <Footer/>
    </div>
  );
};

export default Policy;
