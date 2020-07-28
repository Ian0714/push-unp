export const join = (req,res) => res.render("Join", { pageTitle: "Join" });
export const login = (req,res) => res.render("Login", { pageTitle: "Login" });
export const user = (req,res) => res.render("User Page", { pageTitle: "User Page" });
export const userDetail = (req,res) => res.render("User Detail", { pageTitle: "User Detail" });
export const userProfile = (req,res) => res.render("User Profile", { pageTitle: "User Profile" });
export const userInfo = (req,res) => res.render("User Information", { pageTitle: "User Information" });
export const editProfile = (req,res) => res.render("Edit Profile", { pageTitle: "Edit Profile" });
export const editInfo = (req,res) => res.render("Edit Information", { pageTitle: "Edit Information" });
export const changePassword = (req,res) => res.render("Change Password", { pageTitle: "Change Password" });