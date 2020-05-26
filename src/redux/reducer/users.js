import {ADDUSER, DELETEUSER, UPDATAUSER} from "./../action/usersAction";

const initValue = [
    {
        id: 0,
        name: "jack",
        age: 11
    },{
        id: 1,
        name: "tom",
        age: 22
    }
];

export default function(state = initValue, {type, payLoad, ...rest}) {
    switch(type) {
        case ADDUSER: 
            return [...state, payLoad];
        case DELETEUSER: 
            return state.filter(item => item.id !== payLoad.id);
        case UPDATAUSER:
            return state.map(item => item.id === payLoad.id ? {...item, ...payLoad} : item);
        default:
            return state;
    }
}