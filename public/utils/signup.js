const service = require("/services/management_service.js");

async function signup(form) {
    //let form = document.getElementById('signupForm');
    let formdata = new URLSearchParams(new FormData(form));
    try {

        // sign up is for customers only
        formdata.append('role', 'customer');

        let response = await fetch("/addUser", {method: "post", body: formdata});
        if (response.ok) {
            localStorage.setItem('username', formdata.get('username'));
            localStorage.setItem('logged', 'yes');

            let user = await service.getUserByUsername(formdata.get('username'));
            localStorage.setItem('role', user.role);
            alert(localStorage.getItem('role'));
            //alert(JSON.parse(localStorage.getItem('logged')) === 'yes');
        } else {
            localStorage.setItem('logged', 'no');
            alert("Cannot sign up. Please try again.")
        }
    } catch (e) {
        console.error('error: ', e)
    }
}