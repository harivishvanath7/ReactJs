import { useState } from "react";

function OnChangeComp(){

    const[name, setName] = useState("");
    const[quantity, setQuantity] = useState(0);
    const[comment, setComment] = useState("");
    const[payment, setPayment] = useState("");
    const[shipping, setShipping] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    
    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(
        <div>

            {/* // OnChange for <input> elements */}
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>

            {/* // OnChange for <textarea> elements */}
            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter instructions"/>
            <p>Comment: {comment}</p>

            {/* // OnChange for <select> elements */}
            <select value={payment} onChange={handlePaymentChange}>
                <option value=""> Select an Option </option>
                <option value="UPI"> UPI </option>
                <option value="Visa"> Visa </option>
                <option value="Mastercard"> Mastercard </option>
            </select>
            <p>Payment: {payment}</p>

            {/* // OnChange for <radio> elements */}
            <label>
                <input type="radio" value="Pick up" 
                checked={shipping === "Pick up"} 
                onChange={handleShippingChange}/>
                Pick Up
            </label>

            <label>
                <input type="radio" value="Delivery" 
                checked={shipping === "Delivery"} 
                onChange={handleShippingChange}/>
                Delivery
            </label>

            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default OnChangeComp;