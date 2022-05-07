const management_service = require("../services/management_service.js");
const navigation_service = require("../services/navigation_service.js");

const getNavigationBar = (req, res) => {
    res.render("navigation");
}

const getNavigationInfo = async (req, res) => {

    let info = navigation_service.getAdminView();

    let user = await management_service.getUserByUsername(req.query.username);

    console.log("user: " + user);
    console.log("username: " + req.query.username);

    if (user !== undefined) {
        console.log("user role is: " + user.role);

        if (user.role === "customer") {
            info = navigation_service.getCustomerView();
        }
        else if (user.role === "admin") {
            info = navigation_service.getAdminView();
        }
        else { // employee
            info = navigation_service.getEmployeeView();
        }
    }
    else {
        console.log("user is undefined");
    }

    res.json(info);
}

module.exports = {
    getNavigationBar,
    getNavigationInfo
};