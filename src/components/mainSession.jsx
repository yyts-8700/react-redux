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
            filterStatus: "all"
        }
    }
    changeFilter(val){
        this.setState({
            filterStatus: val
        })
    }
    hello(){
        console.log(1111)
    }
    
    render(){
        let filteredTodos = (function(){
            if(this.state.filterStatus === "all"){
                return this.props.reducer
            }else if(this.state.filterStatus === "done"){
                return this.props.reducer.filter(item=>{
                    return item.done === true
                })
            }else if(this.state.filterStatus === "notdone"){
                return this.props.reducer.filter(item=>{
                    return item.done === false
                })
            }
        }).call(this)
        
        return <div>
            <ul>
                {filteredTodos.map((item,index)=>{
                    return <Item key={index} item={item} actions={this.props.actions}>{item.content}</Item>
                })}
            </ul>
            <InfoBar reducer={this.props.reducer} changeFilter={this.changeFilter.bind(this)}/>
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