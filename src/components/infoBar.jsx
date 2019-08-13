import React,{Component} from "react"
class infoBar extends Component{
    componentDidMount(){
        console.log(this)
        
    }
    render(){
        return <div>
            共{this.props.reducer.length}条
            已经完成{this.props.reducer.filter(item=>{return item.done===true}).length}条
            没有完成{this.props.reducer.filter(item=>{return item.done===false}).length}条
            <button onClick={()=>{this.props.changeFilter("all")}}>全部</button>
            <button onClick={()=>{this.props.changeFilter("done")}}>已完成</button>
            <button onClick={this.props.changeFilter.bind(undefined,"notdone")}>未完成</button>
        </div>
    }
}
export default infoBar