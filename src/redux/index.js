import {createStore, bindActionCreators} from "redux";
import reducer from "./reducer";
import * as usersAction from "./action/usersAction";

const store = createStore(reducer);

const res = store.subscribe(() => {
    console.log("获取state", store.getState());
})

const boundActions = bindActionCreators(usersAction, store.dispatch);

console.log(store.getState());

boundActions.createAddUserAction({
    id: 3,
    name: "sally",
    age: 33
});

res();

boundActions.createDeleteUserAction({
    id: 0
});

