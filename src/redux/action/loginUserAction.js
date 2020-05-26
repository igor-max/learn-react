export const LOGINUSER = Symbol("login-user");

export function createLoginUserAction(user) {
    return {
        type: LOGINUSER,
        payLoad: user
    };
}