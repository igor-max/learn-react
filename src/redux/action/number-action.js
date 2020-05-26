import * as actionTypes from "./action-type";

export function createJiaAction () {
    return {
        type: actionTypes.JIA
    }
}

export function createJianAction () {
    return {
        type: actionTypes.JIAN
    }
}

export function createInputAction (params) {
    return {
        type: actionTypes.INPUT,
        payLoad: params
    }
}