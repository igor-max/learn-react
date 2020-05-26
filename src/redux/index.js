import {createStore, bindActionCreators} from "redux";
import reducer from "./reducer";
import * as usersAction from "./action/usersAction";

const store = createStore(reducer);

const boundActions = bindActionCreators(usersAction, store.dispatch);

console.log(store.getState());

boundActions.createAddUserAction({
    id: 3,
    name: "sally",
    age: 33
});

console.log(store.getState());

// boundActions.createJianAction();

// console.log(store.getState());

// boundActions.createInputAction(33);

// console.log(store.getState());