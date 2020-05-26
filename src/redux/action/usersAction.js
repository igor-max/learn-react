export const ADDUSER = Symbol("add-user");
export const DELETEUSER = Symbol("delete-user");
export const UPDATAUSER = Symbol("updata-user");

export function createAddUserAction(user) {
    return {
        type: ADDUSER,
        payLoad: user
    };
}

export function createDeleteUserAction(id) {
    return {
        type: DELETEUSER,
        payLoad: id
    };
}

export function createUpdataUserAction(id, newUserData) {
    return {
        type: UPDATAUSER,
        payLoad: {
            id,
            ...newUserData
        }
    };
}