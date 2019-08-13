import React,{Component} from "react"
import InfoBar from './infoBar'
import Item from './item'

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "../actions/actions"

class mainSession extends Component{
    constructor(){
        super();
        this.state = {
            father: "爸爸给的"
        }
    }
    render(){
        return <div>
            <ul>
                {this.props.reducer.map((item,index)=>{
                    return <Item key={index} item={item} actions={this.props.actions}>{item.content}</Item>
                })}
            </ul>
            <InfoBar/>
        </div>
    }
}
export default connect(
    (state)=>{
        return {
            reducer:state.reducer
        }
    },
    (dispatch)=>{
        return {
            actions: bindActionCreators(actions,dispatch)
        }
    }
)(mainSession)