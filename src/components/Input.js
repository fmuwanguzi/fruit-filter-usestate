import React, { useState } from 'react';

function Input(props) {
    return(
            <div>
                <label htmlFor="fruit-filter" >Filter There Fruits:</label>
                <input type="text" value={props.value} onChange={props.onChange} name="fruit-filter"/>
            </div>
        )
    }


export default Input;