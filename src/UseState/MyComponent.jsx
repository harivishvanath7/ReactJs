import { useState } from "react";

function MyComponent(){

    // stateful variable and setter method
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Sponge Bob");
    }

    const updateAge = () => {
        setAge(age+1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>Set Age</button>

            <p>Employed: {isEmployed ? "Yes" : "No" }</p>
            <button onClick={toggleEmployedStatus}>Change</button>
        
        </div>
    )
}

export default MyComponent;