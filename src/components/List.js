function List(props) {
    const fruitItems = props.fruits.map((eachFruit, idx) => {
    return <li> {eachFruit} </li>
        });


        return(
            <div>
                <ul>
                    {fruitItems}
                </ul>
            </div>
        )
    }


export default List;