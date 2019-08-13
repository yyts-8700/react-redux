import React,{Component} from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "../actions/actions"
class item extends Component{
    constructor(){
        super()
        this.state = {
            isEdit: false
        }
    }
    showContent(){
        if(this.state.isEdit){
            return <input ref="input" onBlur={()=>{this.blurHandler()}} type="text"/>
        }else{
            return <label htmlFor={this.props.item.id} className={this.props.item.done===true?"done":""}>{this.props.item.content}</label>
        }
    }
    blurHandler(){
        this.setState({isEdit:false})
        this.props.actions.updateItem(this.refs.input.value,this.props.item.id);
    }
    dbClick(){
        this.setState({isEdit:!this.state.isEdit},function(){
            if(this.refs.input){
                this.refs.input.focus();
            }
        });
        
    }
    deleteItem(){
       this.props.actions.deleteItem(this.props.item.id)
    }
    changeBox(){
        this.props.actions.changeItem(this.props.item.id);
    }
    render(){
        return <div>
            <input type="checkbox" id={this.props.item.id} checked={this.props.item.done===true?true:false} onChange={()=>{this.changeBox()}}/>
            <span onDoubleClick={()=>{this.dbClick()}}>{this.showContent()}</span> &nbsp;
            <button onClick={()=>{this.deleteItem()}}>x</button>
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
)(item)
// export default item