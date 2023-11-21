let Employee=(props)=>{
    const {employeeDetail}=props
    const res=employeeDetail.map((e,i)=>{
        return(
            <div key={i}>
                <li>Name: {e.name}</li>
                <li>Skill-Name: {e.skills[0].name}  , Skill-Type:  {e.skills[0].type} </li>
                <li>Skill-Name: {e.skills[1].name}  , Skill-Type:  {e.skills[1].type} </li>
               
                
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
export default Employee