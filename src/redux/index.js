import {createStore} from "./../myRedux/createStore";
// import {bindActionCreators} from "redux";
import reducer from "./reducer";
import * as usersAction from "./action/usersAction";
import {bindActionCreators} from "./../myRedux/bindActionCreators";

const store = createStore(reducer);

store.subscribes(() => {
    console.log("newStore", store.getState());
});

const boundActions = bindActionCreators(usersAction.createAddUserAction, store.dispatch);
boundActions({
    id: 4,
    name: "Asdf"
});
boundActions({
    id: 4,
    name: "Asdf"
});

// boundActions.createAddUserAction({
//     id: 2,
//     name: "Sally",
//     age: 33
// });

// boundActions.createAddUserAction({
//     id: 3,
//     name: "Frank",
//     age: 44
// });

// boundActions.createAddUserAction({
//     id: 4,
//     name: "Jassper",
//     age: 55
// });





