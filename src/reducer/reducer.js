let initState = [
    {
        id: 1,
        content: "默认事项1",
        done: true
    },
    {
        id: 2,
        content: "默认事项2",
        done: false
    },
    {
        id: 3,
        content: "默认事项3",
        done: false
    }
]
let count = 0;
export default (state=initState,action)=>{
    switch(action.type){
        case "UPDATEITEM":
            return state.map((item)=>{
               return item.id != action.id?item:{...item,content: action.content}
            })
            break;
        case "DELETEITEM":
            return state.filter((item)=>{
                    return item.id !== action.id
            })
        case "CHANGEITEM":
            return state.map((item)=>{
                return item.id !== action.id ? item : {
                    ...item,
                    done: !item.done
                }
            })
        case "ADDITEM":
            return [
                ...state,
                {
                   id: state.length+1,
                   content: action.content,
                   done: false
                }
            ]
        default:
            return state;
    }
}