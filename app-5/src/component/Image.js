import React, {Component} from 'react'

export default class Image extends Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }

    render() {
        return (
            <div>
              <img src={this.props.source} alt=""/>
            </div>
        )
    }
}