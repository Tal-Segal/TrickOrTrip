async function editUser(username, role) {
    await fetch("/management/edit/" + username + "/" + role, { method: 'put' }, true);
}