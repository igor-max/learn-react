
function isPlainObject(obj) {
    if(obj === null & typeof obj !== "object") {
        return false;
    }
    return Object.getPrototypeOf(obj) === Object.prototype;
}


export function createStore(reducer, defaultState) {

    const listeners = [];

    function dispatch(action) {
        if(!isPlainObject(action)) {
            throw Error("action must be a plain object");
        }
        if(action.type === undefined) {
            console.log(action);
            throw Error("action must be have a propertype of type");
        }
        // 调用reducer,达到新的状态赋值给store中的旧state
        defaultState = reducer(defaultState, action);

        // 触发subscribes
        for (const listener of listeners) {
            listener();
        }
    }

    function getState() {
        return defaultState;
    }

    // 添加一个监听器
    function subscribes(listener) {
        listeners.push(listener);
        // 返回一个函数，可以移除监听器
        let isRemove = false;
        return function() {
            if(isRemove) {
                return;
            }
            const i= listeners.indexOf(listener);
            listeners.splice(i, 1);
            isRemove = true;
        }
    }

    // 创建仓库时，要调用一次reducer,也就需要分发一次
    dispatch({
        type: "xxxxx"
    })

    return {
        dispatch,
        getState,
        subscribes
    }
}