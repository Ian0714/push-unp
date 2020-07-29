import routes from "../routes";
import push from "../models/workout";

export const getJoin = (req,res) => {
    res.render("Join", { pageTitle: "Join" });
}

export const postJoin = (req,res) => {
    const {
        body: { name, email, password, passwordv, goal }
    } = req;
    if(password === passwordv){
        res.redirect(routes.user);
    } else {
        res.status(400);
        res.render("Join", { pageTitle: "Join" });
    }
}

export const getLogin = (req,res) => {
    res.render("Login", { pageTitle: "Login" });
};

export const postLogin = (req,res) => {
    res.redirect(routes.user);
};

export const logout = (req,res) => {
    res.redirect(routes.home);
};

export const user = async(req,res) => {
    try {
        const infos = await push.find({});
        res.render("user", { pageTitle: "user", infos })
    } catch(error) {
        console.log(error);
        res.render("user", { pageTitle: "user", infos: [] })
    }
};

export const userProfile = (req,res) => res.render("User Profile", { pageTitle: "User Profile" });
export const userInfo = (req,res) => res.render("User Information", { pageTitle: "User Information" });
export const editProfile = (req,res) => res.render("Edit Profile", { pageTitle: "Edit Profile" });
export const editInfo = (req,res) => res.render("Edit Information", { pageTitle: "Edit Information" });
export const changePassword = (req,res) => res.render("Change Password", { pageTitle: "Change Password" });