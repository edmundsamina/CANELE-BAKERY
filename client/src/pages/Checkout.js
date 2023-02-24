import "../styles/checkout.css";
import { useShoppingCart } from "../ShoppingCartContext/ShoppingCartContext";
import CheckoutItem from "../components/CheckoutItem/CheckoutItem";
import { useEffect, useState } from "react";

function Checkout() {
  const { cartItems } = useShoppingCart();
  const [totalCost, setTotalCost] = useState(0);
  const [emailActive, setEmailActive] = useState(true);
  const [paymentActive, setPaymentActive] = useState(false);

  const [email, setEmail] = useState("");

  function handleContinueClick(e) {
    e.preventDefault();
    if (email.length === 0) {
      alert("Please enter an email address");
    } else {
      setEmailActive(false);
      setPaymentActive(true);
      setEmail(email);
    }
  }

  function handleEditClick(e) {
    e.preventDefault();
    setEmailActive(true);
    setPaymentActive(false);
  }

  const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "GBP",
    style: "currency",
  });

  useEffect(() => {
    function subtotal(cartItems) {
      if (cartItems !== 0) {
        let cost = 0;
        for (let i = 0; i < cartItems.length; i++) {
          cost = cost + cartItems[i].price * cartItems[i].quantity;
        }
        setTotalCost(cost);
      } else {
        setTotalCost(0);
      }
    }
    subtotal(cartItems);
  }, [cartItems]);

  return (
    <section className="checkout">
      <div className="checkout-container">
        <div className="checkout-forms-container">
          {emailActive ? (
            //EMAIL SECTION OPEN
            <div className="email-section">
              <h2>1. Your Email</h2>

              <form className="email-form">
                <label for="email">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </label>
                <p>
                  You'll receive receipts and notifications at this email
                  address
                </p>
                <button onClick={handleContinueClick}>Continue</button>
              </form>
            </div>
          ) : (
            //EMAIL SECTION CLOSED
            <div className="email-section">
              <div className="email-edit">
                <h2>1. Your Email</h2>
                <p className="edit" onClick={handleEditClick}>
                  edit
                </p>
              </div>
              <p className="email">{email}</p>
            </div>
          )}

          {paymentActive ? (
            //PAYMENT SECTION OPEN
            <div className="payment">
              <h2>2. Payment & Purchase</h2>
              <form>
                <div className="card-details-wrapper">
                  <label for="cardnumber" className="card-number">
                    <input
                      type="number"
                      id="cardnumber"
                      name="cardnumber"
                      placeholder="Card number"
                    ></input>
                  </label>
                  <div className="card-security-container">
                    <label for="cardexpiry" className="card-security">
                      <input
                        type="text"
                        id="cardexpiry"
                        name="cardexpiry"
                        placeholder="MM/YY"
                      ></input>
                    </label>
                    <label for="cvc" className="card-security">
                      <input
                        type="text"
                        id="cvc"
                        name="cvc"
                        placeholder="CVC"
                      ></input>
                    </label>
                  </div>
                </div>
                <p>Transactions are secure and encrypted.</p>

                <h3>Billing Address</h3>
                <section className="billing-address-form">
                  <div className="form-flex-row">
                    <label for="firstname">
                      <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder="First Name"
                      ></input>
                    </label>
                    <label for="lastname">
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="Last Name"
                      ></input>
                    </label>
                  </div>

                  <label for="address1">
                    <input
                      type="text"
                      id="address1"
                      name="address1"
                      placeholder="Address 1"
                    ></input>
                  </label>
                  <label for="address2">
                    <input
                      type="text"
                      id="address2"
                      name="address2"
                      placeholder="Address 2"
                    ></input>
                  </label>
                  <div className="form-flex-row">
                    <label for="postcode">
                      <input
                        type="text"
                        id="postcode"
                        name="postcode"
                        placeholder="Post Code"
                      ></input>
                    </label>
                    <label for="city">
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="City"
                      ></input>
                    </label>
                    <label for="county">
                      <input
                        type="text"
                        id="county"
                        name="county"
                        placeholder="County"
                      ></input>
                    </label>
                  </div>
                  <label for="phonenumber">
                    <input
                      type="tel"
                      id="phonenumber"
                      name="phonenumber"
                      placeholder="Phone Number"
                    ></input>
                  </label>
                </section>
              </form>
              <button
                onClick={() => {
                  setEmailActive(false);
                  setPaymentActive(true);
                  console.log(email);
                }}
              >
                Purchase
              </button>
            </div>
          ) : (
            //PAYMENT SECTION CLOSE
            <div className="payment">
              <h2>2. Payment & Purchase</h2>
            </div>
          )}
        </div>

        <div className="checkout-items-container">
          <h2>Order Summary</h2>
          {cartItems.map((item) => {
            return (
              <CheckoutItem
                key={item.id}
                title={item.title}
                quantity={item.quantity}
                img={item.img}
                price={CURRENCY_FORMATTER.format(item.price)}
                id={item.id}
                totalPrice={CURRENCY_FORMATTER.format(
                  item.price * item.quantity
                )}
              />
            );
          })}
          <div className="checkout-cost">
            <p>Subtotal</p>
            <p>{CURRENCY_FORMATTER.format(totalCost)}</p>
          </div>
          <div className="checkout-cost">
            <p>Tax</p>
            <p>£0.00</p>
          </div>
          <div className="checkout-cost">
            <p className="checkout-total">Total</p>
            <p className="checkout-total">
              {CURRENCY_FORMATTER.format(totalCost)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
