function List(props){
    const {fruitDetail}=props
    const res=fruitDetail.map((e,i)=>{
        return(
            <div key={i}>
                <li>Fruit name: {e.name}</li>
                <li>Fruit color: {e.color}</li>
                <li>Fruit price: {e.price}</li>
            </div>
        )
    })
    return(
            <div>
                <h2>Function component</h2>
                <ul>
                    {res}
                </ul>
            </div>
    )
}
export default List