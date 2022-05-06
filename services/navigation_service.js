home_page = {'id': 'home', 'href': '#index', 'url': '/home', 'description': 'Home'};
management_page = {'id': 'management', 'href': '#management', 'url': '/management', 'description': 'Management'};
gallery_page = {'id': 'gallery', 'href': '#gallery', 'url': '/gallery', 'description': 'Gallery'};
about_us_page = {'id': 'about_us', 'href': '#about_us', 'url': '/about_us', 'description': 'About'};
contact_page = {'id': 'contact', 'href': '#contact', 'url': '/contact', 'description': 'Contact'};

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
        management_page,
        contact_page
    ];
}

const getEmployeeView = () => {
    return [
        home_page,
        about_us_page,
        gallery_page,
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