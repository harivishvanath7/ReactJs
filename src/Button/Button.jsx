function Button(){

    // normal click event handler
    const handleClick1 = () => console.log("OUCH!!");

    // click event handler with params
    const handleClick2 = (name) => console.log(`${name}, Stop clicking me!!`);
    
    // with conditions
    let count=0;

    const handleClick3 = () => {
        if(count < 3){
            count++;
            console.log(`${name}, You clicked me ${count} time/s`);
        }
        else{
            console.log(`${name}, Stop clicking me.`);
        }
    };

    // with event parameter
    const handleClick4 = (e) => console.log(e);

    // change text content
    const handleClick5 = (e) => e.target.textContent = "OUCH!!";

        return(
            <>  
                <button onClick={(e) => handleClick4(e)}>Click Me</button>        {/* Single-click */}
                <button onDoubleClick={(e) => handleClick5(e)}>Click Me</button>  {/* Double-click */}
            </>
        );
    }
    
    export default Button;