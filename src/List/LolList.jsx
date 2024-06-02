function LolList(){
    
    const fruits = [{id:1, name: "apple", calories:95}, 
                    {id:2, name: "orange", calories:45}, 
                    {id:3, name: "banana", calories:105}, 
                    {id:4, name: "coconut", calories:159}, 
                    {id:5, name: "pineapple", calories:37}];

    // MAP function:

    // Sort alphabetically
    fruits.sort((a,b) => a.name.localeCompare(b.name))
    // Sort reverse alphabetically
    // fruits.sort((a,b) => b.name.localeCompare(a.name))
    // Array to list items

    // FILTER function:
    const lowCalfruits = fruits.filter(fruit => fruit.calories < 100);
    const highCalfruits = fruits.filter(fruit => fruit.calories > 100);

    
    const lowListItems = lowCalfruits.map(lowCalfruit => <li key={lowCalfruit.id}>
                                            {lowCalfruit.name} :&nbsp;
                                            <b>{lowCalfruit.calories}</b></li>)
    
    const highListItems = highCalfruits.map(highCalfruit => <li key={highCalfruit.id}>
        {highCalfruit.name} :&nbsp;
        <b>{highCalfruit.calories}</b></li>)


    return(<>
        <ol>{lowListItems}</ol>
        <ol>{highListItems}</ol>
    </>);
}

export default LolList;