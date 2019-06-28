import React from "react";

class Bands extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                {this.props.bands.map(x=>{
                    return <li>{x.name}</li>
                })}
            </div>
        )
    }
}

export default Bands