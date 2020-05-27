// 获取自动分发action的函数
function getAutoDispathActionCreators(actionCreators, dispatch) {
    return function(...args) {
        const action = actionCreators(...args);
        dispatch(action);
    }
}

export function bindActionCreators(actionCreators, dispatch) {
    if(typeof actionCreators === "function") {
        // 如果actionCreators是一个函数，则返回值也是一个函数，直接调用返回的函数即可完成分发
        return getAutoDispathActionCreators(actionCreators, dispatch);
        // return function(...args) {
        //     const action = actionCreators(...args);
        //     // 分发dispatch
        //     dispatch(action);
        // }
      
    } else if(typeof actionCreators === "Object" && typeof actionCreators !== null) {
        const result = {};
        for(const key in actionCreators) {
            if(actionCreators.hasOwnProperty(key)) {
                const value = actionCreators[key];
                if(typeof value === "function") {
                    result[key] = getAutoDispathActionCreators(actionCreators, dispatch);
                }
            }
        }
        return result;
    } else {
        throw Error("actionCreators mustb be a function or object");
    }
}
