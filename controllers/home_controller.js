const getHomeView = (req, res) => {
    res.render("index");
}

const getAboutUsView = (req, res) => {
    res.render("about_us");
}

const getContactView = (req, res) => {
    res.render("contact");
}

module.exports = {
    getHomeView,
    getAboutUsView,
    getContactView
};