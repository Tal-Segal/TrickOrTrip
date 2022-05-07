async function deleteUser(username) {
    const formData = new FormData();
    formData.append('username', username);
    await fetch("/management/delete/" + username, { method: 'delete' }, true);
}