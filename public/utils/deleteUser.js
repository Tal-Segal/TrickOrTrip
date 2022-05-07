async function deleteUser(username) {
    await fetch("/management/delete/" + username, { method: 'delete' }, true);
}