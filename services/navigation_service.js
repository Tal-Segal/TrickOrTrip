home_page = {'id': 'home', 'href': '#home', 'url': '/home', 'description': 'home'};
users_page = {'id': 'users', 'href': '#users', 'url': '/users', 'description': 'users'};
gallery_page = {'id': 'gallery', 'href': '#gallery', 'url': '/gallery', 'description': 'gallery'};
about_us_page = {'id': 'about_us', 'href': '#about_us', 'url': '/about_us', 'description': 'about us'};
contact_page = {'id': 'contact', 'href': '#contact', 'url': '/contact', 'description': 'contact'};

const getDefaultView = () => {
    return [
        home_page,
        about_us_page,
        contact_page
    ];
}

const getAdminView = () => {
    return [
        home_page,
        about_us_page,
        gallery_page,
        users_page,
        contact_page
    ];
}

const getEmployeeView = () => {
    return [
        home_page,
        about_us_page,
        gallery_page,
        users_page,
        contact_page
    ];
}

const getCustomerView = () => {
    return [
        home_page,
        about_us_page,
        gallery_page,
        contact_page
    ];
}

module.exports = {
    getDefaultView,
    getAdminView,
    getEmployeeView,
    getCustomerView
};