import React, { Component } from 'react'
import Name from './Components/Name'
export class Main1 extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'Ali',
            greetMsg:'welcome'

        }
    }
    render() {
        return (
            <div>
              <Name name={this.state.name} greetMsg={this.state.greetMsg}/>
            </div>
        )
    }
}

export default Main1
