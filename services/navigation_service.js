management_page = {'id': 'management', 'href': '#management', 'url': '/management', 'description': 'management'};
gallery_page = {'id': 'gallery', 'href': '#gallery', 'url': '/gallery', 'description': 'gallery'};
about_us_page = {'id': 'about_us', 'href': '#about_us', 'url': '/about_us', 'description': 'about us'};
contact_page = {'id': 'contact', 'href': '#contact', 'url': '/contact', 'description': 'contact'};

const getDefaultView = () => {
    return [
        about_us_page,
        contact_page
    ];
}

const getAdminView = () => {
    return [
        about_us_page,
        gallery_page,
        management_page,
        contact_page
    ];
}

const getEmployeeView = () => {
    return [
        about_us_page,
        gallery_page,
        contact_page
    ];
}

const getCustomerView = () => {
    return [
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