// Global
const COVER = "/";
const JOIN = "/join";
const LOGIN = "/login";

// USERS
const USER = "/user";
const USER_DETAIL = "/:id";
const USER_PROFILE = "/user-profile";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const USER_INFO = "/information";
const EDIT_INFO = "/edit-information";

const routes = {
    home: COVER,
    join: JOIN,
    login: LOGIN,
    user: USER,
    userDetail: USER_DETAIL,
    userProfile: USER_PROFILE,
    editProfile: EDIT_PROFILE,
    userInfo: USER_INFO,
    editInfo: EDIT_INFO,
    changePassword: CHANGE_PASSWORD
};

export default routes;