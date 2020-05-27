import {createStore} from "./../myRedux/createStore";
import reducer from "./reducer";
import * as usersAction from "./action/usersAction";

const store = createStore(reducer);

console.log(store.getState());

store.dispatch(usersAction.createAddUserAction({
    id: 3,
    name: "Sally",
    age: 33
}));

console.log(store.getState());

store.dispatch(usersAction.createDeleteUserAction({
    id: 0
}));

console.log(store.getState());