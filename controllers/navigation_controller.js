// require("../utils/manage_access.js");
const management_service = require("../services/management_service.js");
const navigation_service = require("../services/navigation_service.js");

const getNavigationBar = (req, res) => {
    res.render("navigation_bar");
}

const getNavigationInfo = async (req, res) => {

    let info = navigation_service.getDefaultView();

    let user = await management_service.getUserByUsername(req.query.username);

    if (user !== undefined) {
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
    res.json(info);
}

module.exports = {
    getNavigationBar,
    getNavigationInfo
};