import React,{Component}from 'react';
import "../assets/css/hello.scss"
import {connect} from "react-redux"
import * as actions from "../actions/actions"
import {bindActionCreators} from "redux"


class header extends Component{
    addItem(){
        this.props.actions.addItem(this.refs.content.value);
        this.refs.content.value = '';
    }
    keyDown(e){
        if(e.keyCode === 13){
            this.addItem();
        }
    }
    render(){
        return <div>
            <span>待办事项:</span>&nbsp; 
            <input type="text" ref="content" onKeyDown={(e)=>{this.keyDown(e)}}/>&nbsp; 
            <input type="button" value="添加" onClick={()=>{this.addItem()}}/>
        </div>
    }
}
export default connect(
    null,
    (dispatch)=>{
        return {
            actions: bindActionCreators(actions,dispatch)
        }
    }
)(header)

