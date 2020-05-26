import {createStore, bindActionCreators} from "redux";
import * as actionTypes from "./action/action-type";
import * as numberAction from "./action/number-action";

/**
 * reducer本质是一个普通函数
 * @param {*} state 就的状态(数据)
 * @param {*} action 
 * return newState
 */
function reducer(state, action) {
    switch(action.type) {
        case actionTypes.JIA:
            return state + 1;
        case actionTypes.JIAN: 
            return state - 1;
        case actionTypes.INPUT: 
            return action.payLoad;
        default: 
            return state;
    }
}

/**
 * first param: 该函数保存reducer的引用
 * second param: store中state的默认值
 */
const store = createStore(reducer, 10);

/*

console.log(store.getState());

store.dispatch(numberAction.createJiaAction());

console.log(store.getState());

store.dispatch(numberAction.createJianAction());

console.log(store.getState());

store.dispatch(numberAction.createInputAction(5));

*/


/**
 * first param: 一个action的对象
 * second param: 仓库的dispatch函数
 * return: 一个对象，该对象中的函数索引不是和action对象一致，返会的对象只需调用里面的方法就会分发
 */
const boundActions = bindActionCreators(numberAction, store.dispatch);

console.log(boundActions, numberAction, numberAction.createInputAction === boundActions.createInputAction);

console.log(store.getState());

boundActions.createJiaAction();

console.log(store.getState());

boundActions.createJianAction();

console.log(store.getState());

boundActions.createInputAction(33);

console.log(store.getState());