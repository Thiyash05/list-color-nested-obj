import {Component} from "react"

class Create extends Component{
    render(){
        const {data}=this.props
        const ans=data.map((e,i)=>{
            return(
                <div key={i}>
                   <li>My name {e.name}</li>
                   <li>My age {e.age}</li>
                   <li>My profession {e.profession}</li>
                    
                </div>
            )
        })
        return(
            <div>
                <h2>Class component</h2>
                <ul>
                   {ans}
                </ul>
                
                
            </div>
        )
    }

}
export default Create