const service = require("/services/management_service.js");

async function login() {
    let form = document.getElementById('loginForm');
    let formdata = new URLSearchParams(new FormData(form));
    try {
        // check is user exists
        let response = await fetch("/login", {method: "post", body: formdata});

        if (response.ok) {
            localStorage.setItem('username', formdata.get('username'));
            localStorage.setItem('logged', 'yes');

            let user = await service.getUserByUsername(formdata.get('username'));
            localStorage.setItem('role', user.role);
            alert(localStorage.getItem('role'));
            //alert(JSON.parse(localStorage.getItem('logged')) === 'yes');
        } else {
            localStorage.setItem('logged', 'no');
            alert("Invalid user credentials. Please try again.")
        }
    } catch (e) {
        console.error('error: ', e)
    }
}