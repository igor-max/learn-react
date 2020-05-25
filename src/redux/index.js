import {createStore} from "redux";

/**
 * reducer本质是一个普通函数
 * @param {*} state 就的状态(数据)
 * @param {*} action 
 * return newState
 */
function reducer(state, action) {
    switch(action.type) {
        case "jia":
            return state + 1;
        default: 
            return state;
    }
}

/**
 * first param: 该函数保存reducer的引用
 * second param: store中state的默认值
 */
const store = createStore(reducer, 10);

const action = {
    type: "jia"
}

// get store state
console.log(store.getState());

// dispatch action
store.dispatch(action);

console.log(store.getState());