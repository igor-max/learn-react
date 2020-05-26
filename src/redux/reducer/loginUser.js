import {LOGINUSER} from "./../action/loginUserAction";

export default function(state = null, {type, payLaod, ...rest}) {
    switch(type) {
        case LOGINUSER: 
            return payLaod;
        default:
            return state;
    }
} 