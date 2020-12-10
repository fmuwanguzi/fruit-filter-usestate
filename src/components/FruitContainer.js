import React, { useState } from 'react';
//components
import List from './List';
import Input from './Input';

function FruitContainer(props) {
    const [fruitsToDisplay, setFruitsToDisplay] = useState(props.fruits)
    const [filterValue, setfilterValue] = useState('') 
    
    const handleFilterChange = (e) => {
        e.preventDefault();
        // e.target.value is the user input
        const filteredValue = e.target.value;
        //Remove tge fruits that don't contain the filer value
        const filteredFruitList = props.fruits.filter(fruit => {
            return fruit.toLowerCase().includes(filteredValue.toLowerCase());

        })

        setFruitsToDisplay(filteredFruitList)
        setfilterValue(filteredValue)

    }

        //Inside of Input Componenet, to access props, I will say props.value
        //Inside of List Componenet, to access props, I will say props.fruits
        return(
            <div>
                <Input value={filterValue} onChange={handleFilterChange}/>
                <List fruits={fruitsToDisplay}/>
            </div>
        )
    }


export default FruitContainer;