import users from "./users";
import loginUser from "./loginUser";
import { combineReducers } from "redux";

export default combineReducers({
    users,
    loginUser
})


/*

export default function (state = {}, action) {
    console.log(state, action);
    // 第一次调用 
    // satte = {} || createStore(rducer, stateValue) 
    // action = {type: "@@redux/INITl.i.x.w.j.f"}
    return {
        users: users(state.users, action),
        // type匹配不到，直接返回state的初始值,但是state.users是undefined，所以会使用users中的默认值
        loginUser: loginUser(state.loginUser, action)
        // type匹配不到，直接返回state的初始值,但是state.users是undefined，所以会使用loginUser中的默认值
    };
    // 所以第一次运行最后返回给仓库的值为 =  {
    //     users: state = [{id: 0, name: "jack", age: 11},{id: 1, name: "tom", age: 22}]
    //     loginUser: state = undefined
    // }
}

*/

/*

export default function (state = {}, action) {
    console.log(state, action);
    // 第一次分发 createAddUserAction({id,name,age}) 返回的action是 {type: ADDUSER, payLoad: {id,name,age}}
    return {
        // 运行该函数，把 state.users 和 action 传入
            state.users为store中传过来的值，而不是默认值了，
            state.users = [{id: 0, name: "jack", age: 11},{id: 1, name: "tom", age: 22}]
            action =  = {type: ADDUSER, payLoad: {id,name,age}}
        users: users(state.users, action),
        // 运行该函数，直接返回 [{id: 0, name: "jack", age: 11},{id: 1, name: "tom", age: 22}, {id: 2, name: "sally", age: 33}]
        loginUser: loginUser(state.loginUser, action)
    };
}

*/

